import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            width={40}
            height={40}
            src="/assets/images/logo.svg"
            alt="logo"
          />
        </Link>
        <p>{year} Event Horizon. All Rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
