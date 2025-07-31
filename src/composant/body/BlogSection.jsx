import React from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "Comment rédiger un contrat en toute sécurité ?",
    excerpt:
      "Découvrez les étapes essentielles pour rédiger un contrat clair et légalement valide.",
    image: "https://source.unsplash.com/600x400/?law,contract",
  },
  {
    id: 2,
    title: "Divorce à l’amiable : que faut-il savoir ?",
    excerpt:
      "Un aperçu des procédures, conditions et avantages du divorce à l’amiable.",
    image: "https://source.unsplash.com/600x400/?divorce,court",
  },
  {
    id: 3,
    title: "Droits du salarié : que dit la loi ?",
    excerpt:
      "Connaissez vos droits en tant que salarié : horaires, congés, licenciement...",
    image: "https://source.unsplash.com/600x400/?law,employee",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-gray-50 py-20 px-6 lg:px-32">
      <motion.h2
        className="text-3xl font-bold text-center text-gray-800 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        📚 Nos conseils juridiques
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            className="bg-white shadow-md rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm">{post.excerpt}</p>
              <button className="mt-4 inline-block text-green-700 font-medium hover:underline">
                Lire plus →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
