import { motion } from "framer-motion";

// Images from Unsplash (hands-on learning & bootcamp themed)
const images = [
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&h=600",
    alt: "Student coding on laptop at bootcamp"
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&h=600",
    alt: "Team collaborating on tech project"
  },
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=600",
    alt: "Hands-on workshop with hardware components"
  },
  {
    src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&h=600",
    alt: "Student presenting their tech project"
  }
];

export function ImageGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 max-w-lg">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="image-panel aspect-square rounded-xl overflow-hidden shadow-lg"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
}
