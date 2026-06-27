import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import About from '../components/About';
import Amenities from '../components/Amenities';
import Projects from '../components/Projects';
import Plots from '../components/Plots';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Highlights />
        <About />
        <Amenities />
        <Projects />
        <Plots />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
