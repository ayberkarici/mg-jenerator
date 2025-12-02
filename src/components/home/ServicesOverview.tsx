import { Link } from "react-router-dom";
import { Wrench, AlertCircle, RefreshCw, MapPin, Clock, Lightbulb, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Periyodik Bakım",
    description: "Düzenli bakım programlarıyla jeneratörünüzün performansını ve ömrünü maksimuma çıkarın.",
    href: "/hizmetler#periyodik-bakim",
  },
  {
    icon: AlertCircle,
    title: "Arıza Onarım",
    description: "Acil arıza durumlarında 7/24 hızlı müdahale ile kesintisiz enerji sağlıyoruz.",
    href: "/hizmetler#ariza-onarim",
  },
  {
    icon: RefreshCw,
    title: "Revizyon",
    description: "Komple revizyon hizmetimizle jeneratörünüzü fabrika ayarlarına geri getiriyoruz.",
    href: "/hizmetler#revizyon",
  },
  {
    icon: MapPin,
    title: "Yerinde Servis",
    description: "Lokasyonunuzda profesyonel servis ekibimizle hızlı ve etkili çözümler.",
    href: "/hizmetler#yerinde-servis",
  },
  {
    icon: Clock,
    title: "7/24 Destek",
    description: "Günün her saati teknik destek hattımız ile yanınızdayız.",
    href: "/hizmetler#7-24-destek",
  },
  {
    icon: Lightbulb,
    title: "Danışmanlık",
    description: "Enerji ihtiyaçlarınıza özel jeneratör seçimi ve çözüm danışmanlığı.",
    href: "/hizmetler#danismanlik",
  },
];

export function ServicesOverview() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Hizmetlerimiz
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Kesintisiz Enerji İçin{" "}
            <span className="text-accent">Profesyonel Çözümler</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Jeneratörlerinizin bakımından revizyonuna, arıza onarımından 7/24 destek hizmetlerine 
            kadar tüm ihtiyaçlarınız için yanınızdayız.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className={`group bg-card rounded-xl p-8 shadow-card card-hover border border-border/50 animate-slide-up stagger-${index + 1}`}
              style={{ animationFillMode: "both" }}
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center text-accent font-medium text-sm">
                Detaylı Bilgi
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/hizmetler"
            className="inline-flex items-center gap-2 btn-secondary"
          >
            Tüm Hizmetlerimizi Görüntüle
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
