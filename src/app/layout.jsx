import localFont from "next/font/local";
import "./globals.css";
import ClientLayout from "./components/ClientLayout/ClientLayout";

export const metadata = {
  title: "Kivi Studio",
  description: "Kivi Studio - custom code website design agency",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
