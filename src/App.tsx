import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AccessibilityProvider } from './context/AccessibilityContext';
import { BaseLayout } from './components/layout/BaseLayout/BaseLayout';

function App() {
  return (
    <AccessibilityProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<div className="container" style={{ padding: '40px 20px', minHeight: '50vh' }}><h1>Onde o amor se torna ação</h1></div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AccessibilityProvider>
  );
}

export default App;
