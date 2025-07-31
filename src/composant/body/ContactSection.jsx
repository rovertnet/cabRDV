import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gray-100 py-20 px-6 lg:px-32"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          📞 Contactez-nous
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Infos de contact */}
          <div className="space-y-6 text-gray-700 text-lg">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-orange-600 mt-1" />
              <p>123 Avenue de la Justice, Kinshasa, RDC</p>
            </div>
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-orange-600 mt-1" />
              <p>+243 820 000 000</p>
            </div>
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-orange-600 mt-1" />
              <p>contact@cabinetavocats.cd</p>
            </div>
            <div className="flex items-start gap-4">
              <FaClock className="text-orange-600 mt-1" />
              <div>
                <p>Lundi – Vendredi : 8h30 – 17h30</p>
                <p>Samedi : 9h – 13h</p>
              </div>
            </div>
          </div>

          {/* Formulaire rapide */}
          <form className="bg-white p-6 rounded-lg shadow space-y-4">
            <input
              type="text"
              placeholder="Nom"
              className="w-full border px-4 py-2 rounded"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border px-4 py-2 rounded"
              required
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full border px-4 py-2 rounded"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
