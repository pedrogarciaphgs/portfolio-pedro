import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pedro Garcia | Desenvolvedor Full Stack",
  description:
    "Portfólio de Pedro Garcia, desenvolvedor Full Stack com foco em Node.js, TypeScript e aplicações web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
