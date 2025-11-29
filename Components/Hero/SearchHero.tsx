// components/SearchHero.tsx
import { MapPin, Calendar, Users, Search } from "lucide-react";
import { Inter } from "next/font/google";

// Utilisation de la police Inter
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Ajouté '700' au cas où, mais en conservant la structure
});

const SearchHero = () => {
  return (
    <div className="relative h-96 w-full bg-cover bg-center overflow-hidden">
      {/* Fond d'image (simulé avec une couleur pour l'exemple, mais prêt pour une image de fond) */}
      {/* Pour un résultat exact, vous remplacerez le div ci-dessous par un composant <Image> de Next.js
          avec l'URL de votre image de fond. */}
      <div
        className="absolute inset-0 bg-gray-500/80"
        style={{
          backgroundImage: "url('/path-to-your-background-image.jpg')", // REMPLACER avec le chemin de l'image
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.7)", // Pour simuler l'obscurcissement du fond
        }}
      ></div>

      {/* Contenu - Assure une bonne superposition et centrage */}
      <div className={`relative z-10 p-8 pt-16 md:p-12 md:pt-24 ${inter.className}`}>
        {/* Titre "Tours & Trips" */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 md:mb-10 tracking-tight">
          Tours & Trips
        </h1>

        {/* Barre de Recherche (la forme principale) */}
        <div className="flex w-full max-w-4xl mx-auto rounded-full bg-white shadow-xl">
          <div className="flex flex-1 rounded-l-full overflow-hidden">
            {/* 1. Où (Where) */}
            <div className="flex items-center space-x-4 p-5 flex-1 min-w-0 border-r border-gray-100">
              <MapPin className="w-6 h-6 text-gray-400" />
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-500 leading-none">Where</p>
                <input
                  type="text"
                  placeholder="Where to?"
                  className="text-lg font-normal text-gray-800 focus:outline-none w-full bg-transparent p-0"
                />
              </div>
            </div>

            {/* 2. Date */}
            <div className="flex items-center space-x-4 p-5 flex-1 min-w-0 border-r border-gray-100">
              <Calendar className="w-6 h-6 text-gray-400" />
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-500 leading-none">Date</p>
                <input
                  type="text"
                  placeholder="Select dates"
                  // Note: Pour un vrai date picker, vous utiliseriez un composant de date.
                  className="text-lg font-normal text-gray-800 focus:outline-none w-full bg-transparent p-0"
                />
              </div>
            </div>

            {/* 3. Qui (Who) */}
            <div className="flex items-center space-x-4 p-5 flex-1 min-w-0">
              <Users className="w-6 h-6 text-gray-400" />
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-500 leading-none">Who</p>
                <input
                  type="text"
                  placeholder="Number of guests"
                  className="text-lg font-normal text-gray-800 focus:outline-none w-full bg-transparent p-0"
                />
              </div>
            </div>
          </div>
          
          {/* Bouton de Recherche */}
          <button className="flex items-center justify-center w-20 flex-shrink-0 bg-red-500 hover:bg-red-600 rounded-full transition duration-150">
            <Search className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchHero;