import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Sayfa Bulunamadı | MG Jeneratör Hizmetleri</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center bg-muted">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-heading font-bold text-primary">404</h1>
          <p className="mb-6 text-xl text-muted-foreground">Aradığınız sayfa bulunamadı</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
          >
            Anasayfaya Dön
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
