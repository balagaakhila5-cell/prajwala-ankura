import PageBanner from '../components/PageBanner';
import PageRelatedInfo from '../components/PageRelatedInfo';
import EnquireForm from '../components/EnquireForm';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { pageRelatedContent } from '../data/pageContent';

export default function EnquirePage() {
  const content = pageRelatedContent.enquire;

  return (
    <>
      <main>
        <PageBanner
          backgroundKey="enquire"
          tag="Enquire"
          title="Get in Touch With Us"
          description="Schedule a site visit, request a callback, or ask about Prajwalaa Ankura — our team is ready to help."
        />
        <PageRelatedInfo intro={content.intro} highlights={content.highlights} />
        <EnquireForm hideHeader />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
