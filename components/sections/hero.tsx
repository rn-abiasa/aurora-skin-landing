"use client";

import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

function Hero() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-[url('/Skincare-Close-Up.webp')] bg-cover bg-center h-screen p-5 md:p-10 lg:p-20 flex justify-start items-center relative after:absolute after:inset-0 after:bg-black/30 after:z-0 z-0">
      <div className="relative z-10 w-full max-w-3xl" ref={ref}>
        <div className={cn("animate-on-scroll", isVisible && "is-visible")}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-tight drop-shadow-sm">
            Tampil Percaya Diri.
            <br />
            Berawal dari Sains.
          </h1>
          <p className="text-base md:text-lg lg:text-xl font-normal text-white/90 mt-5 md:mt-8 max-w-xl drop-shadow-sm">
            Formula skincare praktis yang dikembangkan dengan presisi
            dermatologis untuk kilau wajah setiap hari.
          </p>
          <div className="mt-10 md:mt-12">
            <Button
              size="lg"
              className="rounded-full flex gap-4 p-1 pl-6 md:pl-8 h-14 bg-white text-black hover:bg-neutral-200 transition-colors"
            >
              <span className="text-base md:text-lg font-medium">
                Beli Sekarang
              </span>
              <span className="bg-primary h-12 w-12 rounded-full flex justify-center items-center text-white">
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
