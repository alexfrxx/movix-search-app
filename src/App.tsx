import { Routes, Route } from 'react-router';
import AppBody from './components/AppBody/AppBody';
import NotFound from './pages/404/404';
import About from './pages/About/About';
import Terms from './pages/Terms/Terms';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import MainLayout from './layouts/MainLayout/MainLayout';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Movies from './pages/Movies/Movies';

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<AppBody />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" />
          <Route path="/terms" element={<Terms />} />
          <Route path="/policy" element={<PrivacyPolicy />} />
          <Route path="support" />
          <Route path="*" element={<NotFound />} />
          <Route path="/movies" element={<Movies />} />
        </Route>
      </Routes>
    </>
  );
}
