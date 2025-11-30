import Image from "next/image";

interface Avatar {
    id: number;
    src: string;
    alt: string;
    isSpecial?: boolean; 
    specialText?: string;
}

// Données des avatars
const AVATAR_DATA: Avatar[] = [
    { id: 1, src: "/images/user/user1.png", alt: "Personne 1" },
    { id: 2, src: "/images/user/user2.jpg", alt: "Personne 2" },
    { id: 3, src: "/images/user/user3.jpg", alt: "Personne 3" },
    { id: 4, src: "/images/user/user4.jpg", alt: "Personne 4" },
    { id: 5, src: "/images/user/user5.jpg", alt: "Personne 5" },
    { id: 6, src: "", alt: "5k+ personnes", isSpecial: true, specialText: "5K+" }, 
];

export const HeroBanner = () => {
    return (
        <div
            className="relative w-full overflow-hidden bg-transparent"
            data-aos="fade-up"
            data-aos-delay="300"
        >
            <div className="mx-auto max-w-full mt-4 mb-4 md:mt-0 md:mb-0">
                <div className="flex items-center justify-center space-x-2">
                    
                    {/* Avatars */}
                    <div className="flex items-center -space-x-4">
                        {AVATAR_DATA.map((avatar, index) => (
                            <div
                                key={avatar.id}
                                className={`relative w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full 
                                    border-2 border-white shadow-lg 
                                    ${avatar.isSpecial ? 'bg-purple-700' : 'bg-white/10'}`}
                                style={{ zIndex: AVATAR_DATA.length - index }}
                            >
                                {avatar.isSpecial ? (
                                    <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs md:text-sm">
                                        {avatar.specialText}
                                    </span>
                                ) : (
                                    <Image
                                        src={avatar.src}
                                        alt={avatar.alt}
                                        fill
                                        sizes="(max-width: 768px) 40px, 56px"
                                        className="rounded-full object-cover"
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Texte */}
                    <div className="flex flex-col text-white leading-tight -ml-2">
                        <span className="text-base md:text-lg lg:text-xl font-semibold tracking-tight">
                            35k People booked
                        </span>

                        {/* ❌ Hidden on mobile / ✔ Visible on desktop */}
                        <span className="hidden md:inline-block text-lg lg:text-xl font-semibold tracking-tight mt-0">
                            dream place
                        </span>
                    </div>

                    {/* Flèche design */}
                    <div className="hidden md:block relative w-28 md:w-28 md:h-28 lg:w-34 lg:h-34 ml-2">
                        <Image
                            src="/images/h3-hero-shape.png"
                            alt="Design de flèche"
                            fill
                            style={{ objectFit: "contain" }}
                            className="object-contain"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};
