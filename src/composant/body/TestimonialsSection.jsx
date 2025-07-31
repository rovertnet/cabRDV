import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Marie K.",
    text: "J’ai été accompagnée de manière professionnelle et humaine. Merci à toute l’équipe !",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 2,
    name: "Jean D.",
    text: "Le cabinet m’a aidé à résoudre une affaire délicate. Résultat rapide et efficace.",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    id: 3,
    name: "Claire L.",
    text: "Des avocats à l’écoute et très compétents. Je recommande sans hésitation !",
    avatar: "https://randomuser.me/api/portraits/women/52.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-green-700 mb-10"
        >
          Témoignages de nos clients
        </motion.h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000 }}
          loop
        >
          {testimonials.map(({ id, name, text, avatar }) => (
            <SwiperSlide key={id}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-md p-8 max-w-xl mx-auto"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={avatar}
                    alt={name}
                    className="w-16 h-16 rounded-full mb-4"
                  />
                  <p className="text-gray-600 italic mb-4">“{text}”</p>
                  <span className="text-green-700 font-semibold">{name}</span>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
