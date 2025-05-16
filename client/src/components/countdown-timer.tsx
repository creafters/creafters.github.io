import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type CountdownUnit = {
  label: string;
  value: number;
};

export function CountdownTimer() {
  // Set launch date 21 days from now
  const calculateLaunchDate = () => {
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 21);
    return launchDate;
  };

  const [countdown, setCountdown] = useState<CountdownUnit[]>([
    { label: "Days", value: 0 },
    { label: "Hours", value: 0 },
    { label: "Minutes", value: 0 },
    { label: "Seconds", value: 0 },
  ]);

  useEffect(() => {
    const launchDate = calculateLaunchDate();
    
    const updateCountdown = () => {
      const now = new Date();
      const diff = launchDate.getTime() - now.getTime();
      
      // Calculate time units
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setCountdown([
        { label: "Days", value: days },
        { label: "Hours", value: hours },
        { label: "Minutes", value: minutes },
        { label: "Seconds", value: seconds },
      ]);
    };
    
    // Initial update
    updateCountdown();
    
    // Update every second
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p className="font-medium mb-3">Launching in:</p>
      <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
        {countdown.map((unit, index) => (
          <motion.div
            key={unit.label}
            className="countdown-item p-2 sm:p-4 bg-neutral-100 rounded-lg shadow-sm"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="font-poppins font-semibold text-2xl sm:text-3xl text-primary">
              {unit.value.toString().padStart(2, '0')}
            </div>
            <div className="text-xs sm:text-sm uppercase">{unit.label}</div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
