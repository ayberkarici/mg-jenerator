import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Jeneratörünüz İçin{" "}
            <span className="text-accent">Profesyonel Destek</span> Almaya Hazır mısınız?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Hemen bizimle iletişime geçin, uzman ekibimiz size en uygun çözümü sunmak için hazır.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/iletisim">
              <Button className="btn-primary text-lg px-8 py-6 group">
                Teklif Al
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="tel:+902121234567">
              <Button variant="hero" className="text-lg px-8 py-6">
                <Phone className="mr-2 w-5 h-5" />
                0212 123 45 67
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
