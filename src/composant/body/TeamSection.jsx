import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const teamMembers = [
  {
    id: 1,
    name: "Me Sophie Durand",
    role: "Avocate en droit pénal",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    bio: "Spécialiste en droit pénal, Me Durand défend vos droits avec passion et rigueur.",
  },
  {
    id: 2,
    name: "Me Julien Martin",
    role: "Avocat en droit des affaires",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
    bio: "Expert en droit des sociétés, Me Martin accompagne les entreprises dans leurs démarches juridiques.",
  },
  {
    id: 3,
    name: "Me Clara Lefevre",
    role: "Avocate en droit de la famille",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Me Lefevre vous guide avec empathie et professionnalisme dans les affaires familiales.",
  },
  {
    id: 4,
    name: "Me Antoine Dubois",
    role: "Avocat en droit civil",
    photo: "https://randomuser.me/api/portraits/men/33.jpg",
    bio: "Me Dubois vous accompagne dans tous vos litiges civils avec expertise.",
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-green-700 mb-12"
        >
          Notre Équipe
        </motion.h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {teamMembers.map(({ id, name, role, photo, bio }) => (
            <SwiperSlide key={id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition cursor-default mx-4"
              >
                <img
                  src={photo}
                  alt={name}
                  className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-green-700">{name}</h3>
                <p className="text-green-600 italic mb-3">{role}</p>
                <p className="text-gray-600 text-sm">{bio}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
