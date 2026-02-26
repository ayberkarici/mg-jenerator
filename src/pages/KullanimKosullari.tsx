import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

export default function KullanimKosullari() {
  return (
    <Layout>
      <Helmet>
        <title>Kullanım Koşulları | MG Jeneratör Hizmetleri</title>
        <meta
          name="description"
          content="MG Jeneratör Hizmetleri web sitesi kullanım koşulları. Siteyi kullanarak bu koşulları kabul etmiş sayılırsınız."
        />
        <link rel="canonical" href="https://mgjenerator.com/kullanim-kosullari" />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content="Kullanım Koşulları | MG Jeneratör Hizmetleri" />
        <meta property="og:url" content="https://mgjenerator.com/kullanim-kosullari" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="tr_TR" />
      </Helmet>

      {/* Hero */}
      <section className="hero-gradient py-16 lg:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
              Kullanım Koşulları
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Son güncelleme: 2 Aralık 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-card rounded-xl p-8 shadow-card border border-border/50 space-y-8">
              
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">1. Kabul</h2>
                <p className="text-muted-foreground leading-relaxed">
                  MG Jeneratör Hizmetleri web sitesini kullanarak bu kullanım koşullarını kabul etmiş 
                  sayılırsınız. Bu koşulları kabul etmiyorsanız, lütfen sitemizi kullanmayınız.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">2. Hizmet Tanımı</h2>
                <p className="text-muted-foreground leading-relaxed">
                  MG Jeneratör Hizmetleri, jeneratör bakım, onarım, revizyon ve teknik danışmanlık 
                  hizmetleri sunmaktadır. Web sitemiz, hizmetlerimiz hakkında bilgi almak ve 
                  bizimle iletişime geçmek için kullanılabilir.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">3. Fikri Mülkiyet</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Web sitemizdeki tüm içerik, tasarım, logo, metin ve görseller MG Jeneratör Hizmetleri'ne 
                  aittir. İzinsiz kopyalanması, çoğaltılması veya dağıtılması yasaktır.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">4. Kullanıcı Sorumlulukları</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Web sitemizi kullanırken:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Doğru ve güncel bilgiler sağlamayı kabul edersiniz</li>
                  <li>Siteyi yasadışı amaçlarla kullanmayacağınızı taahhüt edersiniz</li>
                  <li>Sitenin güvenliğini tehlikeye atacak eylemlerden kaçınmayı kabul edersiniz</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">5. Sorumluluk Sınırlaması</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Web sitemizdeki bilgiler genel bilgilendirme amaçlıdır. Hizmet detayları ve fiyatlar 
                  değişkenlik gösterebilir. Kesin bilgi için doğrudan bizimle iletişime geçmenizi öneririz.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">6. Değişiklikler</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Bu kullanım koşullarını önceden haber vermeksizin değiştirme hakkını saklı tutarız. 
                  Güncellemeler web sitemizde yayınlandığı andan itibaren geçerli olur.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">7. İletişim</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Kullanım koşulları hakkında sorularınız için bizimle iletişime geçebilirsiniz:
                </p>
                <div className="mt-4 p-4 bg-secondary rounded-lg">
                  <p className="text-foreground font-medium">MG Jeneratör Hizmetleri</p>
                  <p className="text-muted-foreground">Telefon: 0 (216) 680 19 97</p>
                  <p className="text-muted-foreground">E-posta: info@mgjenerator.com</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">8. Uygulanacak Hukuk</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Bu kullanım koşulları Türkiye Cumhuriyeti yasalarına tabidir. Herhangi bir 
                  uyuşmazlık durumunda İstanbul Mahkemeleri yetkilidir.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
