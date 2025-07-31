import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const locations = [
  {
    city: "Kinshasa",
    position: [-4.325, 15.322],
    description: "Siège principal – Gombe",
  },
  {
    city: "Lubumbashi",
    position: [-11.6609, 27.4794],
    description: "Bureau régional – Katanga",
  },
  {
    city: "Goma",
    position: [-1.6835, 29.2356],
    description: "Bureau régional – Nord-Kivu",
  },
  {
    city: "Kisangani",
    position: [0.5153, 25.1909],
    description: "Antenne – Tshopo",
  },
];

export default function MapSection() {
  return (
    <section id="localisation" className="relative h-screen w-screen z-0">
      <motion.div
        className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded shadow-lg z-[999] text-green-700 font-bold text-xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        📍 Nos zones de couverture
      </motion.div>

      <MapContainer
        center={[-4.325, 15.322]}
        zoom={6}
        scrollWheelZoom={false}
        className="h-full w-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locations.map((loc, idx) => (
          <Marker key={idx} position={loc.position} icon={customIcon}>
            <Popup>
              <strong>{loc.city}</strong> <br />
              {loc.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
}
