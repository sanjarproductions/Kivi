// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Kivi Studio",
  description: "Your Biggest Challenges Don't Scare Us. ",
  metadataBase: new URL("https://kivistudio.vercel.app"),
  openGraph: {
    title: "Kivi Studio",
    description: "Your Biggest Challenges Don't Scare Us. ",
    url: "https://kivistudio.vercel.app",
    siteName: "Kivi Studio",
    // images: [
    //   { url: "/vercel.svg", width: 1200, height: 630, alt: "Kivi Studio" }
    // ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kivi Studio",
    description: "Your Biggest Challenges Don't Scare Us. ",
    // images: ["/vercel.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
