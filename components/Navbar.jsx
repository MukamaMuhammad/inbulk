"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@public/logo.png";
import { Separator } from "@/components/ui/separator";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          href={"/"}
        >
          <Image src={logo} width={90} height={90} />
        </Link>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-800 font-extrabold">
                  Tools
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col justify-center gap-2 p-2 w-44 md:w-44 text-sm font-medium">
                  <NavigationMenuLink>
                    <Link
                      href={"/"}
                      class="mr-5 hover:text-gray-900 cursor-pointer"
                    >
                      Url Indexer
                    </Link>
                  </NavigationMenuLink>
                  <Separator />
                  <NavigationMenuLink>
                    <Link
                      href={"/image-compressor"}
                      class="mr-5 hover:text-gray-900 cursor-pointer"
                    >
                      Image Compressor
                    </Link>
                  </NavigationMenuLink>
                  <Separator />

                  <NavigationMenuLink>
                    <Link
                      href={"/qrcode-generator"}
                      class="mr-5 hover:text-gray-900 cursor-pointer"
                    >
                      Qr Code Generator
                    </Link>
                  </NavigationMenuLink>
                  <Separator />

                  <NavigationMenuLink>
                    <Link
                      href={"/barcode-generator"}
                      class="mr-5 hover:text-gray-900 cursor-pointer"
                    >
                      BarCode Generator
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <a href="mailto:lolentimuhammad2@gmail.com">
          <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-gray-800 font-extrabold">
            Contact
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
