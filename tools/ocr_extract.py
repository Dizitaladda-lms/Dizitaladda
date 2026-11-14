import argparse
import os
from pathlib import Path

import easyocr
import numpy as np
from PIL import Image
from PIL import ImageEnhance, ImageFilter, ImageOps


def _clean_lines(lines: list[str]) -> list[str]:
    cleaned: list[str] = []
    for line in lines:
        line = " ".join(str(line).split())
        if not line:
            continue
        cleaned.append(line)
    return cleaned


def _variants(image: Image.Image, *, scale: float, preprocess: str) -> list[Image.Image]:
    if scale != 1.0:
        image = image.resize((int(image.width * scale), int(image.height * scale)))

    if preprocess == "none":
        return [image]

    # Heuristic variants that often help with infographic text.
    variants: list[Image.Image] = [image]
    gray = ImageOps.grayscale(image)
    gray = ImageOps.autocontrast(gray)
    gray = ImageEnhance.Contrast(gray).enhance(1.8)
    gray = gray.filter(ImageFilter.UnsharpMask(radius=2, percent=175, threshold=3))
    variants.append(gray.convert("RGB"))
    variants.append(ImageOps.invert(gray).convert("RGB"))
    return variants


def _ocr_pil_image(reader: easyocr.Reader, image: Image.Image) -> list[str]:
    image_array = np.array(image)
    lines = reader.readtext(
        image_array,
        detail=0,
        paragraph=False,
        # Be a bit more permissive than defaults to catch small text.
        text_threshold=0.20,
        low_text=0.10,
        link_threshold=0.10,
        # Increase local contrast for low-contrast text.
        contrast_ths=0.05,
        adjust_contrast=0.7,
        # Upscale before detection/recognition.
        mag_ratio=2.0,
    )
    return _clean_lines(lines)


def ocr_image(
    reader: easyocr.Reader,
    image_path: Path,
    *,
    max_width: int = 1600,
    scale: float = 1.0,
    preprocess: str = "basic",
    tile_cols: int = 1,
    tile_rows: int = 1,
) -> list[str]:
    image = Image.open(image_path).convert("RGB")
    if image.width > max_width:
        image = image.resize((max_width, int(image.height * max_width / image.width)))

    lines: list[str] = []
    seen: set[str] = set()

    w, h = image.size
    tile_cols = max(1, tile_cols)
    tile_rows = max(1, tile_rows)

    for r in range(tile_rows):
        for c in range(tile_cols):
            left = int(c * w / tile_cols)
            upper = int(r * h / tile_rows)
            right = int((c + 1) * w / tile_cols)
            lower = int((r + 1) * h / tile_rows)
            tile = image.crop((left, upper, right, lower))
            for variant in _variants(tile, scale=scale, preprocess=preprocess):
                for line in _ocr_pil_image(reader, variant):
                    if line in seen:
                        continue
                    seen.add(line)
                    lines.append(line)

    return lines


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("images", nargs="+", help="Image paths")
    parser.add_argument("--max-width", type=int, default=1600)
    parser.add_argument("--scale", type=float, default=1.0, help="Scale factor before OCR (e.g., 1.5, 2.0)")
    parser.add_argument(
        "--preprocess",
        choices=["basic", "none"],
        default="basic",
        help="Apply basic contrast/sharpen variants to improve OCR",
    )
    parser.add_argument("--tile-cols", type=int, default=1)
    parser.add_argument("--tile-rows", type=int, default=1)
    args = parser.parse_args()

    reader = easyocr.Reader(["en"], gpu=False)

    for img in args.images:
        path = Path(img)
        print(f"\n=== {path.as_posix()} ===")
        if not path.exists():
            print("MISSING")
            continue
        lines = ocr_image(
            reader,
            path,
            max_width=args.max_width,
            scale=args.scale,
            preprocess=args.preprocess,
            tile_cols=args.tile_cols,
            tile_rows=args.tile_rows,
        )
        print(f"lines: {len(lines)}")
        for line in lines:
            print(line)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
