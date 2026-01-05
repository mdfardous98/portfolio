import { Suspense, lazy } from "react";
import AdvancedNavbar from "@/components/AdvancedNavbar";
import AdvancedHero from "@/components/AdvancedHero";
import ScrollProgress from "@/components/ScrollProgress";
import LazySection from "@/components/LazySection";
import PerformanceMonitor from "@/components/PerformanceMonitor";

// Lazy load heavy components
const About = lazy(() => import("@/components/About"));
const AdvancedSkills = lazy(() => import("@/components/AdvancedSkills"));
const Education = lazy(() => import("@/components/Education"));
const Experience = lazy(() => import("@/components/Experience"));
const Certificates = lazy(() => import("@/components/Certificates"));
const AdvancedProjects = lazy(() => import("@/components/AdvancedProjects"));
const CurrentProjects = lazy(() => import("@/components/CurrentProjects"));
const ProblemSolving = lazy(() => import("@/components/ProblemSolving"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

// Loading component
const SectionLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin"></div>
      <div className="absolute inset-0 w-16 h-16 border-4 border-purple-500/20 border-b-purple-500 rounded-full animate-spin animate-reverse"></div>
    </div>
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <AdvancedNavbar />
      <AdvancedHero />

      <LazySection>
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<SectionLoader />}>
          <AdvancedSkills />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<SectionLoader />}>
          <Education />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<SectionLoader />}>
          <Certificates />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<SectionLoader />}>
          <AdvancedProjects />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<SectionLoader />}>
          <CurrentProjects />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<SectionLoader />}>
          <ProblemSolving />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      </LazySection>

      <PerformanceMonitor />
    </main>
  );
}
