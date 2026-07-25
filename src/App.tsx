import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AccessibilityProvider } from './context/AccessibilityContext';
import { BaseLayout } from './components/layout/BaseLayout/BaseLayout';
import { Hero } from './components/Hero/Hero';
import { SecaoSobre } from './components/SecaoSobre/SecaoSobre';
import { SecaoObras } from './components/SecaoObras/SecaoObras';
import { SecaoFacaParte } from './components/SecaoFacaParte/SecaoFacaParte';
import { SecaoParcerias } from './components/SecaoParcerias/SecaoParcerias';
import { SecaoFAQ } from './components/SecaoFAQ/SecaoFAQ';

function App() {
  return (
    <AccessibilityProvider>
      <BrowserRouter>
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
          </Route>
        </Routes>
      </BrowserRouter>
    </AccessibilityProvider>
  );
}

export default App;
