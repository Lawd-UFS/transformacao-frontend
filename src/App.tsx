import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AccessibilityProvider } from './context/AccessibilityContext';
import { BaseLayout } from './components/layout/BaseLayout/BaseLayout';
import { Hero } from './components/Hero/Hero';
import { SecaoSobre } from './components/SecaoSobre/SecaoSobre';
import { SecaoObras } from './components/SecaoObras/SecaoObras';

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
              </>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </AccessibilityProvider>
  );
}

export default App;

