import LookupSection from "../components/OtherSection/LookupSection"
import HeroSection from "../components/HeroSection/HeroSection"
import ServiceList from "../components/ServiceList/ServiceList"
import AboutSection from "../components/OtherSection/AboutSection"
import ContactSection from "../components/ContactSection/ContactSection"
import RecommendedSection from "../components/OtherSection/RecommendedSection"

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <ServiceList/>
      <LookupSection/>
      <AboutSection/>
      <RecommendedSection/>
      <ContactSection/>
    </div>
  )
}

export default HomePage
