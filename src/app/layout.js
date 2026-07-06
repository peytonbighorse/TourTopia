import { Monomaniac_One, Sixtyfour } from "next/font/google";
import "./globals.css";


const monomaniacOne = Monomaniac_One({
  variable: "--font-monomaniac-one",
  weight: "400",
  subsets: ["latin"]
});

const sixtyfour = Sixtyfour({
  variable: "--font-sixtyfour",
  weight: "400",
  subsets: ["latin"]
});

export const metadata = {
  title: "TourTopia",
  description: "Tour-management app for indie bands",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${monomaniacOne.variable} ${sixtyfour.variable}`}>
      <body>{children}</body>
    </html>
  );
}
