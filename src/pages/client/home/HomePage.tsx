import LookupSection from "./OtherSection/LookupSection.tsx";
import HeroSection from "./HeroSection/HeroSection.tsx";
import ServiceList from "./ServiceList/ServiceList.tsx";
import AboutSection from "./OtherSection/AboutSection.tsx";
import ContactSection from "./ContactSection/ContactSection.tsx";
import RecommendedSection from "./OtherSection/RecommendedSection.tsx";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServiceList />
      <LookupSection />
      <AboutSection />
      <RecommendedSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
