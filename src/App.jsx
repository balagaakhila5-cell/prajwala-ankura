import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AmenitiesPage from './pages/AmenitiesPage';
import ProjectsPage from './pages/ProjectsPage';
import PlotsPage from './pages/PlotsPage';
import PricePage from './pages/PricePage';
import LocationPage from './pages/LocationPage';
import EnquirePage from './pages/EnquirePage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about-us" element={<Navigate to="/about#about-company" replace />} />
        <Route path="/amenities" element={<AmenitiesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/plots" element={<PlotsPage />} />
        <Route path="/price" element={<PricePage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/enquire" element={<EnquirePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
