import { SectionScrollManager } from '../components/SectionScrollManager';
import { AboutSection } from '../sections/AboutSection';
import { ContactSection } from '../sections/ContactSection';
import { FaqSection } from '../sections/FaqSection';
import { HeroSection } from '../sections/HeroSection';
import { ProductPreviewSection } from '../sections/ProductPreviewSection';
import { StorySection } from '../sections/StorySection';
import { VisitSection } from '../sections/VisitSection';

export function HomePage() {
  return (
    <>
      <SectionScrollManager />
      <HeroSection />
      <StorySection />
      <AboutSection />
      <ProductPreviewSection />
      <VisitSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
