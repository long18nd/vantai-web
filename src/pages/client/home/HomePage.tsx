import HeroSection from "./HeroSection/HeroSection.tsx";
import ServiceList from "./ServiceList/ServiceList.tsx";
import AboutSection from "./OtherSection/AboutSection.tsx";
import RecommendedSection from "./OtherSection/RecommendedSection.tsx";
import InformationSection from "./ContactSection/InformationSection.tsx";
import ContactSection from "./OtherSection/ContactSection.tsx";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServiceList />
      <ContactSection />
      <AboutSection />
      <RecommendedSection />
      <InformationSection />
    </div>
  );
};

export default HomePage;
