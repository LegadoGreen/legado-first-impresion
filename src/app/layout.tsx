import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Legado - La Misión que Cambia Tu Vida y el Presente del Planeta",
  description: "Un movimiento global que busca unir al 1% de la población mundial para transformar el futuro de nuestro hogar común",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
