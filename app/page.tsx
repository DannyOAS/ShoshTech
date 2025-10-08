import { AboutSection } from "../components/AboutSection";
import { BlogSection } from "../components/BlogSection";
import { ContactSection } from "../components/ContactSection";
import { Hero } from "../components/Hero";
import { ProductsSection } from "../components/ProductsSection";
import { ServicesSection } from "../components/ServicesSection";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}
