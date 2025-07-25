import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-kr',
});

export const metadata: Metadata = {
  title: "대한필러학회 | Korean Filler Society",
  description: "대한민국 필러 의학의 선도 학회 - 필러 시술 전문 의료진을 위한 학술대회, 교육, 네트워킹 플랫폼",
  keywords: "필러, 필러학회, 미용의학, 에스테틱, 학술대회, 의료교육, Korean Filler Society",
  authors: [{ name: "대한필러학회" }],
  openGraph: {
    title: "대한필러학회 | Korean Filler Society",
    description: "대한민국 필러 의학의 선도 학회",
    url: "https://kfillersociety.org",
    siteName: "대한필러학회",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "대한필러학회",
    description: "대한민국 필러 의학의 선도 학회",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${notoSansKr.variable} font-sans antialiased`}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
