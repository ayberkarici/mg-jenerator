import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden pb-32 pt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-primary-foreground space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium">7/24 Acil Servis Hizmeti</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              ENERJİNİZ{" "}
              <span className="text-accent">KESİLMESİN</span>{" "}
              DİYE!
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl leading-relaxed">
              20 yılı aşkın tecrübemizle jeneratör bakım, onarım ve revizyon hizmetlerinde 
              kesintisiz güç çözümleri sunuyoruz. Profesyonel ekibimizle her zaman yanınızdayız.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/iletisim">
                <Button className="btn-primary text-lg px-8 py-6 group">
                  Hemen Teklif Al
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/hizmetler">
                <Button variant="hero" className="text-lg px-8 py-6">
                  Hizmetlerimizi Keşfet
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary-foreground/20">
              <div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-accent">20+</div>
                <div className="text-sm text-primary-foreground/70">Yıllık Tecrübe</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-accent">500+</div>
                <div className="text-sm text-primary-foreground/70">Mutlu Müşteri</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-accent">7/24</div>
                <div className="text-sm text-primary-foreground/70">Destek</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden lg:block relative animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-3xl" />
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Profesyonel jeneratör bakım hizmeti"
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card text-card-foreground p-6 rounded-xl shadow-elegant">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-heading font-semibold">Uzman Ekip</div>
                    <div className="text-sm text-muted-foreground">50+ Teknik Personel</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}
