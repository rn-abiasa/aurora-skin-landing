"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

function Footer() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <footer className="bg-primary text-primary-foreground pt-16 md:pt-24 pb-8 md:pb-12 px-5 md:px-10 lg:px-20 overflow-hidden mt-10 md:mt-20">
      <div 
        className={cn("max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-20 animate-on-scroll", isVisible && "is-visible")}
        ref={ref}
      >
        {/* Headline & Newsletter */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6 text-white drop-shadow-sm">
            Bergabunglah dengan Perjalanan Kilau Alami Kami.
          </h2>
          <p className="text-base text-white/70 mb-8 leading-relaxed">
            Daftar ke buletin kami untuk mendapatkan pembaruan tentang peluncuran produk baru, tips perawatan kulit, dan penawaran eksklusif.
          </p>
          <div className="flex gap-2 w-full max-w-md bg-white/10 p-1.5 rounded-full border border-white/20 focus-within:border-white/50 transition-colors">
            <input 
              type="email" 
              placeholder="Alamat Email Anda" 
              className="bg-transparent border-none outline-none text-white px-5 py-2 w-full placeholder:text-white/50 font-sans"
            />
            <Button className="rounded-full bg-white text-black hover:bg-neutral-200 aspect-square p-0 h-10 w-10 md:h-12 md:w-12 flex items-center justify-center shrink-0">
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Links & Contact */}
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-24">
          <div>
            <h3 className="text-sm font-medium mb-6 text-white uppercase tracking-widest opacity-80">Tautan</h3>
            <ul className="flex flex-col gap-4 text-base text-white/70">
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Beranda</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Produk</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-transform">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-6 text-white uppercase tracking-widest opacity-80">Kontak</h3>
            <ul className="flex flex-col gap-4 text-base text-white/70">
              <li>info@auroraskin.id</li>
              <li>+62 812 3456 7890</li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Large Brand Name */}
      <div className="mt-20 md:mt-32 pt-8 border-t border-white/10 w-full flex justify-center items-center overflow-hidden">
        <h1 className="text-[20vw] font-medium tracking-tighter text-white opacity-20 uppercase leading-none select-none">
          Aurora
        </h1>
      </div>
      
      <div className="text-center mt-12 text-sm text-white/40">
        &copy; {new Date().getFullYear()} Aurora Skin. Hak Cipta Dilindungi.
      </div>
    </footer>
  );
}

export default Footer;
