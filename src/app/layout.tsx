import type { Metadata } from "next";
import "./globals.css";
import {Varela_Round} from "next/font/google";

const varelaRound = Varela_Round({
    weight: '400',      // Varela Round only has 400
    subsets: ['latin'],
    display: 'swap',
});


export const metadata: Metadata = {
  title: "Martin Lapšanský | Junior Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={varelaRound.className}
      >
        {children}
      </body>
    </html>
  );
}
