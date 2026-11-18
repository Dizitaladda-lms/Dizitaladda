"use client";

import { useId, useLayoutEffect, useRef, useState } from "react";
import SectionHeader from "../SectionHeader";
import { CampusPhoto } from "../../data/campus";
import styles from "./CampusGallery.module.css";

interface BentoGalleryProps {
  photos: CampusPhoto[];
}

export default function BentoGallery({ photos }: BentoGalleryProps) {
  const [phase, setPhase] = useState<"final" | "pile" | "played">("final");
  const gridRef = useRef<HTMLDivElement>(null);
  const hasPlayedRef = useRef(false);
  const titleId = useId();

  const getSpanClass = (span: CampusPhoto["span"]): string => {
    switch (span) {
      case "hero":
        return styles.spanHero;
      case "tall":
        return styles.spanTall;
      case "wide":
        return styles.spanWide;
      default:
        return styles.spanNormal;
    }
  };

  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const measureOffsets = () => {
      const tiles = Array.from(
        grid.querySelectorAll<HTMLElement>("[data-cg-tile]"),
      );
      if (tiles.length === 0) return;

      const gridRect = grid.getBoundingClientRect();
      const centerX = gridRect.left + gridRect.width / 2;
      const centerY = gridRect.top + gridRect.height / 2;

      tiles.forEach((tile, index) => {
        const tileRect = tile.getBoundingClientRect();
        const rotation = [-8, 5, -4, 9, -7, 4, -2][index % 7];
        tile.style.setProperty(
          "--dx",
          `${centerX - (tileRect.left + tileRect.width / 2)}px`,
        );
        tile.style.setProperty(
          "--dy",
          `${centerY - (tileRect.top + tileRect.height / 2)}px`,
        );
        tile.style.setProperty("--r", `${rotation}deg`);
        tile.style.setProperty("--z", `${tiles.length - index}`);
        tile.style.setProperty("--d", `${index * 0.07}s`);
      });
    };

    measureOffsets();
    setPhase("pile");

    if (typeof IntersectionObserver === "undefined") {
      setPhase("final");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hasPlayedRef.current = true;
          setPhase("played");
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(grid);

    const handleResize = () => {
      if (hasPlayedRef.current) return;
      grid.classList.remove(styles.pile);
      measureOffsets();
      grid.classList.add(styles.pile);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className={`${styles.cgSection} cg-section`}
      aria-labelledby={titleId}
    >
      <SectionHeader
        align="center"
        id={titleId}
        label="Inside DizitalAdda"
        title="Explore Our Campus"
        description="Classrooms, workspaces aur learning spaces jahan students apni skills build karte hain."
      />

      <div
        ref={gridRef}
        className={`${styles.grid} ${phase === "pile" ? styles.pile : ""} ${
          phase === "played" ? styles.transition : ""
        }`}
        role="group"
        aria-label="Explore the DizitalAdda campus"
      >
        {photos.map((photo) => (
          <figure
            key={photo.id}
            className={`${styles.tile} ${getSpanClass(photo.span)}`}
            data-cg-tile
          >
            <img src={photo.image} alt={photo.alt} loading="lazy" />
            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
