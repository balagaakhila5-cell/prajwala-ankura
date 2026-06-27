import PageBanner from '../components/PageBanner';
import PageRelatedInfo from '../components/PageRelatedInfo';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import { pageRelatedContent } from '../data/pageContent';

export default function ProjectsPage() {
  const content = pageRelatedContent.projects;

  return (
    <>
      <main>
        <PageBanner
          backgroundKey="projects"
          tag="Projects"
          title="Our Landmark Developments"
          description="Over 20 years of trusted excellence in Hyderabad real estate. Explore completed and ongoing projects by Prajwalaa Properties."
        />
        <PageRelatedInfo intro={content.intro} highlights={content.highlights} />
        <Projects hideHeader />
        <PageRelatedInfo
          intro={[
            'Every Prajwalaa project is built with verified titles, quality materials, and customer-first service — from the first site visit to handover and beyond.',
          ]}
          highlights={[
            { title: '20+ Years', text: 'Two decades of delivering quality homes and communities across Hyderabad.' },
            { title: '2000+ Families', text: 'Happy homeowners who trust Prajwalaa Properties for transparency and quality.' },
            { title: 'RERA Registered', text: 'All projects registered for buyer protection and complete transparency.' },
          ]}
          variant="alt"
        />
      </main>
      <Footer />
    </>
  );
}
