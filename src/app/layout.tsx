import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ChildrenType } from "@/types";
import "./globals.css";
import Progressbar from "@/components/Components/Progressbar";

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
          <Progressbar
            height="4px"
            color="#624cf5"
            options={{ showSpinner: false }}
            shallowRouting
          />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
