import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Kivi Studio",
  description: "Kivi Studio - custom code website deasign agency",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
