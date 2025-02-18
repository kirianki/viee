
import { motion } from "framer-motion";
import { CakeSlice, Cookie, IceCream } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { ContactButton } from "@/components/ContactButton";

const products = [
  {
    name: "Classic Bento cake",
    description: "Best bento cake you ever had",
    image: "/image1.png",
    price: "Ksh 500",
  },
  {
    name: "Whipped cream cakes",
    description: "Custome whipped cream cakes",
    image: "/image2.png",
    price: "per grams",
  },
  {
    name: "Birthday cakes",
    description: "Fresh creammy cake for birthdays",
    image: "/image3.png",
    price: "per grams",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/20 to-secondary/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-7xl text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-playfair text-4xl font-bold text-primary-foreground sm:text-5xl md:text-6xl"
          >
            Cakes by vee
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-lg text-gray-600 sm:text-xl"
          >
            Handcrafted with love, baked to perfection
          </motion.p>
        </motion.div>

        <div className="mt-16 flex justify-center gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="animate-float"
          >
            <CakeSlice className="h-12 w-12 text-primary-foreground" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="animate-float"
          >
            <Cookie className="h-12 w-12 text-primary-foreground" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="animate-float"
          >
            <IceCream className="h-12 w-12 text-primary-foreground" />
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-primary-foreground">
            Our Specialties
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-accent/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-playfair text-3xl font-bold text-primary-foreground">
            Our Story
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            At Cakes by vee, we believe in creating moments of joy through our carefully crafted
            pastries. Each creation is made with love, using only the finest ingredients and traditional
            recipes passed down through generations.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-playfair text-3xl font-bold text-primary-foreground">
            Order Now
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Ready to treat yourself? Contact us through WhatsApp or email to place your order. We'll be
            happy to help you choose the perfect treats for any occasion.
          </p>
        </div>
      </section>

      <ContactButton />
    </div>
  );
};

export default Index;
