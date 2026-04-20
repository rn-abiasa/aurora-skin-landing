"use client";

import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  {
    label: "Shop",
    url: "/",
  },
  {
    label: "About",
    url: "/",
  },
  {
    label: "Science",
    url: "/",
  },
  {
    label: "Contact",
    url: "/",
  },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "absolute top-0 w-full flex justify-between items-center p-5 md:px-10 lg:px-20 z-50 transition-all duration-300",
      )}
    >
      <div>
        <a
          href="#"
          className="text-lg md:text-xl font-medium text-white tracking-wide"
        >
          Aurora Skin
        </a>
      </div>
      <div className="flex justify-end items-center gap-10">
        <nav className="hidden md:flex gap-5">
          {links.map((link) => (
            <a href={link.url} className="text-sm font-medium text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <Button className="bg-primary h-10 md:h-12 rounded-full py-1 pr-1 pl-5 md:pl-6 text-white hover:bg-neutral-200 transition-colors flex items-center">
          <span className="text-sm md:text-base font-medium">
            Mulai Perjalananmu
          </span>
          <span className="bg-background h-8 w-8 md:h-10 md:w-10 rounded-full flex justify-center items-center text-primary ml-3 shrink-0">
            <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" />
          </span>
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
