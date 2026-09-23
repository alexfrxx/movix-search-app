import { Routes, Route } from 'react-router';
import AppBody from './components/AppBody/AppBody';
import NotFound from './pages/404/404';
import About from './pages/About/About';
import Terms from './pages/Terms/Terms';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<AppBody />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" />
        <Route path="/terms" element={<Terms />} />
        <Route path="/policy" />
        <Route path="support" />
        <Route path="films" />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
