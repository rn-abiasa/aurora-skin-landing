"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const features = [
  {
    id: 1,
    name: "Purify",
    description:
      "Menyapu kotoran dengan kelembutan ekstra, mengembalikan kemurnian wajah tanpa menghilangkan kelembapan alami.",
    image: "/Minimalist Cosmetic Display.webp",
  },
  {
    id: 2,
    name: "Nourish",
    description:
      "Tetesan ajaib yang meresap ke lapisan terdalam, memberikan asupan nutrisi untuk menjaga elastisitas kulit.",
    image: "/Minimalist Cosmetic Tube.webp",
  },
  {
    id: 3,
    name: "Shield",
    description:
      "Bagaikan perisai tak kasatmata yang melindungi dari polusi dan bahaya sinar matahari sepanjang hari.",
    image: "/Minimalist-Green-Tube.webp",
  },
  {
    id: 4,
    name: "Revive",
    description:
      "Krim malam restoratif yang bekerja selaras dengan ritme istirahat Anda. Bangun dengan wajah segar berseri.",
    image: "/Minimalist Cosmetic Jar.webp",
  },
];

function Variants() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="p-5 md:p-10 lg:p-20 overflow-hidden bg-background">
      <div
        className={cn(
          "mt-10 md:mt-16 animate-on-scroll",
          isVisible && "is-visible",
        )}
        ref={ref}
      >
        <p className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">
          Seni Merawat Diri
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mt-3 text-foreground">
          Sentuhan Mewah untuk Kulitmu
        </h2>
      </div>
      <div className="flex gap-5 md:grid md:grid-cols-2 lg:grid-cols-4 overflow-x-auto md:overflow-visible mt-10 md:mt-16 pb-5 md:pb-0 scrollbar-hide snap-x md:snap-none">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            style={{ backgroundImage: `url('${feature.image}')` }}
            className={cn(
              "bg-cover bg-center h-[400px] md:h-[450px] w-80 md:w-auto shrink-0 md:shrink rounded-2xl overflow-hidden group relative animate-on-scroll snap-center",
              isVisible && "is-visible",
              `delay-${(index + 1) * 100}`,
            )}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500"></div>
            <div className="relative h-full flex flex-col justify-between p-6 md:p-8 z-10">
              <div>
                <p className="text-xl md:text-2xl font-medium text-white drop-shadow-sm">
                  {feature.name}
                </p>
              </div>
              <div className="transform md:translate-y-4 md:opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-sm md:text-base font-normal text-white drop-shadow-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Variants;
