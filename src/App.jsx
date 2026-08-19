import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import CtaSection from './components/home/CtaSection';
import SigmiPage from './pages/SigmiPage';
import ContactPage from './pages/ContactPage';
import RealisationsPage from './pages/RealisationsPage';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sigmi" element={<SigmiPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/realisations" element={<RealisationsPage />} />
      </Routes>
      <CtaSection />
      <Footer />
    </BrowserRouter>
  );
}

export default App;