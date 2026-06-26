import AnimatedHeading from './AnimatedHeading';
import AnimatedFadeGroup from './AnimatedFadeGroup';
import image1 from '../assets/images/image1.jpeg';
import image3 from '../assets/images/image3.jpeg';

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container about-grid">
        <AnimatedFadeGroup className="about-images">
          <img src={image1} alt="Prajwalaa Ankura exterior view" className="about-img-main" />
          <img src={image3} alt="Prajwalaa Ankura architecture" className="about-img-secondary" />
        </AnimatedFadeGroup>
        <div className="about-text">
          <AnimatedHeading as="span" className="section-tag">About</AnimatedHeading>
          <AnimatedHeading as="h2">Luxury 2 BHK Living in Ameenpur</AnimatedHeading>
          <p>
            Prajwalaa Ankura, developed by Prajwalaa Properties, is located at Ameenpur,
            Hyderabad and offers a vibrant residential experience with 2 BHK flats ranging
            from 1075 to 1580 Sq. Ft. — designed for modern families seeking comfort and
            connectivity.
          </p>
          <p>
            Spread across 0.82 acres with 145 residential units, this low-density project
            offers better privacy and space. Well-connected via Old Mumbai Highway and NH 65,
            with peaceful surroundings away from city noise.
          </p>
          <AnimatedFadeGroup as="ul" className="about-features">
            <li>
              <strong>Strong Connectivity</strong>
              <span>Easy access to IT hubs, schools, and healthcare via major highways</span>
            </li>
            <li>
              <strong>Quality Construction</strong>
              <span>RCC frame structure with vitrified tiles and premium finishes</span>
            </li>
            <li>
              <strong>RERA Approved</strong>
              <span>Registered under P01100010592 &amp; P01100010719 for transparency</span>
            </li>
            <li>
              <strong>Trusted Developer</strong>
              <span>20+ years of excellence with 2000+ happy families</span>
            </li>
          </AnimatedFadeGroup>
        </div>
      </div>
    </section>
  );
}
