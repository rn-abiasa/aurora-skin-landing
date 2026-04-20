"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Amelia R.",
    review: "Sentuhan pertama langsung terasa bedanya. Krim ini bukan sekadar pelembap, ini pelukan hangat untuk kulitku setelah hari yang panjang.",
    rating: 5,
  },
  {
    id: 2,
    name: "Diana P.",
    review: "Setiap tetes serumnya seolah berbicara pada kulitku. Wajahku tak pernah terlihat sehidup dan sebercahaya ini sebelumnya.",
    rating: 5,
  },
  {
    id: 3,
    name: "Siti K.",
    review: "Awalnya aku ragu, tapi kejernihan kulitku sekarang adalah bukti nyata. Ritual pagiku tak lagi sama, ini adalah waktu favoritku.",
    rating: 5,
  },
];

function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="p-5 py-16 md:py-24 md:p-10 lg:p-20 bg-secondary/30">
      <div 
        className={cn("flex flex-col items-center justify-center max-w-3xl mx-auto animate-on-scroll", isVisible && "is-visible")}
        ref={ref}
      >
        <p className="text-sm md:text-base font-medium text-muted-foreground text-center uppercase tracking-wider">
          Suara Hati
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-center mt-3 text-foreground">
          Bukti Nyata dari Mereka
        </h2>
        <p className="text-base md:text-lg font-normal text-muted-foreground text-center mt-4">
          Dengarkan langsung dari komunitas kami yang telah merasakan manfaat nyata Aurora Skin.
        </p>
      </div>

      <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div 
            key={testimonial.id} 
            className={cn(
              "bg-background p-8 rounded-3xl shadow-sm border border-border/50 hover:shadow-md transition-shadow duration-300 animate-on-scroll flex flex-col justify-between",
              isVisible && "is-visible",
              `delay-${(index + 1) * 100}`
            )}
          >
            <div>
              <div className="flex gap-1 mb-6 text-emerald-500">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-base md:text-lg font-normal text-foreground/80 leading-relaxed mb-6">
                "{testimonial.review}"
              </p>
            </div>
            <p className="text-sm font-medium text-foreground uppercase tracking-widest">
              — {testimonial.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
