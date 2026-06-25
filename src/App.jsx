import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import About from './components/About';
import Amenities from './components/Amenities';
import Plots from './components/Plots';
import AboutUs from './components/AboutUs';
import Price from './components/Price';
import Location from './components/Location';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import EnquireForm from './components/EnquireForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Amenities />
        <Plots />
        <AboutUs />
        <Price />
        <Location />
        <Testimonials />
        <FAQ />
        <EnquireForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
