"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const products = [
  {
    id: 1,
    name: "Krim Kelembapan Ekstra",
    description: "Pembaruan mingguan, hidrasi mendalam untuk kulit berseri.",
    category: "Perawatan",
    price: "Rp 200.000",
    image: "/product1.webp",
  },
  {
    id: 2,
    name: "Serum Revitalisasi",
    description: "Menutrisi kulit, mengatasi penuaan dini secara presisi.",
    category: "Intensif",
    price: "Rp 350.000",
    image: "/product2.webp",
  },
  {
    id: 3,
    name: "Pembersih Wajah Lembut",
    description: "Membersihkan pori-pori tanpa menghilangkan minyak alami.",
    category: "Dasar",
    price: "Rp 150.000",
    image: "/product3.webp",
  },
];

function Products() {
  const { ref, isVisible } = useScrollAnimation();

  const handleProductClick = (productName: string) => {
    const message = `Halo, saya tertarik dengan produk ${productName} dari Aurora Skin. Apakah produk ini masih tersedia?`;
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="mt-10 md:mt-20 p-5 md:p-10 lg:p-20 bg-background overflow-hidden">
      <div
        className={cn(
          "flex flex-col items-center justify-center max-w-3xl mx-auto animate-on-scroll",
          isVisible && "is-visible",
        )}
        ref={ref}
      >
        <p className="text-sm md:text-base font-medium text-muted-foreground text-center uppercase tracking-wider">
          Produk Kami
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-center mt-3 text-foreground">
          Favorit Komunitas Kami
        </h2>
        <p className="text-base md:text-lg font-normal text-muted-foreground text-center mt-4">
          Telah dicoba, diuji, dan dicintai oleh ribuan pelanggan setia kami.
        </p>
      </div>

      <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-10 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={cn(
              "bg-emerald-50/50 rounded-3xl p-6 md:p-8 flex flex-col cursor-pointer border border-emerald-100 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll group",
              isVisible && "is-visible",
              `delay-${(index + 1) * 100}`,
            )}
            onClick={() => handleProductClick(product.name)}
          >
            <div className="mb-6">
              <p className="text-sm md:text-base font-medium text-emerald-700 uppercase tracking-widest">
                {product.category}
              </p>
            </div>
            <div className="flex-grow flex justify-center items-center py-10 relative">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-64 object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500 ease-out drop-shadow-md"
              />
            </div>
            <div className="mt-auto pt-6 border-t border-emerald-200/50">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3 gap-2">
                <p className="text-xl md:text-2xl font-medium text-foreground leading-tight">
                  {product.name}
                </p>
                <p className="text-lg font-medium text-emerald-700 whitespace-nowrap bg-emerald-100/50 px-3 py-1 rounded-full">
                  {product.price}
                </p>
              </div>
              <p className="text-sm md:text-base font-normal text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
