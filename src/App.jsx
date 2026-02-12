import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogEntry from './pages/BlogEntry';
import Legales from './pages/Legales';
import LinkGenerator from './pages/LinkGenerator';
import PagoSeguro from './pages/PagoSeguro';
import AltaAgente from './pages/AltaAgente';
import GrupalContrato from './pages/GrupalContrato';
import ToolLayout from './components/ToolLayout';

/* Scroll to top on route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/* Layout con Navbar + Footer (páginas públicas) */
function MainLayout() {
  return (
    <div className="min-h-screen bg-white font-poppins text-slate-800">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Rutas públicas con Navbar + Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogEntry />} />
          <Route path="/legales" element={<Legales />} />
        </Route>

        {/* Rutas standalone (herramientas internas, con branding liviano) */}
        <Route element={<ToolLayout />}>
          <Route path="/link" element={<LinkGenerator />} />
          <Route path="/pago1" element={<PagoSeguro />} />
          <Route path="/alta" element={<AltaAgente />} />
          <Route path="/grupal2026" element={<GrupalContrato />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
