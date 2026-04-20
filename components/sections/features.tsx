"use client";

import { Scale, Leaf, Droplet } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const features = [
  {
    id: 1,
    name: "Esensi Alam",
    description:
      "Ekstrak tumbuhan premium yang dipilih dengan teliti untuk memberikan hasil maksimal tanpa bahan kimia berbahaya.",
    icon: <Scale className="w-8 h-8" />,
  },
  {
    id: 2,
    name: "Ramah Lingkungan",
    description:
      "Komitmen kami untuk kecantikan yang bertanggung jawab. Kemasan dan bahan kami 100% mendukung keberlanjutan.",
    icon: <Leaf className="w-8 h-8" />,
  },
  {
    id: 3,
    name: "Teruji Klinis",
    description:
      "Keamanan adalah prioritas. Setiap produk melewati uji ketat untuk memastikan kecocokan dengan berbagai kondisi kulit.",
    icon: <Droplet className="w-8 h-8" />,
  },
];

function Features() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-secondary/50 p-5 py-16 md:py-24 md:p-10 lg:p-20 mt-10 md:mt-20">
      <div 
        className={cn("flex flex-col justify-center items-center max-w-3xl mx-auto animate-on-scroll", isVisible && "is-visible")}
        ref={ref}
      >
        <p className="text-sm md:text-base font-medium text-muted-foreground text-center uppercase tracking-wider">
          Filosofi Kami
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-center mt-3 text-foreground">
          Kemurnian dalam Setiap Tetes
        </h2>
        <p className="text-base md:text-lg font-normal text-muted-foreground text-center mt-4 leading-relaxed">
          Aurora Skin diciptakan dari dedikasi untuk menghadirkan kualitas terbaik bagi kulit Anda. Kami percaya bahwa setiap sentuhan adalah bentuk cinta terhadap diri sendiri.
        </p>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-3 gap-12 md:gap-8 lg:gap-16 mt-16 md:mt-24 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div 
            key={feature.id} 
            className={cn(
              "flex flex-col items-center md:items-start text-center md:text-left animate-on-scroll", 
              isVisible && "is-visible",
              `delay-${(index + 1) * 100}`
            )}
          >
            <span className="text-primary bg-primary/10 p-4 rounded-full mb-2">{feature.icon}</span>
            <h3 className="text-xl md:text-2xl font-medium mt-4 text-foreground">{feature.name}</h3>
            <p className="text-base md:text-lg font-normal text-muted-foreground mt-3 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
