import Image from "next/image";
import Link from "next/link";
import HeroImg from "@/public/kansas-city.png";
import { FaCalendarAlt } from "react-icons/fa";
import DuctDaddyVan from "@/public/duct-daddy-vehicle.png";

export default function Hero() {
  return (
    <section className="h-[800px] sm:h-[880px] relative overflow-hidden">
      <Image
        src={HeroImg}
        alt="Kansas city background image"
        className="object-cover h-full -z-50"
        quality={100}
        draggable={false}
        priority={true}
      />
      <header className="absolute inset-0 z-10 flex flex-col items-center w-full px-6 pt-28 pb-32 sm:pt-32">
        <h1 className="text-[#333333] text-4xl font-semibold max-w-md sm:max-w-2xl text-center sm:text-6xl">
          Kansas City&apos;s Trusted
          <br className="sm:hidden" />
          {" "} Air Duct & Dryer Vent Cleaning Experts
        </h1>
        <Link
          href="/booking"
          className="bg-[#0080DB] text-[#E6E6E6] mt-8 py-3 px-6 flex items-center gap-x-3 font-semibold rounded-md shadow shadow-[hsl(0,0%,60%)] hover:bg-[hsl(205,100%,33%)] active:bg-[hsl(205,100%,23%)]"
        >
          <FaCalendarAlt className="w-4 h-4" />
          Book online
        </Link>
        <div className="absolute bottom-0 left-[-148px] sm:left-auto sm:relative">
          <Image
            src={DuctDaddyVan}
            alt="Duct daddy van"
            className="object-cover w-auto h-[260px] max-w-4xl sm:mt-[9.675rem] sm:h-auto"
            quality={100}
            loading="lazy"
            priority={false}
            draggable={false}
          />
        </div>
      </header>
    </section>
  );
}