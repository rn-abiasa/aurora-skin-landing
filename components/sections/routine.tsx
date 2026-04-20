"use client";

import { Clock8, Sparkles, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const routines = [
  {
    id: 1,
    name: "Kenali Kebutuhanmu",
    description:
      "Luangkan waktu 2 menit untuk memahami apa yang benar-benar diinginkan oleh kulit Anda.",
    time: "Dalam Hitungan Menit",
    icon: <Clock8 size={24} />,
  },
  {
    id: 2,
    name: "Nikmati Prosesnya",
    description:
      "Jadikan setiap olesan produk sebagai apresiasi terhadap kecantikan unik yang Anda miliki.",
    time: "Setiap Hari",
    icon: <Sparkles size={24} />,
  },
  {
    id: 3,
    name: "Saksikan Keajaibannya",
    description:
      "Dalam beberapa minggu, rasakan tekstur yang lebih kenyal, sehat, dan memancarkan aura positif.",
    time: "Setelah 2 Minggu",
    icon: <CheckCircle size={24} />,
  },
];

function Routine() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-[url('/Glowing-Skin-Close-Up.webp')] bg-cover bg-center mt-10 md:mt-20">
      <div className="bg-black/60 backdrop-blur-md py-16 md:py-24">
        <div
          className={cn(
            "p-5 md:p-10 max-w-4xl mx-auto animate-on-scroll",
            isVisible && "is-visible",
          )}
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white text-center">
            Langkah Mudah Menuju Kesempurnaan
          </h2>
          <p className="text-base md:text-lg font-normal text-white/80 text-center mt-4">
            Telah dicoba, diuji, dan dicintai oleh ribuan pelanggan. Mulai
            perjalanan kulit sehat Anda hari ini.
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-5 md:px-10 mt-8 md:mt-12 flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-8">
          {routines.map((routine, index) => (
            <div
              key={routine.id}
              className={cn(
                "border border-white/20 bg-white/5 backdrop-blur-sm rounded-2xl flex flex-col justify-start gap-5 p-6 md:p-8 hover:bg-white/10 transition-colors duration-300 animate-on-scroll group",
                isVisible && "is-visible",
                `delay-${(index + 1) * 100}`,
              )}
            >
              <div>
                <div className="border border-white/30 h-14 w-14 rounded-full flex justify-center items-center text-white mb-6 bg-white/10 group-hover:scale-110 transition-transform duration-300">
                  {routine.icon}
                </div>
                <p className="text-sm font-medium text-emerald-400 uppercase tracking-wider mb-2">
                  {routine.time}
                </p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-medium text-white mb-3">
                  {routine.name}
                </p>
                <p className="text-base font-normal text-white/70 leading-relaxed">
                  {routine.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Routine;
