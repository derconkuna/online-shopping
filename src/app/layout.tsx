import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import HeaderBottom from "@/components/header/HeaderBottom";
import Footer from "@/components/header/Footer";
import StoreProvider from "@/storeProvider/StoreProvider";
import SessionWrapper from "@/components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Online Shopping",
  description: "Generated by create next app",
};
//,pageProps: { session, ...pageProps }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <SessionWrapper>
        <html lang="en">
          <body className={inter.className}>
            <div className=" sticky top-0 z-50">
              <Header />

              <HeaderBottom />
            </div>

            <div className=" bg-gray-300">{children}</div>
            <Footer />
          </body>
        </html>
      </SessionWrapper>
    </StoreProvider>
  );
}
