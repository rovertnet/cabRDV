import { motion } from "framer-motion"; // Mets ici le chemin réel de ton image

export default function HeroSection() {
  return (
    <section className="pt-40 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 leading-tight">
            Défendre vos droits,
            <br className="hidden md:block" /> c’est notre mission
          </h1>
          <p className="mt-6 text-gray-600 text-lg">
            Notre cabinet vous accompagne dans toutes vos démarches juridiques
            avec expertise, transparence et engagement.
          </p>
          <a
            href="#rendezvous"
            className="inline-block mt-8 px-6 py-3 bg-green-700 text-white rounded-md hover:bg-green-800 transition"
          >
            Prendre rendez-vous
          </a>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-1/2"
        >
          <img
            src="https://images.pexels.com/photos/5668484/pexels-photo-5668484.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Avocat en consultation"
            className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
}
