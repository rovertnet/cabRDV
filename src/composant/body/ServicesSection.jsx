import { Briefcase, Gavel, FileText, Users } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    icon: <Gavel size={36} className="text-green-700" />,
    title: "Droit pénal",
    description:
      "Assistance et défense dans toutes les affaires relevant du droit pénal.",
  },
  {
    id: 2,
    icon: <Briefcase size={36} className="text-green-700" />,
    title: "Droit des affaires",
    description:
      "Conseil et accompagnement juridique pour les entreprises et entrepreneurs.",
  },
  {
    id: 3,
    icon: <FileText size={36} className="text-green-700" />,
    title: "Droit civil",
    description:
      "Gestion des litiges, contrats et questions relatives au droit civil.",
  },
  {
    id: 4,
    icon: <Users size={36} className="text-green-700" />,
    title: "Droit de la famille",
    description:
      "Accompagnement en matière de divorce, garde d’enfants, succession, etc.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-green-700 mb-12"
        >
          Nos Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map(({ id, icon, title, description }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: id * 0.2 }}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition cursor-default"
            >
              <div className="mb-4 flex justify-center">{icon}</div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {title}
              </h3>
              <p className="text-gray-600">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
