import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CountdownTimer } from "@/components/countdown-timer";
import { EmailSignupForm } from "@/components/email-signup-form";
import { ImageGrid } from "@/components/image-grid";
import { FeatureTag } from "@/components/feature-tag";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FEATURES } from "@/lib/constants";
import { Hammer, Wrench, Briefcase, School } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-opensans text-neutral-700 bg-white">
      <Header />
      
      <main className="flex-grow flex flex-col md:flex-row">
        {/* Left Side - Coming Soon Info */}
        <motion.div 
          className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="max-w-lg mx-auto md:mx-0">
            <h1 className="font-montserrat font-bold text-4xl sm:text-5xl lg:text-6xl mb-4">
              Learn by <span className="text-primary">Doing.</span> Build by <span className="text-accent">Creating.</span>
            </h1>
            
            <p className="text-lg mb-8">
              Creafters is launching soon with hands-on tech bootcamps focused on practical skills. Sign up to be the first to know when enrollment opens and receive exclusive early access offers.
            </p>
            
            {/* Value propositions */}
            <div className="mb-8 grid grid-cols-2 gap-4">
              <div className="flex items-start">
                <Hammer className="mr-2 text-primary h-6 w-6" />
                <p className="text-sm">Hands-on projects with real-world applications</p>
              </div>
              <div className="flex items-start">
                <Wrench className="mr-2 text-primary h-6 w-6" />
                <p className="text-sm">Build your portfolio while learning valuable skills</p>
              </div>
              <div className="flex items-start">
                <School className="mr-2 text-primary h-6 w-6" />
                <p className="text-sm">Expert mentors from the tech industry</p>
              </div>
              <div className="flex items-start">
                <Briefcase className="mr-2 text-primary h-6 w-6" />
                <p className="text-sm">Career support and placement assistance</p>
              </div>
            </div>
            
            {/* Countdown Timer */}
            <div className="mb-10">
              <CountdownTimer />
            </div>
            
            {/* Email Signup Form */}
            <div className="mb-8">
              <EmailSignupForm />
            </div>
            
            {/* Social Media Links */}
            <div className="mb-8">
              <p className="font-medium mb-3">Follow our journey:</p>
              <div className="flex space-x-4">
                <a href="#" className="text-neutral-700 hover:text-primary transition-colors" aria-label="Twitter">
                  <FaTwitter className="text-xl" />
                </a>
                <a href="#" className="text-neutral-700 hover:text-primary transition-colors" aria-label="LinkedIn">
                  <FaLinkedinIn className="text-xl" />
                </a>
                <a href="#" className="text-neutral-700 hover:text-primary transition-colors" aria-label="Instagram">
                  <FaInstagram className="text-xl" />
                </a>
                <a href="#" className="text-neutral-700 hover:text-primary transition-colors" aria-label="Facebook">
                  <FaFacebookF className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Right Side - Images */}
        <motion.div 
          className="w-full md:w-1/2 bg-neutral-100 flex flex-col justify-center items-center px-6 py-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ImageGrid />
          
          <div className="mt-10 text-center max-w-md">
            <h2 className="font-montserrat font-semibold text-xl mb-3">Our Bootcamp Programs</h2>
            <ul className="inline-flex flex-wrap justify-center gap-3 mb-4">
              {FEATURES.map((feature, index) => (
                <FeatureTag key={index} label={feature} />
              ))}
            </ul>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
