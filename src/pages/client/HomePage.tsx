import LookupSection from "../../components/HomePage/OtherSection/LookupSection.tsx";
import HeroSection from "../../components/HomePage/HeroSection/HeroSection.tsx";
import ServiceList from "../../components/HomePage/ServiceList/ServiceList.tsx";
import AboutSection from "../../components/HomePage/OtherSection/AboutSection.tsx";
import ContactSection from "../../components/HomePage/ContactSection/ContactSection.tsx";
import RecommendedSection from "../../components/HomePage/OtherSection/RecommendedSection.tsx";

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
