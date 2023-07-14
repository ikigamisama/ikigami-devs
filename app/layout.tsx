import { lato } from "@/lib/font";
import "./globals.css";
import type { Metadata } from "next";
import Provider from "@/components/Provider";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Franz Monzales",
  description: "Official Website of Franz Monzales",
  themeColor: "black",
  openGraph: {
    title: "Franz Monzales",
    description: "Official Website of Franz Monzales",
    siteName: "Franz Monzales",
    url: "https://ikigami-devs.vercel.app",
    images: ["https://ikigami-devs.vercel.app/images/main-banner.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Franz Monzales",
    description: "Official Website of Franz Monzales",
    creator: "@iikigami",
    images: ["https://ikigami-devs.vercel.app/images/main-banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lato.className} bg-white dark:bg-[#171923]`}>
        <Provider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <div className="mx-auto min-h-[calc(100vh - 60px)] max-w-screen-xl px-6 py-12 md:px-12 lg:py-8 relative z-20">
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}
