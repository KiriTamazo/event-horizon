import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ChildrenType } from "@/types";
import NextTopLoader from "nextjs-toploader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppin",
});

export const metadata: Metadata = {
  title: "Event Horizon",
  description: "Ticket Booking Services",
  icons: {
    icon: "/assets/Icon.svg",
  },
};

export default function RootLayout({ children }: ChildrenType) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>
          <NextTopLoader
            color="#624cf5"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #624cf5,0 0 5px #624cf5"
          />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
