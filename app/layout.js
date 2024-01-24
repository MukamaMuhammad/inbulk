import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "InBulk Tools - Generate QR Codes, Barcodes, Compress Images and More",
  description:
    "InBulk Tools offers a variety of tools to help you perform different tasks in bulk. Our tools include a QR code generator, barcode generator, image compressor, and more. With our easy-to-use tools, you can save time and effort by generating multiple codes, compressing multiple images, and more, all at once. Our website is designed to be user-friendly and efficient, so you can get your work done quickly and easily. Try our tools today and see how they can help you!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
