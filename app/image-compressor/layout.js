export const metadata = {
  title: "Bulk Image Compressor - Unlimited images, all at once",
  description:
    "Bulk Image Compressor online. Quickly compress unlimited images in bulk online. No uploading. No Signup. Fast batch compress",
};

export default function ImageCompressorLayout({
  children, // will be a page or nested layout
}) {
  return (
    <div className="container mx-auto">
      {children}
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Bulk Image Compressor - Fast, Efficient, and Secure
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Drag n Drop images and Compress away! No uploading. No signup.
              Reduce size of images in bulk. Compress unlimited images online at
              once. Your photos are your property and stay on your machine.
            </p>
          </div>
          <div class="flex flex-wrap">
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                How to reduce image size from MBs to KBs?
              </h2>
              <p class="leading-relaxed text-base mb-4">
                Image compressor offers various options to compress JPGs and
                PNGs. Drop all images in the dropbox, select the target size in
                KBs, and get your new images with reduced sizes.
              </p>
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                How to compress images?
              </h2>
              <p class="leading-relaxed text-base mb-4">
                Drop as many images or photos in the dropbox. Click Start
                Compressing, and voila! Your images are compressed.
              </p>
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                How to compress JPG, PNG images?
              </h2>
              <p class="leading-relaxed text-base mb-4">
                Bulk compress images of the following types: JPG, JPEG, PNG, BMP
                images. Transparent images will lose transparency. We are
                working on it.
              </p>
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                How to compress multiple images at once?
              </h2>
              <p class="leading-relaxed text-base mb-4">
                Image compressor can batch compress multiple images
                simultaneously. Drop a massive number of images, and get
                compressed images. Often reduced from MBs to KBs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
