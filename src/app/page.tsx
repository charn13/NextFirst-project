import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
   <>
  <main className=" min-h-screen bg-black/[0.96] antialiased bd-grid-white/[0.0]">
           <h1 className="text-center text-2xl"></h1>
           <div className="h-auto md:h-[40rem]">
             <HeroSection />
             <FeaturedCourses />
             <WhyChooseUs />
             <MusicSchoolTestimonials />
             <UpcomingWebinars />
             <Instructors />
             <Footer />
           </div>
  </main>

  </>
  );
}
