import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, Hammer, Code, Briefcase } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#", icon: <Hammer className="h-4 w-4" /> },
    { label: "Bootcamps", href: "#", icon: <Code className="h-4 w-4" /> },
    { label: "Contact", href: "#", icon: <Briefcase className="h-4 w-4" /> },
  ];

  return (
    <motion.header
      className="py-4 px-6 sm:px-8 lg:px-12 flex justify-between items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center">
        <span className="animated-gradient text-white font-bold text-2xl px-3 py-1 rounded mr-2">C</span>
        <span className="font-montserrat font-bold text-xl">
          <span className="text-primary">Crea</span><span className="text-accent">fters</span>
        </span>
      </div>
      
      <nav className="hidden lg:block">
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-medium hover:text-primary transition-colors flex items-center gap-1"
              >
                {item.icon}
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle>Creafters Menu</SheetTitle>
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-2 py-1 text-lg font-medium hover:text-primary transition-colors flex items-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
