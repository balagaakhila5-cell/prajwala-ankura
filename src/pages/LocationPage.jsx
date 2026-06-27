import PageBanner from '../components/PageBanner';
import PageRelatedInfo from '../components/PageRelatedInfo';
import Location from '../components/Location';
import Footer from '../components/Footer';
import { pageRelatedContent } from '../data/pageContent';

export default function LocationPage() {
  const content = pageRelatedContent.location;

  return (
    <>
      <main>
        <PageBanner
          backgroundKey="location"
          tag="Location"
          title="Around Prajwalaa Ankura"
          description="Located in Ameenpur, Hyderabad (502032) — well-connected via Old Mumbai Highway and NH 65."
        />
        <PageRelatedInfo intro={content.intro} highlights={content.highlights} variant="alt" />
        <Location hideHeader />
      </main>
      <Footer />
    </>
  );
}
