import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import CapitalInformation from './pages/CapitalInformation';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/home" element={<Home />} />
      <Route path="/capital/:capitalCity" element={<CapitalInformation />} />
      <Route path="*" element={<Navigate to="/welcome" />} />
    </Routes>
  </BrowserRouter>
);
