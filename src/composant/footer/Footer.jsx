import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10 px-6 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Branding */}
        <div>
          <h3 className="text-2xl font-bold mb-2">Cabinet Juridique</h3>
          <p className="text-gray-400">
            Votre partenaire de confiance en droit.
          </p>
        </div>

        {/* Liens utiles */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Navigation</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#about" className="hover:underline">
                À propos
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#team" className="hover:underline">
                Équipe
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Contact</h4>
          <p className="text-gray-300">📍 123 Avenue de la Justice, Kinshasa</p>
          <p className="text-gray-300">📞 +243 999 000 000</p>
          <p className="text-gray-300">✉️ contact@cabinetjuridique.cd</p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-green-700">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-green-700">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-green-700">
              <FaLinkedinIn />
            </a>
            <a
              href="https://wa.me/243999000000"
              className="hover:text-green-700"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bas de page */}
      <div className="border-t border-gray-700 pt-6 text-sm text-center text-gray-500">
        <p>&copy; {year} RovertNet. Tous droits réservés.</p>
        
      </div>
    </footer>
  );
}
