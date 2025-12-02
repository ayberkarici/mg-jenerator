import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Hizmetler from "./pages/Hizmetler";
import Hakkimizda from "./pages/Hakkimizda";
import Iletisim from "./pages/Iletisim";
import GizlilikPolitikasi from "./pages/GizlilikPolitikasi";
import KullanimKosullari from "./pages/KullanimKosullari";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/hizmetler" element={<Hizmetler />} />
            <Route path="/hakkimizda" element={<Hakkimizda />} />
            <Route path="/iletisim" element={<Iletisim />} />
            <Route path="/gizlilik" element={<GizlilikPolitikasi />} />
            <Route path="/kullanim-kosullari" element={<KullanimKosullari />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
