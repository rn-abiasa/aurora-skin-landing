"use client";

import { Scale, Leaf, Droplet } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const features = [
  {
    id: 1,
    name: "Keseimbangan Alami",
    description:
      "Diformulasikan dengan bahan aktif lembut yang terinspirasi oleh keseimbangan alam untuk merawat kulit tanpa iritasi.",
    icon: <Scale className="w-8 h-8" />,
  },
  {
    id: 2,
    name: "Bahan Vegan & Organik",
    description:
      "Menggunakan bahan vegan pilihan yang ditanam secara organik demi menjaga kualitas serta kelestarian lingkungan.",
    icon: <Leaf className="w-8 h-8" />,
  },
  {
    id: 3,
    name: "Hidrasi Tahan Lama",
    description:
      "Teknologi pengunci kelembapan memberikan hidrasi mendalam yang menjaga kulit Anda kenyal dan bercahaya sepanjang hari.",
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
          Keseimbangan
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-center mt-3 text-foreground">
          Kecantikan dalam Harmoni
        </h2>
        <p className="text-base md:text-lg font-normal text-muted-foreground text-center mt-4 leading-relaxed">
          Karena kilau sejati lahir di antara niat dan insting, antara sains yang teruji dan perawatan diri yang tulus.
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
