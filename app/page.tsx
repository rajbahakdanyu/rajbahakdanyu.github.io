import AboutSection from "@/components/AboutSection";
import BackToTop from "@/components/BackToTop";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import ScrollProgress from "@/components/ScrollProgress";
import SkillsSection from "@/components/SkillsSection";

export default function PortfolioWebsite() {
  return (
    <>
      <ScrollProgress />
      <main className="min-h-screen bg-paper text-ink font-sans selection:bg-accent selection:text-paper">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
      <BackToTop />
    </>
  );
}
