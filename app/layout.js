import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import Head from "next/head";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "InBulk - Index your Urls, Generate QR Codes, Generate Barcodes, Compress Images and More",
  description:
    "InBulk offers a variety of tools to help you perform different tasks in bulk. Our tools include a Url Indexing tool, QR code generator, barcode generator, image compressor, and more. With our easy-to-use tools, you can save time and effort by indexing multiple urls, generating multiple codes, compressing multiple images, and more, all at once. Our website is designed to be user-friendly and efficient, so you can get your work done quickly and easily. Try our tools today and see how they can help you!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="saashub-verification" content="264pl0nhkfzo" />
      </Head>
      <body>
        {process.env.GOOGLE_ANALYTICS ? (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js? 
            id=${process.env.GOOGLE_ANALYTICS}`}
            ></Script>
            <Script
              id="google-analytics"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
      
                gtag('config', '${process.env.GOOGLE_ANALYTICS}');
              `,
              }}
            ></Script>
          </>
        ) : null}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
