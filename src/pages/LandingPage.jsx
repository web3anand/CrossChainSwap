import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-purple-900 text-white flex flex-col items-center justify-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-center mb-6"
      >
        Seamless Cross-Chain Swapping
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg text-center max-w-2xl mb-8"
      >
        Effortlessly swap assets across multiple blockchains with our advanced cross-chain bridge. Secure, fast, and user-friendly.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Link to="/swap">
          <Button className="bg-pink-500 hover:bg-pink-600 text-white text-xl px-6 py-3 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
            Enter Cross-Chain Swap
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
