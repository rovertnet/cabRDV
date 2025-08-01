import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

// (faqData et toggle déjà déclarés plus haut…)
const faqData = [
  {
    question: "Quels sont vos domaines de compétence ?",
    answer:
      "Notre cabinet intervient en droit de la famille, droit du travail, droit des affaires, et plus encore.",
  },
  {
    question: "Comment prendre rendez-vous avec un avocat ?",
    answer:
      "Vous pouvez prendre rendez-vous via notre formulaire en ligne ou par téléphone.",
  },
  {
    question: "Proposez-vous des consultations à distance ?",
    answer:
      "Oui, nous proposons des rendez-vous par visioconférence ou téléphone.",
  },
  {
    question: "Quels sont vos tarifs ?",
    answer:
      "Nos honoraires dépendent de la nature du dossier. Un devis peut être établi après un premier échange.",
  },
];


export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", question: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.question) {
      setError("Tous les champs sont requis.");
      return;
    }

    // Simulation d'envoi
    console.log("Question soumise :", form);
    setSubmitted(true);
    setForm({ name: "", email: "", question: "" });
    setError("");
  };

  return (
    <section id="faq" className="py-20 bg-gray-50 px-6 lg:px-32">
      <h2 className="text-3xl font-bold text-center mb-12">
        ❓ Foire Aux Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between px-6 py-4 text-left text-lg font-medium text-gray-800 hover:bg-gray-100 transition"
            >
              {faq.question}
              <FaChevronDown
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4 text-gray-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Nouveau champ de soumission */}
      <div className="max-w-2xl mx-auto mt-12 bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">
          Vous n'avez pas trouvé votre réponse ?
        </h3>

        {submitted ? (
          <div className="text-green-600 font-medium">
            Votre question a été envoyée avec succès !
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <div className="text-red-600 text-sm">{error}</div>}

            <div>
              <label className="block font-medium mb-1">Nom</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Votre question</label>
              <textarea
                name="question"
                value={form.question}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded"
                rows={4}
              />
            </div>

            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition"
            >
              Envoyer
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
