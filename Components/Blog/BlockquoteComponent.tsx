"use client";

import React from "react";
import { Quote } from "lucide-react"; // Pour les guillemets fermants
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Poids utilisé pour le corps du texte
});

const BlockquoteComponent: React.FC = () => {
    // Le texte de la citation
    const quoteText = "Urabitur Varius Erros Area Rutrum Consequat Mauris Sollici Area Tudino    Electronic Typesetting, Remaining Essentially Dimentum Luctus Enim";
    
    return (
        <div className={`${roboto.className} w-full mt-2 px-2 sm:px-4 lg:px-8`}>
            {/* Conteneur principal de la citation */}
            <blockquote className="
                flex 
                max-w-4xl mx-auto
                relative 
                bg-[#ecf3ff] 
                p-6 
                sm:p-8 
                border-l-4 
                border-[#560ce3] 
                shadow-sm 
            ">
                
               <p
                className="
                    text-base 
                    sm:text-lg 
                    font-sm 
                    text-black
                    pr-8 
                    leading-relaxed
                    italic
                "
                >
                " {quoteText} "
                </p>

                {/* Icône de guillemet fermant positionnée en bas à droite */}
                <div className="
                    absolute 
                    bottom-4
                    right-4 
                    text-[#560ce3] 
                    opacity-80
                ">
                    <Quote size={32} strokeWidth={2.5} />
                </div>
            </blockquote>
        </div>
    );
};

export default BlockquoteComponent;