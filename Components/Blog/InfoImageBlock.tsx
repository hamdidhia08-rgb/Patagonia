import React from "react";
import { CheckCircle } from "lucide-react";

export default function InfoImageBlock() {
  return (
    <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch min-h-[420px]">
      
      {/* Image */}
        <div className="w-full h-full flex items-center py-12">
        <img
            src="/images/izmir.jpg"
            alt="Tips for Building Future"
            className="w-full h-full object-cover rounded-2xl"
        />
        </div>


      {/* Contenu */}
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Tips For Building Future
        </h2>

        {/* TEXTE HAUT – 2 lignes */}
        <p className="text-gray-600 leading-relaxed mb-6 line-clamp-2">
          Seorem Ipsum Is Simply Dummy Text Of The Printing And
          Typesetting Industry. Lorem Ipsum Has Been The Industry's
          Standard Dummy Text Ever Since The 1500s.
        </p>

        {/* Liste */}
        <ul className="space-y-4 mb-6">
          <li className="flex items-start gap-3">
            <CheckCircle className="text-orange-600 mt-1" size={20} />
            <span className="text-gray-800 font-medium">
              Etiam Porta Sem Malesuada Euismod.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <CheckCircle className="text-orange-600 mt-1" size={20} />
            <span className="text-gray-800 font-medium">
              Porta Sem Area Product
            </span>
          </li>

          <li className="flex items-start gap-3">
            <CheckCircle className="text-orange-600 mt-1" size={20} />
            <span className="text-gray-800 font-medium">
              Service Tiam Porta Sem Malesuada
            </span>
          </li>
        </ul>

        {/* TEXTE BAS – 3 lignes */}
        <p className="text-gray-600 leading-relaxed line-clamp-3">
          Seorem Ipsum Is Simply Dummy Text Of The Printing And
          Typesetting Industry. Lorem Ipsum Has Been Industry Standard
          When An Unknown Printer Took A Galley Of Type.
        </p>
      </div>
    </div>
  );
}
