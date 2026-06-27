import PageBanner from '../components/PageBanner';
import PageRelatedInfo from '../components/PageRelatedInfo';
import Amenities from '../components/Amenities';
import Footer from '../components/Footer';
import { pageRelatedContent } from '../data/pageContent';

export default function AmenitiesPage() {
  const content = pageRelatedContent.amenities;

  return (
    <>
      <main>
        <PageBanner
          backgroundKey="amenities"
          tag="Amenities"
          title="360° Entertainment & Convenience"
          description="World-class amenities for recreation, fitness, and relaxation — designed for families of all ages at Prajwalaa Ankura."
        />
        <PageRelatedInfo intro={content.intro} highlights={content.highlights} variant="alt" />
        <Amenities hideHeader />
      </main>
      <Footer />
    </>
  );
}
