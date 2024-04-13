import Footer from "@/components/Components/Footer";
import Header from "@/components/Components/Header";
import { ChildrenType } from "@/types";
export const metadata = {
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};
export default function RootLayout({ children }: ChildrenType) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
