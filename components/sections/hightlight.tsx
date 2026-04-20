"use client";

import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

function Highlight() {
  const { ref: ref1, isVisible: isVis1 } = useScrollAnimation();
  const { ref: ref2, isVisible: isVis2 } = useScrollAnimation();

  return (
    <section className="mt-10 md:mt-20 p-5 md:p-10 lg:p-20 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 h-auto lg:h-[600px]">
        {/* Box 1 */}
        <div 
          className={cn("bg-[url('/Glowing-Skin-Close-Up.png')] bg-cover bg-center w-full rounded-3xl p-8 md:p-10 flex flex-col justify-end min-h-[400px] md:min-h-full animate-on-scroll relative overflow-hidden group", isVis1 && "is-visible")}
          ref={ref1}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-2xl md:text-3xl font-medium text-white leading-snug drop-shadow-sm">
              Ritual Cahaya. Undangan Lembut Menemukan Kembali Kilau Alami
            </h3>
            <p className="text-base font-normal text-white/90 mt-4 drop-shadow-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              Di dunia yang bergerak terlalu cepat, Aurora mengundang Anda untuk melambat. Menemukan kembali kekuatan kulit Anda—tanpa filter, tanpa paksaan, dan hidup secara alami.
            </p>
          </div>
        </div>

        {/* Box 2 */}
        <div 
          className={cn("bg-primary w-full rounded-3xl flex flex-col justify-between p-8 md:p-10 min-h-[400px] md:min-h-full animate-on-scroll delay-100", isVis2 && "is-visible")}
          ref={ref2}
        >
          <div>
            <p className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider">
              Set Rutinitas Kulit Aurora
            </p>
          </div>
          <div className="flex justify-center items-center w-full py-10 md:py-0">
            <p className="text-4xl md:text-5xl lg:text-6xl font-medium text-primary-foreground tracking-tight">Tingkatkan</p>
          </div>
          <div>
            <p className="text-base font-normal text-primary-foreground/90 leading-relaxed">
              Memperkenalkan Set Ritual Aurora—koleksi pilihan yang merayakan perawatan harian sebagai momen ketenangan. Setiap formula dirancang untuk meremajakan.
            </p>
            <Button
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex gap-4 p-1 pl-6 mt-8 h-14 w-max transition-colors"
            >
              <span className="text-base font-medium">Beli Sekarang</span>
              <span className="bg-white h-12 w-12 rounded-full flex justify-center items-center text-emerald-700">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </Button>
          </div>
        </div>

        {/* Box 3 - Hidden on tablet, shown on desktop or stacked on mobile */}
        <div className="hidden lg:block bg-[url('/Minimalist-Green-Tube.png')] bg-cover bg-center rounded-3xl w-full h-full min-h-[400px]"></div>
      </div>
    </section>
  );
}

export default Highlight;
