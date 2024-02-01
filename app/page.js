import React from "react";
import Link from "next/link";
import Landing from "@components/Landing/landing";

export default function Home() {
  return (
    <section class="text-gray-600 body-font">
      <Landing />
      {/* <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Welcome to InBulk tools
          </h1>
          <p class="mb-8 leading-relaxed">
            InBulk Tools offers a variety of tools to help you perform different
            tasks in bulk. Our tools include a QR code generator, barcode
            generator, image compressor, and more. With our easy-to-use tools,
            you can save time and effort by generating multiple codes,
            compressing multiple images, and more, all at once. Our website is
            designed to be user-friendly and efficient, so you can get your work
            done quickly and easily. Try our tools today and see how they can
            help you!
          </p>
          <div class="flex justify-center">
            <Link href={"/image-compressor"}>
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Get Started For Free
              </button>
            </Link>
          </div>
        </div>
      </div> */}
    </section>
  );
}
