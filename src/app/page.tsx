"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { ShieldCheck, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="small"
        sizing="medium"
        background="aurora"
        cardStyle="outline"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Results",
          id: "results",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Cargiela Advisory"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "sparkles-gradient",
      }}
      title="Intelligence that moves your business forward."
      description="Cargiela Advisory helps ambitious businesses cut through the noise and implement AI that actually works — practical, strategic, and built for your goals."
      tag="AI Strategy & Advisory"
      buttons={[
        {
          text: "Book Discovery Call",
          href: "#contact",
        },
        {
          text: "Explore Services",
          href: "#services",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/business-colleagues-reviewing-discussing-report_1262-20984.jpg",
          imageAlt: "AI Consultant at work",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/golden-glow-lights-dark-background_23-2151831345.jpg",
          imageAlt: "AI Network Visualization",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/colleagues-working-together-project_23-2149286099.jpg",
          imageAlt: "Colleagues working together on project",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/female-professional-helping-new-employee_1262-21041.jpg",
          imageAlt: "Female professional helping new employee",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/serious-coworkers-using-laptop_74855-2202.jpg",
          imageAlt: "Serious coworkers using laptop",
        },
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="Rated 5.0 by 50+ clients"
      tagIcon={Sparkles}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="About Clara"
      title="The advisor who over-delivers, every time"
      description="Clara is a rare combination of technical expertise and business intuition. She meets you where you are and takes you further than imagined."
      subdescription="Our commitment is integrity, patience with non-technical clients, and the rare promise to under-promise and over-deliver on every engagement."
      imageSrc="http://img.b2bpic.net/free-photo/portrait-adult-businesswoman-smiling_23-2148452640.jpg"
      mediaAnimation="slide-up"
      icon={ShieldCheck}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardSix
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "AI Strategy",
          description: "Roadmap development without jargon.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-desk-concept-with-copy-space_23-2148459672.jpg",
        },
        {
          title: "Marketing Automation",
          description: "Integrate AI into your marketing engine.",
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-blue-background-with-many-small-details-generative-ai_169016-30136.jpg",
        },
        {
          title: "Custom Tool Development",
          description: "Chatbots and internal assistants built for you.",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-plexus-design-with-connecting-lines-dots-network-communications_1048-12200.jpg",
        },
        {
          title: "CRM & LMS Platforms",
          description: "From-the-ground-up system design.",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-digital-landscape-modern-technology-background_1048-10465.jpg",
        },
        {
          title: "Discovery & Audit",
          description: "Identify hidden AI use cases.",
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-low-poly-background-with-connecting-dots-lines_1048-5910.jpg",
        },
        {
          title: "Ongoing Partnership",
          description: "Retained advisor keeping you ahead.",
          imageSrc: "http://img.b2bpic.net/free-photo/studio-portrait-blond-female-dressed-white-shirt-red-eyeglasses_613910-3569.jpg",
        },
      ]}
      title="Services built for the new intelligence economy"
      description="Comprehensive consulting designed to accelerate your growth."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "5.0",
          title: "Google Rating",
          description: "Average client satisfaction",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-minimalist-office_23-2151780713.jpg",
        },
        {
          id: "m2",
          value: "50+",
          title: "Clients Served",
          description: "Across diverse industries",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-abstract-background-with-flowing-hexagonal-grid-design_1048-11285.jpg",
        },
        {
          id: "m3",
          value: "3+",
          title: "Years Leading",
          description: "Innovation & Strategy",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-beautiful-modern-woman_23-2148415841.jpg",
        },
      ]}
      title="Our Impact"
      description="Proven results for ambitious businesses."
    />
  </div>

  <div id="results" data-section="results">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Rob Decker",
          role: "Leader",
          company: "Business",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-serious-business-leader-sitting_1262-4831.jpg",
        },
        {
          id: "t2",
          name: "Hillary Walsh",
          role: "Owner",
          company: "Business",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-jolly-media-star-telling-viewers-facts-about-himself-close-up_482257-116639.jpg",
        },
        {
          id: "t3",
          name: "Global Client",
          role: "Admin",
          company: "Org",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-woman-black-shirt-posing-white-background-high-quality-photo_114579-60993.jpg",
        },
        {
          id: "t4",
          name: "Kristen Scheidly",
          role: "Owner",
          company: "Biz",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/confident-young-businesswoman-with-folded-arms_1262-1775.jpg",
        },
        {
          id: "t5",
          name: "Rich Daniel",
          role: "Director",
          company: "Foundation",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-confident-business-woman-with-executive-job-working-with-management-marketing-statistics-computer-office-worker-analyzing-research-charts-data-reports_482257-41126.jpg",
        },
      ]}
      title="What clients are saying"
      description="Hear from leaders who have transformed their operations with our guidance."
    />
  </div>

  <div id="proof" data-section="proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Microsoft",
        "Google",
        "Amazon",
        "OpenAI",
        "Nvidia",
        "Salesforce",
        "Hubspot",
      ]}
      title="Trusted by Innovators"
      description="Collaborating with industry-leading companies."
    />
  </div>

  <div id="process" data-section="process">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Discovery Call",
          content: "Focused conversation to map your business needs.",
        },
        {
          id: "f2",
          title: "Strategy & Roadmap",
          content: "Clear, prioritized plan built for your goals.",
        },
        {
          id: "f3",
          title: "Implementation",
          content: "Building and testing your custom AI solutions.",
        },
        {
          id: "f4",
          title: "Ongoing Partnership",
          content: "Staying in your corner as the landscape evolves.",
        },
      ]}
      title="How It Works"
      description="From first call to lasting results."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient",
      }}
      title="Ready to put AI to work?"
      description="Book a discovery call. No jargon, just results."
      imageSrc="http://img.b2bpic.net/free-photo/modern-hotel-lobby-with-leather-sofa-chairs-lamp-round-tables_1262-12373.jpg"
      tag="Let's Talk"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Cargiela Advisory"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Services",
              href: "#services",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "Privacy",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2025 Cargiela Advisory."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
