import { motion } from "framer-motion";

interface FeatureTagProps {
  label: string;
}

export function FeatureTag({ label }: FeatureTagProps) {
  return (
    <motion.li
      className="bg-white px-3 py-1 rounded-full text-sm shadow-sm border border-neutral-200"
      whileHover={{ y: -2, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {label}
    </motion.li>
  );
}
