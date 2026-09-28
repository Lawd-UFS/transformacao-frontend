import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AccessibilityProvider } from './context/AccessibilityContext';
import { BaseLayout } from './components/layout/BaseLayout/BaseLayout';
import { Hero } from './components/Hero/Hero';
import { SecaoSobre } from './components/SecaoSobre/SecaoSobre';
import { SecaoObras } from './components/SecaoObras/SecaoObras';
import { SecaoFacaParte } from './components/SecaoFacaParte/SecaoFacaParte';
import { SecaoParcerias } from './components/SecaoParcerias/SecaoParcerias';
import { SecaoFAQ } from './components/SecaoFAQ/SecaoFAQ';
import { QuemSomos } from './pages/QuemSomos/QuemSomos';
import { Obras } from './pages/Obras/Obras';
import { ScrollToTop } from './components/ScrollToTop';
import { Doacao } from './pages/Doacao/Doacao';
import { Parceiras } from './pages/Parceiras/Parceiras';
import { Contact } from './pages/Contact/Contact';
import { Voluntariado } from './pages/Voluntariado/Voluntariado';

function App() {
  return (
    <AccessibilityProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={
              <>
                <Hero />
                <SecaoSobre />
                <SecaoObras />
                <SecaoFacaParte />
                <SecaoParcerias />
                <SecaoFAQ />
              </>
            } />
            <Route path="quem-somos" element={<QuemSomos />} />
            <Route path="transparencia" element={<QuemSomos />} />
            <Route path="obras" element={<Obras />} />
            <Route path="doacao" element={<Doacao />} />
            <Route path="parceiras" element={<Parceiras />} />
            <Route path="parceria" element={<Navigate to="/parceiras" replace />} />
            <Route path="contato" element={<Contact />} />
            <Route path="voluntariado" element={<Voluntariado />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AccessibilityProvider>
  );
}

export default App;
