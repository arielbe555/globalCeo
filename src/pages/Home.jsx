import Hero from '../components/Hero';
import MetricasImpacto from '../components/MetricasImpacto';
import AuthorityStrip from '../components/AuthorityStrip';
import DestinosGallery from '../components/DestinosGallery';
import AppShowcase from '../components/AppShowcase';
import HubAgentes from '../components/HubAgentes';
import CeoBrand from '../components/CeoBrand';
import PlanificadorMagico from '../components/PlanificadorMagico';

const Home = () => {
  return (
    <>
      <Hero />
      <MetricasImpacto />
      <AuthorityStrip />
      <DestinosGallery />
      <AppShowcase />
      <CeoBrand />
      <HubAgentes />
      <PlanificadorMagico />
    </>
  );
};

export default Home;
