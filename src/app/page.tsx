import Divider from "./components/divider"
import AboutMe from "./components/home/about-me"
import Experience from "./components/home/experience"
import FeaturedWork from "./components/home/featured-work"
import HeroSection from "./components/home/hero-section"
import ProjectOverview from "./components/home/project-overview"
import ContactForm from "./components/home/contact-form"
import Certifications from "./components/home/certifications"

const page = () => {
  return (
    <main className="pt-20 relative z-0">
      <HeroSection />
      <Divider />
      <AboutMe />
      <Divider />
      <FeaturedWork />
      <Divider />
      <Experience />
      <Divider />
      <Certifications />
      <Divider />
      <ProjectOverview />
      <Divider />
      <ContactForm />
    </main>
  )
}

export default page
