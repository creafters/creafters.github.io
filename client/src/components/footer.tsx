import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function Footer() {
  return (
    <motion.footer
      className="bg-neutral-100 py-8 px-6 sm:px-8 lg:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-2">
              <span className="animated-gradient text-white font-bold text-lg px-2 py-0.5 rounded mr-2">C</span>
              <span className="font-montserrat font-bold text-lg">
                <span className="text-primary">Crea</span><span className="text-accent">fters</span>
              </span>
            </div>
            <p className="text-sm">&copy; {COMPANY.year} {COMPANY.name}. All rights reserved.</p>
            <p className="text-xs mt-2">Learn by Doing. Build by Creating.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 text-sm">
            <div>
              <h3 className="font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Bootcamps</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Testimonials</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Contact</h3>
              <ul className="space-y-1">
                <li>
                  <a 
                    href={`mailto:${COMPANY.email}`} 
                    className="hover:text-primary transition-colors flex items-center"
                  >
                    <Mail className="mr-1 h-3 w-3 text-primary" />
                    {COMPANY.email}
                  </a>
                </li>
                <li className="flex items-center">
                  <MapPin className="mr-1 h-3 w-3 text-primary" />
                  Morocco
                </li>
                <li className="mt-2">
                  <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
