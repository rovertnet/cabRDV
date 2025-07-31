import React from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "Comment rédiger un contrat en toute sécurité ?",
    excerpt:
      "Découvrez les étapes essentielles pour rédiger un contrat clair et légalement valide.",
    image: "https://i.postimg.cc/XN0bs93z/contract.jpg",
  },
  {
    id: 2,
    title: "Divorce à l’amiable : que faut-il savoir ?",
    excerpt:
      "Un aperçu des procédures, conditions et avantages du divorce à l’amiable.",
    image: "https://i.postimg.cc/Gt3qK5C5/divorce.jpg",
  },
  {
    id: 3,
    title: "Droits du salarié : que dit la loi ?",
    excerpt:
      "Connaissez vos droits en tant que salarié : horaires, congés, licenciement...",
    image: "https://i.postimg.cc/yxQKPg8r/employee-rights.jpg",
  },
  {
    id: 4,
    title: "Création d’entreprise : étapes juridiques clés",
    excerpt:
      "Tout ce que vous devez savoir pour démarrer votre entreprise légalement.",
    image: "https://i.postimg.cc/3N5j6VL9/startup-law.jpg",
  },
  {
    id: 5,
    title: "Litiges immobiliers : vos recours",
    excerpt:
      "Quels sont vos droits en cas de litige avec un bailleur ou un acheteur ?",
    image: "https://i.postimg.cc/L6mWQhxF/real-estate-dispute.jpg",
  },
  {
    id: 6,
    title: "Harcèlement au travail : que faire ?",
    excerpt:
      "Les démarches juridiques pour faire face à une situation de harcèlement professionnel.",
    image: "https://i.postimg.cc/BvRsnfqt/workplace-harassment.jpg",
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
