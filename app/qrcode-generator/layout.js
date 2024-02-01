export const metadata = {
  title: "Bulk Qr Code Generator",
  description:
    "Generate multiple QR codes at once with our bulk QR code generator. Our tool is fast, easy to use, and can generate thousands of QR codes in multiple formats. Whether you need to generate QR codes for inventory management, asset tracking, or any other purpose, our bulk QR code generator has you covered. Try it today and see how easy it is to generate QR codes in bulk!",
};

export default function QrcodeLayout({
  children, // will be a page or nested layout
}) {
  return (
    <div className="container mx-auto">
      {children}
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Bulk Qr Code generator - Fast, Efficient, and Secure
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Our Bulk Qr Code Generator is the perfect solution for businesses
              that need to generate Qr Codes in bulk. With our easy-to-use
              interface, you can quickly and easily create Qr Codes for all of
              your products.
            </p>
          </div>
          <div class="flex flex-wrap">
            <div class="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Customizable Qr Codes
              </h2>
              <p class="leading-relaxed text-base mb-4">
                Our Bulk Qr Code Generator allows you to customize your Qr Codes
                to fit your needs. You can choose from a variety of Qr Code
                types, including Code 128, UPC, and EAN. You can also customize
                the size and color of your Qr Codes to match your branding.
              </p>
            </div>
            <div class="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Easy Integration
              </h2>
              <p class="leading-relaxed text-base mb-4">
                Our Bulk Qr Code Generator is designed to be easy to integrate
                into your existing workflow. You can easily import your data
                from a CSV file or connect to your database to generate Qr Codes
                automatically.
              </p>
            </div>
            <div class="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                High-Quality Qr Codes
              </h2>
              <p class="leading-relaxed text-base mb-4">
                Our Bulk Qr Code Generator uses the latest technology to ensure
                that your Qr Codes are of the highest quality. We use advanced
                algorithms to generate Qr Codes that are easy to scan and read,
                even at high speeds.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
