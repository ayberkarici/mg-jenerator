import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Award, Users, Clock, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Shield,
    title: "Güvenilirlik",
    description: "Verdiğimiz sözlerin arkasında dururuz. Müşterilerimize her zaman dürüst ve şeffaf yaklaşırız.",
  },
  {
    icon: Award,
    title: "Kalite",
    description: "En yüksek kalite standartlarında hizmet sunar, sürekli kendimizi geliştiririz.",
  },
  {
    icon: Zap,
    title: "Hız",
    description: "Zamanın değerini biliriz. Hızlı müdahale ve çözüm odaklı yaklaşımımızla fark yaratırız.",
  },
  {
    icon: Heart,
    title: "Müşteri Odaklılık",
    description: "Müşteri memnuniyeti her şeyin önündedir. İhtiyaçlarınızı anlar, size özel çözümler sunarız.",
  },
];

const milestones = [
  { year: "2003", title: "Kuruluş", description: "MG Jeneratör, İstanbul'da küçük bir atölye olarak faaliyete başladı." },
  { year: "2008", title: "Büyüme", description: "İlk şubemizi açarak Marmara Bölgesi'ne yayıldık." },
  { year: "2013", title: "Türkiye Geneli", description: "81 ilde hizmet ağımızı oluşturduk." },
  { year: "2018", title: "Dijital Dönüşüm", description: "7/24 dijital destek platformumuzu hayata geçirdik." },
  { year: "2023", title: "20. Yıl", description: "20 yıllık tecrübemizle sektörün lider firmalarından biri olduk." },
];

const team = [
  { name: "Mehmet Güner", role: "Kurucu & Genel Müdür", experience: "25+ Yıl Tecrübe" },
  { name: "Ali Yıldız", role: "Teknik Direktör", experience: "20+ Yıl Tecrübe" },
  { name: "Ayşe Kara", role: "Operasyon Müdürü", experience: "15+ Yıl Tecrübe" },
  { name: "Can Demir", role: "Satış Direktörü", experience: "18+ Yıl Tecrübe" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Anasayfa", item: "https://mgjenerator.com/" },
    { "@type": "ListItem", position: 2, name: "Hakkımızda", item: "https://mgjenerator.com/hakkimizda" },
  ],
};

export default function Hakkimizda() {
  return (
    <Layout>
      <Helmet>
        <title>Hakkımızda | MG Jeneratör Hizmetleri - 20 Yıllık Tecrübe</title>
        <meta
          name="description"
          content="MG Jeneratör Hizmetleri olarak 20 yılı aşkın tecrübemizle Türkiye'nin güvenilir jeneratör servis şirketiyiz. Misyon, vizyon ve değerlerimizi keşfedin."
        />
        <link rel="canonical" href="https://mgjenerator.com/hakkimizda" />
        <meta property="og:title" content="Hakkımızda | MG Jeneratör Hizmetleri" />
        <meta property="og:description" content="20 yılı aşkın tecrübemizle Türkiye'nin güvenilir jeneratör servis şirketi." />
        <meta property="og:url" content="https://mgjenerator.com/hakkimizda" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://mgjenerator.com/og-image.jpg" />
        <meta property="og:locale" content="tr_TR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hakkımızda | MG Jeneratör Hizmetleri" />
        <meta name="twitter:description" content="20 yılı aşkın tecrübemizle Türkiye'nin güvenilir jeneratör servis şirketi." />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="hero-gradient py-20 lg:py-32">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Hakkımızda
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
                20 Yılı Aşkın<br />
                <span className="text-accent">Tecrübe ve Güven</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                2003 yılından bu yana jeneratör bakım, onarım ve revizyon hizmetlerinde 
                Türkiye'nin güvenilir çözüm ortağıyız. Uzman kadromuz ve kaliteli hizmet 
                anlayışımızla binlerce müşterimize kesintisiz enerji sunuyoruz.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-3xl" />
                <img
                  src="/images/about-team.webp"
                  alt="MG Jeneratör Hizmetleri uzman teknik ekibi"
                  width={600}
                  height={450}
                  className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-card border border-border/50">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Misyonumuz</h2>
              <p className="text-muted-foreground leading-relaxed">
                Müşterilerimize en yüksek kalitede jeneratör bakım, onarım ve revizyon hizmetleri 
                sunarak, işletmelerinin enerji güvenliğini sağlamak ve kesintisiz üretim süreçlerine 
                katkıda bulunmak.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 shadow-card border border-border/50">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Vizyonumuz</h2>
              <p className="text-muted-foreground leading-relaxed">
                Türkiye'nin ve bölgenin en güvenilir, yenilikçi ve müşteri odaklı jeneratör 
                servis şirketi olmak. Teknolojiyi yakından takip ederek sektörde öncü konumumuzu 
                sürdürmek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Değerlerimiz
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Bizi <span className="text-accent">Farklı Kılan</span> Değerler
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline - Şu an için gizli, sonra düzenlenecek
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Tarihçemiz
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              <span className="text-accent">20 Yıllık</span> Yolculuk
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-card rounded-xl p-6 shadow-card border border-border/50 inline-block">
                      <div className="text-accent font-heading font-bold text-2xl mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="font-heading font-semibold text-foreground mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-accent rounded-full relative z-10 shrink-0 hidden md:block" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Team - Şu an için gizli, sonra düzenlenecek
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Ekibimiz
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              <span className="text-accent">Uzman</span> Kadromuz
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-card rounded-xl p-6 shadow-card border border-border/50 text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-heading font-bold text-xl">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-accent text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground text-xs">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Stats */}
      <section className="hero-gradient py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-primary-foreground">
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">20+</div>
              <div className="text-primary-foreground/70">Yıllık Tecrübe</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">500+</div>
              <div className="text-primary-foreground/70">Mutlu Müşteri</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">50+</div>
              <div className="text-primary-foreground/70">Uzman Personel</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">81</div>
              <div className="text-primary-foreground/70">İlde Hizmet</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Bizimle Çalışmak İster Misiniz?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Jeneratör ihtiyaçlarınız için bugün bizimle iletişime geçin.
          </p>
          <Link to="/iletisim">
            <Button className="btn-primary text-lg px-8 py-6">
              İletişime Geçin
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
