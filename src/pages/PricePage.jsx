import PageBanner from '../components/PageBanner';
import PageRelatedInfo from '../components/PageRelatedInfo';
import Price from '../components/Price';
import Footer from '../components/Footer';
import { pageRelatedContent } from '../data/pageContent';

export default function PricePage() {
  const content = pageRelatedContent.price;

  return (
    <>
      <main>
        <PageBanner
          backgroundKey="price"
          tag="Price"
          title="Prajwalaa Ankura Price List"
          description="2 BHK luxury apartments starting from ₹ 5,500 per Sq. Ft. RERA registered. Possession from December 2028."
        />
        <PageRelatedInfo intro={content.intro} highlights={content.highlights} variant="alt" />
        <Price hideHeader />
      </main>
      <Footer />
    </>
  );
}
