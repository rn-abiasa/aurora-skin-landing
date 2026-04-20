"use client";

import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

function Hero() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-[url('/Skincare-Close-Up.webp')] bg-cover bg-center h-screen p-5 md:p-10 lg:p-20 flex justify-start items-center relative after:absolute after:inset-0 after:bg-black/30 after:z-0 z-0">
      <div className="relative z-10 w-full max-w-4xl" ref={ref}>
        <div className={cn("animate-on-scroll", isVisible && "is-visible")}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-tight drop-shadow-sm">
            Rayakan Cantik Aslimu. Tanpa Kompromi.
          </h1>
          <p className="text-base md:text-lg lg:text-xl font-normal text-white/90 mt-5 md:mt-8 max-w-xl drop-shadow-sm">
            Rangkaian perawatan kulit premium yang diramu khusus untuk merawat
            kecantikan alami Anda. Lepaskan lelah, rasakan kilau yang
            sesungguhnya.
          </p>
          <div className="mt-10 md:mt-12">
            <Button
              size="lg"
              className="rounded-full flex gap-4 p-1 pl-6 md:pl-8 h-14 bg-primary text-white hover:bg-neutral-200 transition-colors"
            >
              <span className="text-base md:text-lg font-medium">
                Mulai Perjalananmu
              </span>
              <span className="bg-background h-12 w-12 rounded-full flex justify-center items-center text-primary">
                <ArrowUpRight className="h-6 w-6" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
