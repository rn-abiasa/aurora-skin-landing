import Navbar from "@/components/ui/navbar";
import Hero from "@/components/sections/hero";
import Variants from "@/components/sections/variants";
import Features from "@/components/sections/features";
import Hightlight from "@/components/sections/hightlight";
import Products from "@/components/sections/products";
import Routine from "@/components/sections/routine";
import Testimonials from "@/components/sections/testimonials";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex-1">
        <Hero />
        <Variants />
        <Features />
        <Hightlight />
        <Products />
        <Routine />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
