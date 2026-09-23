import { Routes, Route } from 'react-router';
import AppBody from './components/AppBody/AppBody';
import NotFound from './components/404/404';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppBody />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
