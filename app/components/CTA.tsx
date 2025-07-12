import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="bg-[#16385B] text-[#ffffff] py-20 px-6 sm:py-28">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <header className="flex flex-col">
          <h2 className="text-3xl font-semibold text-center md:text-4xl">
            Breathe without worries
          </h2>
          <p className="mt-4 text-center max-w-2xl">
            Enjoy cleaner air and a healthier home with expert duct cleaning from Kansas City&apos;s trusted pros. Schedule your service today and feel the difference in every breath.
          </p>
        </header>
        <Link
          href="/booking"
          className="bg-[#0080DB] text-[#E6E6E6] mt-8 text-center w-fit py-3 px-6 flex items-center gap-x-3 font-semibold rounded-md hover:bg-[hsl(205,100%,33%)] active:bg-[hsl(205,100%,23%)]"
        >
          <FaCalendarAlt className="w-5 h-5" />
          Book Online
        </Link>
      </div>
    </section>

  );
}