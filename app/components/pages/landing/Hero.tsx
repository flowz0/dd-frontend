import Image from "next/image";
import Link from "next/link";
import { BsStarFill } from "react-icons/bs";
import HeroImg from "@/public/kansas-city.jpg";
import { FaCalendarAlt } from "react-icons/fa";
import DuctDaddyVan from "@/public/duct-daddy-vehicle.png";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-44 sm:pt-40 sm:pb-40 overflow-hidden">

      <div className="absolute bottom-0 right-0 z-10 lg:w-[720px] max-w-none lg:right-32">
        <Image
          src={DuctDaddyVan}
          alt="Duct Daddy van"
          className="w-96 h-auto lg:w-full"
          draggable={false}
          priority
        />
      </div>

      <div className="relative max-w-7xl px-6 mx-auto flex flex-col items-center lg:gap-x-2 lg:flex-row">
        <header className="flex flex-col items-center lg:items-start lg:w-1/2">
          <h1 className="text-4xl font-semibold max-w-lg text-center sm:text-5xl lg:text-start">
            Kansas City&apos;s Trusted Air Duct & Dryer Vent Cleaning Experts
          </h1>
          <Link
            href="/booking"
            className="bg-[#0080DB] text-[#E6E6E6] mt-8 py-3 px-6 flex items-center gap-x-3 font-semibold rounded-md hover:bg-[hsl(205,100%,33%)] active:bg-[hsl(205,100%,23%)]"
          >
            <FaCalendarAlt className="w-4 h-4" />
            Book online
          </Link>
          <div className="flex items-center gap-x-2 mt-6">
            <span className="font-semibold">5.0</span>
            <div className="flex gap-x-0.5">
              <BsStarFill className="text-amber-500 w-4 h-4" />
              <BsStarFill className="text-amber-500 w-4 h-4" />
              <BsStarFill className="text-amber-500 w-4 h-4" />
              <BsStarFill className="text-amber-500 w-4 h-4" />
              <BsStarFill className="text-amber-500 w-4 h-4" />
            </div>
            <p className="text-[hsl(0,0%,40%)]">(67 reviews)</p>
          </div>
        </header>
        <div className="flex items-center lg:w-1/2">
          <Image
            src={HeroImg}
            alt="Hero image"
            className="object-cover h-auto w-full max-w-4xl rounded-lg mt-12 shadow-lg shadow-[hsl(0,0%,80%)] lg:h-96 lg:mt-0"
            draggable={false}
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}