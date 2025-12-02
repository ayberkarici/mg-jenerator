import { Shield, Users, Zap, Award, HeartHandshake, Truck } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Güvenilirlik",
    description: "20 yılı aşkın sektör deneyimi ve binlerce başarılı proje ile güvenilir çözüm ortağınızız.",
  },
  {
    icon: Users,
    title: "Uzman Kadro",
    description: "Alanında uzman 50'den fazla teknik personelimiz ile profesyonel hizmet sunuyoruz.",
  },
  {
    icon: Zap,
    title: "Hızlı Müdahale",
    description: "7/24 acil servis hizmetimiz ile en kısa sürede lokasyonunuza ulaşıyoruz.",
  },
  {
    icon: Award,
    title: "Kalite Garantisi",
    description: "Tüm hizmetlerimiz uluslararası standartlara uygun ve garantili olarak sunulmaktadır.",
  },
  {
    icon: HeartHandshake,
    title: "Müşteri Memnuniyeti",
    description: "%98 müşteri memnuniyet oranımız ile sektörün en güvenilir firmalarından biriyiz.",
  },
  {
    icon: Truck,
    title: "Türkiye Geneli Hizmet",
    description: "81 ilde yaygın servis ağımız ile tüm Türkiye'ye hizmet veriyoruz.",
  },
];

export function WhyUsSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Neden Biz?
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Jeneratör Servisinde{" "}
              <span className="text-accent">Fark Yaratan</span> Çözümler
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              MG Jeneratör olarak, yılların tecrübesi ve uzman kadromuzla sektörde 
              fark yaratıyoruz. Müşteri memnuniyetini her zaman ön planda tutarak, 
              kesintisiz enerji çözümleri sunuyoruz.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Teknik ekip çalışması"
                className="rounded-2xl shadow-elegant w-full object-cover aspect-[3/4]"
              />
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Profesyonel servis"
                className="rounded-2xl shadow-elegant w-full object-cover aspect-[3/4] mt-8"
              />
            </div>
            {/* Stats Card */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-card p-6 rounded-xl shadow-elegant border border-border/50 w-[90%]">
              <div className="grid grid-cols-3 divide-x divide-border">
                <div className="text-center px-4">
                  <div className="text-2xl font-heading font-bold text-accent">500+</div>
                  <div className="text-xs text-muted-foreground">Tamamlanan Proje</div>
                </div>
                <div className="text-center px-4">
                  <div className="text-2xl font-heading font-bold text-accent">%98</div>
                  <div className="text-xs text-muted-foreground">Müşteri Memnuniyeti</div>
                </div>
                <div className="text-center px-4">
                  <div className="text-2xl font-heading font-bold text-accent">81</div>
                  <div className="text-xs text-muted-foreground">İl Hizmet Ağı</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
