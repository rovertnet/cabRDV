import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";

// ✅ Schéma de validation avec Yup
const schema = yup.object().shape({
  name: yup.string().required("Le nom est requis"),
  email: yup.string().email("Email invalide").required("L'email est requis"),
  phone: yup
    .string()
    .matches(/^[0-9+()\s-]{8,16}$/, "Numéro invalide")
    .required("Le téléphone est requis"),
  reason: yup.string().required("L'objet du rendez-vous est requis"),
  date: yup.date().required("La date est requise").nullable(),
  time: yup.string().required("L'heure est requise"),
});

export default function AppointmentForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    alert("Rendez-vous envoyé avec succès !");
  };

  return (
    <section className="bg-white py-20 px-6 lg:px-32">
      <motion.div
        className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          📅 Prendre un rendez-vous
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <input
                type="text"
                placeholder="Nom complet"
                {...register("name")}
                className="border border-gray-300 rounded px-4 py-3 w-full"
              />
              {errors.name && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Adresse email"
                {...register("email")}
                className="border border-gray-300 rounded px-4 py-3 w-full"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="tel"
                placeholder="Téléphone"
                {...register("phone")}
                className="border border-gray-300 rounded px-4 py-3 w-full"
              />
              {errors.phone && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="text"
                placeholder="Objet du rendez-vous"
                {...register("reason")}
                className="border border-gray-300 rounded px-4 py-3 w-full"
              />
              {errors.reason && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.reason.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <Controller
                control={control}
                name="date"
                render={({ field }) => (
                  <DatePicker
                    placeholderText="Choisir une date"
                    selected={field.value}
                    onChange={(date) => field.onChange(date)}
                    className="border border-gray-300 rounded px-4 py-3 w-full"
                    dateFormat="dd/MM/yyyy"
                    minDate={new Date()}
                  />
                )}
              />
              {errors.date && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.date.message}
                </p>
              )}
            </div>

            <div>
              <select
                {...register("time")}
                className="border border-gray-300 rounded px-4 py-3 w-full"
              >
                <option value="">Choisir une heure</option>
                <option value="09:00">09:00</option>
                <option value="10:30">10:30</option>
                <option value="13:00">13:00</option>
                <option value="15:30">15:30</option>
                <option value="17:00">17:00</option>
              </select>
              {errors.time && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.time.message}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
          >
            Confirmer le rendez-vous
          </button>
        </form>
      </motion.div>
    </section>
  );
}

