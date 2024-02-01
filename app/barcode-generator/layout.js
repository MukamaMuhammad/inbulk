export const metadata = {
  title: "Bulk Barcode Generator",
  description:
    "Generate barcodes in bulk with our bulk barcode generator. Our tool is fast, easy to use, and can generate barcodes in multiple formats. Whether you need to generate barcodes for inventory management, asset tracking, or any other purpose, our bulk barcode generator has you covered. Try it today and see how easy it is to generate barcodes in bulk!",
};

export default function BarcodeLayout({
  children, // will be a page or nested layout
}) {
  return (
    <div className="container mx-auto">
      {children}
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Bulk Barcode generator - Fast, Efficient, and Secure
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Empower your business with our Bulk Barcode Generator, an ideal
              solution for efficiently generating barcodes in large quantities.
              Our user-friendly interface ensures a seamless experience,
              allowing you to swiftly create barcodes for all your products.
            </p>
          </div>
          <div class="flex flex-wrap">
            <div class="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Customizable Barcodes
              </h2>
              <p class="leading-relaxed text-base mb-4">
                Unlock customization options with our Bulk Barcode Generator,
                tailoring barcodes to meet your specific requirements. Choose
                from a range of barcode types such as Code 128, UPC, and EAN.
                Customize size and color to align with your brand identity.
              </p>
            </div>
            <div class="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Easy Integration
              </h2>
              <p class="leading-relaxed text-base mb-4">
                Integrate our Bulk Barcode Generator effortlessly into your
                workflow. Import data seamlessly from a CSV file or connect
                directly to your database for automatic barcode generation.
              </p>
            </div>
            <div class="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                High-Quality Barcodes
              </h2>
              <p class="leading-relaxed text-base mb-4">
                Experience top-notch barcode quality with our Bulk Barcode
                Generator, employing cutting-edge technology. Advanced
                algorithms guarantee barcodes that are easily scannable and
                readable, even at high speeds.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
