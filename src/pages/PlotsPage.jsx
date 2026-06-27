import PageBanner from '../components/PageBanner';
import PageRelatedInfo from '../components/PageRelatedInfo';
import Plots from '../components/Plots';
import Footer from '../components/Footer';
import { pageRelatedContent } from '../data/pageContent';

export default function PlotsPage() {
  const content = pageRelatedContent.plots;

  return (
    <>
      <main>
        <PageBanner
          backgroundKey="plots"
          tag="Plots"
          title="Plots & Land Investment"
          description="From open residential plots to farm lands and gated layouts — invest with Prajwalaa Properties expert guidance."
        />
        <PageRelatedInfo intro={content.intro} highlights={content.highlights} />
        <Plots hideHeader />
        <PageRelatedInfo
          intro={[
            'Our team assists with site selection, legal verification, layout planning, and construction support — so your land investment is secure from day one.',
          ]}
          highlights={[
            { title: 'Strategic Locations', text: 'Plots near major highways, IT corridors, schools, and hospitals in Hyderabad.' },
            { title: 'Clear Titles', text: 'Verified documentation and transparent processes for every land purchase.' },
            { title: 'Development Support', text: 'Construction guidance, material supply, and land development assistance available.' },
          ]}
          variant="alt"
        />
      </main>
      <Footer />
    </>
  );
}
