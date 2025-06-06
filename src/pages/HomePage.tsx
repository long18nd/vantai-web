import LookupSection from "../components/OtherSection/LookupSection"
import HeroSection from "../components/HeroSection/HeroSection"
import ServiceList from "../components/ServiceList/ServiceList"
import AboutSection from "../components/OtherSection/AboutSection"

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <ServiceList/>
      <LookupSection/>
      <AboutSection/>
    </div>
  )
}

export default HomePage
