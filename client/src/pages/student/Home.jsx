import CallToAction from "components/students/CallToAction";
import Companies from "components/students/Companies";
import CourseSection from "components/students/CourseSection";
import Footer from "components/students/Footer";
import Hero from "components/students/Hero";
import TestimonialsSection from "components/students/TestimonialsSection";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center space-y-7 text-center">
      <Hero />
      <Companies />
      <CourseSection />
      <TestimonialsSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
