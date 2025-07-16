"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import BrandLogo from "@/public/Duct-Daddy-03.png";
import { FaPhoneAlt, FaCalendarAlt } from "react-icons/fa";

export default function Navbar() {
  const Links = [
    { name: "Services", href: "#services" },
    { name: "Service Area", href: "#service-area" },
    { name: "FAQs", href: "#faqs" },
    { name: "Blog", href: "/blog" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollThreshold = 0;
  const router = useRouter();
  const pathname = usePathname();

  const handleScrollToSection = (id: string) => {
    if (pathname !== "/") {
      localStorage.setItem("scrollTarget", id);
      router.push("/");
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const target = localStorage.getItem("scrollTarget");
    if (target && pathname === "/") {
      const el = document.getElementById(target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      localStorage.removeItem("scrollTarget");
    }
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <nav className={`fixed h-20 w-full z-50 transition-all duration-300 ease-in-out ${isOpen ?
      "bg-[#ffffff]"
      : isScrolled ? "bg-[#ffffff] shadow shadow-[hsl(0,0%,60%)]" : "transparent"} `}>
      <div className="flex justify-between items-center h-full max-w-7xl mx-auto px-6">
        <div className="flex gap-8">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image
              src={BrandLogo}
              alt="Netflows logo"
              className="h-12 w-auto"
              draggable="false"
              priority={false}
            />
          </Link>

          {/* Desktop Links */}
          <ul className="hidden font-semibold text-base/[32px] tracking-[0.016em] md:flex md:items-center md:gap-x-4">
            {Links.map((link) => (
              <li key={link.href}>
                {link.href.startsWith("#") ? (
                  <button
                    onClick={() => handleScrollToSection(link.href.slice(1))}
                    className={`transition-colors duration-300
                      ${pathname === "/" ? "text-[#333333] hover:text-[#0080DB]" : "hover:text-[#0080DB]"}`}
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`transition-colors duration-300
                      ${pathname === link.href ? "text-[#0080DB] hover:text-[#0080DB]" : "hover:text-[#0080DB]"}`}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-6">
          {pathname === "/blog" || pathname === "/dashboard" || pathname === "/create-blog" || pathname.startsWith("/edit/") || pathname === "/login" || pathname === "/register" ? (
            <Link href="/dashboard" className="hidden bg-[#0080DB] text-[#ffffff] duration-300 transition-colors py-1 px-4 font-semibold text-base/[32px] tracking-[0.016em] rounded-lg md:block hover:bg-[hsl(205,100%,33%)] active:bg-[hsl(205,100%,23%)]">
              Dashboard
            </Link>
          ) : (
            <div className="flex gap-6">
              <Link href="tel:+18167082608" className="hidden text-[hsl(0,0%,40%)] font-semibold transition-colors duration-300 hover:text-[#333333] lg:flex lg:items-center lg:gap-x-2">
                <FaPhoneAlt className="w-4 h-4" />
                (816) 708-2608
              </Link>
              <Link
                href="/booking"
                className={`hidden duration-300 transition-colors py-1 px-4 font-semibold text-base/[32px] tracking-[0.016em] rounded-lg md:flex md:items-center md:gap-x-3
              ${pathname === "/booking"
                    ? " bg-[hsl(205,100%,53%)] text-[#ffffff] hover:bg-[hsl(205,100%,33%)] active:bg-[hsl(205,100%,23%)]"
                    : "bg-[#0080DB] text-[#ffffff] hover:bg-[hsl(205,100%,33%)] active:bg-[hsl(205,100%,23%)]"
                  } `}
              >
                <FaCalendarAlt className="w-4 h-4" />
                Book online
              </Link>
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center cursor-pointer py-2.5"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className={`bg-[#333333] block transition-all duration-300 ease-out 
                    h-0.5 w-7 rounded-sm ${isOpen ?
              'rotate-45 translate-y-1' : '-translate-y-0.5'
            }`} >
          </span>
          <span className={`bg-[#333333] block transition-all duration-300 ease-out 
                    h-0.5 w-7 rounded-sm my-0.5 ${isOpen ?
              'opacity-0' : 'opacity-100'
            }`} >
          </span>
          <span className={`bg-[#333333] block transition-all duration-300 ease-out
            h-0.5 w-7 rounded-sm ${isOpen ?
              '-rotate-45 -translate-y-1' : 'translate-y-0.5'
            }`} >
          </span>
        </button>
      </div>

      {/* Mobile Links */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden bg-[#ffffff] pt-2"
          >
            <ul className="flex flex-col gap-y-2 px-8 font-bold text-3xl/[42px] tracking-[0.016em]">
              {Links.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("#") ? (
                    <button
                      onClick={() => {
                        handleScrollToSection(link.href.slice(1));
                        setIsOpen(false);
                      }}
                      className="text-[#333333]"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={`${pathname === link.href
                        ? "text-[#00b4ff]"
                        : "text-[#333333]"
                        }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};