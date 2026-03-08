import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import SmoothScroll from "./components/SmoothScroll";
import Marquee from "./components/Marquee";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="flex min-h-screen flex-col bg-dark">
        <Navbar />
        <HeroSection />
        <Marquee text="DIGITAL EXCELLENCE" speed={25} />
        <AboutSection />
        <AchievementsSection />
        <Marquee text="INNOVATIVE SOLUTIONS" reverse={true} speed={30} />
        <ProjectsSection />
        <EmailSection />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
