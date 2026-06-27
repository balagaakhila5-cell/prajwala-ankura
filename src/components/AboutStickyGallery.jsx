import image9 from '../assets/images/image9.jpg';
import image10 from '../assets/images/image10.jpg';
import image11 from '../assets/images/image11.jpg';
import image12 from '../assets/images/image12.jpg';
import image13 from '../assets/images/image13.jpg';
import image14 from '../assets/images/image14.jpg';

const galleryImages = [
  { src: image9, alt: 'Prajwalaa Ankura grand entrance and residential towers' },
  { src: image10, alt: 'Aerial view of open plots and land development' },
  { src: image11, alt: 'Planned roads and plot layout with landscaping' },
  { src: image12, alt: 'Central park with children play area and walkways' },
  { src: image13, alt: 'Modern clubhouse with premium amenities' },
  { src: image14, alt: 'Landscaped green park with pond and walking paths' },
];

export default function AboutStickyGallery() {
  return (
    <div className="about-sticky-gallery" aria-label="Prajwalaa Ankura project gallery">
      {galleryImages.map((item, index) => (
        <div
          key={item.alt}
          className="about-sticky-card"
          style={{ '--card-index': index }}
        >
          <figure className="about-sticky-card-inner">
            <img
              src={item.src}
              alt={item.alt}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
          </figure>
        </div>
      ))}
    </div>
  );
}
