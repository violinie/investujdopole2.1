import "../styles/globals.css";
import { Noto_Sans } from "next/font/google";

const noto_sans = Noto_Sans({
  subsets: ["latin-ext"],
  variable: "--font-noto-sans",
});

export const metadata = {
  title: "Poslední perla trojských pozemků | Investuj do pole",
  description: "Jedinečná příležitost vlastnit poslední pozemek této velikosti a exkluzivity v Praze-Troji."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body className={`${noto_sans.variable} font-sans`}>{children}</body>
    </html>
  );
}
