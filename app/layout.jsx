import "./globals.css";

export const metadata = {
  title: "Dizital Adda",
  description: "Digital marketing and technology courses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
