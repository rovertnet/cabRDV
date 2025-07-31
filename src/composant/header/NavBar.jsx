import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Twitter, Instagram } from "lucide-react";


export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleModal = () => setShowModal(!showModal);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Top Bar */}
        <div className="bg-green-700 px-4 md:px-10 py-2 flex flex-col md:flex-row justify-between items-center text-white text-sm">
          <div className="mb-2 md:mb-0 text-center md:text-left font-semibold text-base">
            Bienvenu(e) à notre cabinet d'avocats
          </div>
          <div className="flex items-center space-x-4">
            <span className="hidden sm:inline">Suivez-nous :</span>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Navbar principale */}
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={`transition-all duration-300 ${
            hasScrolled ? "bg-white shadow-md" : "bg-transparent"
          }`}
        >
          <motion.div
            animate={{
              paddingTop: hasScrolled ? "0.5rem" : "1.25rem",
              paddingBottom: hasScrolled ? "0.5rem" : "1.25rem",
            }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-between px-4 md:px-10"
          >
            {/* Logo animé */}
            <motion.div
              animate={{
                fontSize: hasScrolled ? "1.25rem" : "1.5rem",
              }}
              transition={{ duration: 0.3 }}
              className="text-green-700 font-bold"
            >
              Cabinet d'Avocats
            </motion.div>

            {/* Burger menu */}
            <div className="md:hidden flex items-center px-4 py-3">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative w-8 h-8 focus:outline-none"
              >
                <motion.span
                  className="absolute h-1 w-8 bg-green-700 rounded origin-left"
                  animate={
                    isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute h-1 w-8 bg-green-700 rounded top-1/2 transform -translate-y-1/2"
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute h-1 w-8 bg-green-700 rounded origin-left"
                  animate={
                    isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 14 }
                  }
                  transition={{ duration: 0.3 }}
                />
              </button>
            </div>

            {/* Desktop links */}
            <ul className="hidden md:flex space-x-6 text-green-700 font-medium">
              <li>
                <a href="#home" className="hover:text-gray-600">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-600">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-600">
                  À propos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-600">
                  Contact
                </a>
              </li>
            </ul>

            {/* Desktop bouton */}
            <div className="hidden md:flex">
              <button
                onClick={toggleModal}
                className="bg-green-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-800 transition"
              >
                Prendre rendez-vous
              </button>
            </div>
          </motion.div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="md:hidden px-4 pb-4 space-y-2 bg-white text-green-700"
            >
              <a href="#home" className="block hover:text-gray-600">
                Accueil
              </a>
              <a href="#services" className="block hover:text-gray-600">
                Services
              </a>
              <a href="#about" className="block hover:text-gray-600">
                À propos
              </a>
              <a href="#contact" className="block hover:text-gray-600">
                Contact
              </a>
              <button
                onClick={toggleModal}
                className="block w-full bg-green-700 text-white py-2 rounded-md font-medium hover:bg-green-800 transition"
              >
                Prendre rendez-vous
              </button>
            </motion.div>
          )}
        </motion.nav>
      </header>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          >
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-xl p-6 w-[90%] max-w-md"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-green-700">
                  Prendre rendez-vous
                </h2>
                <button
                  onClick={toggleModal}
                  className="text-gray-500 hover:text-red-600 text-xl"
                >
                  &times;
                </button>
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nom complet"
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-green-300"
                />
                <input
                  type="email"
                  placeholder="Adresse e-mail"
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-green-300"
                />
                <textarea
                  placeholder="Message ou objet du rendez-vous"
                  rows="3"
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-green-300"
                />
                <button
                  type="submit"
                  className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition"
                >
                  Envoyer la demande
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
