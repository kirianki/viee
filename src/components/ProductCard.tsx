
import { motion } from "framer-motion";
import { CakeSlice, ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  price: string;
}

export const ProductCard = ({ name, description, image, price }: ProductCardProps) => {
  const { toast } = useToast();

  const handleOrder = () => {
    const message = encodeURIComponent(`Hello! I would like to order: ${name} (${price})`);
    const waLink = `https://wa.me/254757923133?text=${message}`;
    const emailSubject = encodeURIComponent(`Order for ${name}`);
    const emailBody = encodeURIComponent(`Hello!\n\nI would like to order:\n${name} (${price})`);
    const emailLink = `mailto:contact@sweetdelights.com?subject=${emailSubject}&body=${emailBody}`;

    toast({
      title: "Choose how to place your order",
      description: "Select WhatsApp or Email to continue with your order.",
      action: (
        <div className="flex gap-2">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-[#25D366] px-3 py-2 text-sm font-semibold text-white shadow-sm transition-shadow hover:shadow-md"
          >
            WhatsApp
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={emailLink}
            className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-shadow hover:shadow-md"
          >
            Email
          </motion.a>
        </div>
      ),
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-2xl bg-white p-4 shadow-md transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative h-48 w-full overflow-hidden rounded-xl bg-gray-100">
        <motion.img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/20 transition-opacity"
        />
      </div>
      <div className="mt-4 text-center">
        <motion.h3 
          className="font-playfair text-xl font-semibold text-gray-800"
          whileHover={{ scale: 1.05 }}
        >
          {name}
        </motion.h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
        <motion.p 
          className="mt-2 font-inter text-lg font-semibold text-primary-foreground"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {price}
        </motion.p>
        <motion.button
          onClick={handleOrder}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
        >
          <ShoppingCart className="h-4 w-4" />
          Order Now
        </motion.button>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute right-4 top-4 rounded-full bg-white p-2 shadow-md"
      >
        <CakeSlice className="h-5 w-5 text-primary-foreground" />
      </motion.div>
    </motion.div>
  );
};
