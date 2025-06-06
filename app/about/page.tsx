import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SparklesPreview } from '@/components/ui/demo';
import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { FAQSection } from "@/components/layout/sections/faq";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import { ContactSection } from "@/components/layout/sections/contact";
import { FooterSection } from "@/components/layout/sections/footer";

const AboutPage = () => {
  return (

    <div className="container mx-auto px-4 py-24 space-y-16">
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white sm:text-6xl">About Us</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          At Titan, our mission is to empower individuals and businesses with cutting-edge tools and resources to achieve their goals and unlock their full potential.
        </p>
      </section>


      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            We envision a world where technology seamlessly integrates with human creativity, fostering innovation and driving progress. We are committed to building intuitive, powerful, and reliable solutions that make a real difference.
          </p>

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-10">Our Values</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 space-y-2">
            <li><strong>Innovation:</strong> Continuously exploring new ideas and technologies.</li>
            <li><strong>Excellence:</strong> Striving for the highest quality in everything we do.</li>
            <li><strong>User-Centricity:</strong> Designing with our users&apos; needs and experiences at the forefront.</li>
            <li><strong>Collaboration:</strong> Fostering a supportive and inclusive environment.</li>
            <li><strong>Integrity:</strong> Operating with transparency and honesty.</li>
          </ul>
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Our Featured Project</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Discover our flagship project, the Titan Blog, a dynamic platform built with modern web technologies to deliver engaging content and a seamless user experience.
          </p>
          <SparklesPreview />

          <div className="flex justify-center">
            <Link href="https://68413e9900956178445b657f--titan-blog.netlify.app/" passHref className="hover:scale-105 transition-transform duration-300">
              <Button className="px-8 py-3 text-lg shadow-md hover:shadow-xl transition-shadow duration-300" variant="default">
                Visit Titan Blog
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="text-center space-y-4 pt-8 pb-12 border-t border-gray-200 dark:border-gray-700">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Join Our Journey</h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          We are always looking for passionate individuals to join our growing team. If you are excited about innovation and making an impact, we&apos;d love to hear from you.
        </p>
        <div className="flex justify-center mt-6">
          <Link href="#contact" passHref className="hover:scale-105 transition-transform duration-300">
            <Button className="px-8 py-3 text-lg shadow-md hover:shadow-xl transition-shadow duration-300" variant="secondary">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>

      <BenefitsSection />
      <CommunitySection />
      <TestimonialSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default AboutPage;
