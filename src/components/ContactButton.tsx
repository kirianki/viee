
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export const ContactButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-8 right-8 z-50 flex flex-col gap-4"
    >
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="mailto:vivianwanjiruwangui@gmail.com"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary shadow-lg transition-colors hover:bg-primary/90"
      >
        <Mail className="h-5 w-5 text-primary-foreground" />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/254757923133"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-colors hover:bg-[#25D366]/90"
      >
        <Phone className="h-5 w-5 text-white" />
      </motion.a>
    </motion.div>
  );
};
