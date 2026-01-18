import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const montserrat = localFont({
  src: [
    { path: "./fonts/Montserrat-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Montserrat-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Montserrat-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/Montserrat-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/Montserrat-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "siereFire - Soluções em Tecnologia",
  description:
    "Consultoria em TI, desenvolvimento de sistemas, análises de dados e automações para empresas.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${montserrat.variable} antialiased`}>
        {children}
        {process.env.NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN && (
          <Script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token": "${process.env.NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN}"}`}
          />
        )}
      </body>
    </html>
  );
}
