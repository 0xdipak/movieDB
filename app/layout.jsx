import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "movieDB",
  description: "A site, thousands of movies are found.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="px-10 pt-5">
          <Link href={"/"} className="text-2xl font-semibold">
            Movie <span className="text-teal-500">DB</span>
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
