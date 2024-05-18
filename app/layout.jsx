import Header from "@/components/Header";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const firaCode = Fira_Code({ subsets: ["latin"], display: 'swap' });

export const metadata = {
  title: "Trialer.js",
  description: "A portfolio of a Software Developer, Emiedonmokumo Dick-Boro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
        <link rel="icon" href="/assets/favicon.svg" sizes="any" />
      </head>
      <body className={`${firaCode.className} bg-background text-gray`}>
        <Header />
        <div className="lg:container mx-auto p-5">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
