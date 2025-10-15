"use client";
import HeroSection from "./(sections)/hero-section";
import Navbar from "@/components/layout/Navbar";
import About from "./(sections)/about-me-section";
import SkillSection from "./(sections)/skill-section";
import PortfolioSection from "./(sections)/portofolio-section";
import ExperienceSection from "./(sections)/experience-section";
import ScrollToTop from "@/components/layout/ScrollToTop";
import TestimonialSection from "./(sections)/testimonial-section";
import ContactSection from "./(sections)/contact-section";

export default function PersonalWebsite() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Me Section */}
      <About />

      {/* Skills Section */}
      <SkillSection />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* Contact Section */}
      <ContactSection />

      <ScrollToTop />
    </div>
  );
}
