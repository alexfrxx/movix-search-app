import { Routes, Route } from 'react-router';
import AppBody from './components/AppBody/AppBody';
import NotFound from './pages/404/404';
import Terms from './pages/Terms/Terms';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import MainLayout from './layouts/MainLayout/MainLayout';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Movies from './pages/Movies/Movies';
import Contact from './pages/Contact/Contact';

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<AppBody />} />
          <Route path="/contact" element={<Contact />} />
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
