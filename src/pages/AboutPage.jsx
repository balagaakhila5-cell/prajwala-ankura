import PageBanner from '../components/PageBanner';
import PageRelatedInfo from '../components/PageRelatedInfo';
import About from '../components/About';
import Footer from '../components/Footer';
import { pageRelatedContent } from '../data/pageContent';

export default function AboutPage() {
  const content = pageRelatedContent.about;

  return (
    <>
      <main>
        <PageBanner
          backgroundKey="about"
          tag="About"
          title="Prajwalaa Ankura & Prajwalaa Properties"
          description="Discover our new launch in Ameenpur — luxury 2 BHK apartments — and learn about Prajwalaa Properties, Hyderabad's trusted developer with 20+ years of excellence."
        />
        <PageRelatedInfo intro={content.intro} highlights={content.highlights} variant="alt" />
        <About hideHeader />
        <PageRelatedInfo
          intro={pageRelatedContent.aboutUs.intro}
          highlights={pageRelatedContent.aboutUs.highlights}
        />
      </main>
      <Footer />
    </>
  );
}
