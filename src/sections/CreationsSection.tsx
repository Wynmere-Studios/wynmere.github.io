import React from 'react';
import { CreationCard as CreationCardType } from '../types';
import CreationCard from '../components/CreationCard';

const CreationsSection: React.FC = () => {
  const creations: CreationCardType[] = [
    {
      title: "Odd at Sea",
      description: "A mythic roguelike fishing adventure where an aging fisherman, Odd, sails shifting seas to catch rare fish, confront sea gods, and rediscover himself. A calm, reflective journey through ancient waters, monsters, and memory.",
      imageUrl: "https://images.pexels.com/photos/13986595/pexels-photo-13986595.jpeg",
      comingSoon: true
    },
    {
      title: "Coforo",
      description: "A cozy, gamified social MMO where players design relaxing focus rooms, complete mindful tasks, and connect through shared creative rituals. Collect vibes, decorate your space, and find calm in community.",
      imageUrl: "https://images.pexels.com/photos/32229060/pexels-photo-32229060/free-photo-of-cozy-indoor-library-with-modern-decor-and-books.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      comingSoon: true
    },
    {
      title: "Inkkori",
      description: "A tattoo social app where users explore styles, book artists, and create 3D avatars to preview ink. With messaging, profiles, and a vibrant map-based discovery feature, it connects tattoo lovers and artists in a bold, quirky, and minimalist space.",
      imageUrl: "https://images.pexels.com/photos/2087995/pexels-photo-2087995.jpeg",
      comingSoon: true
    },
    {
      title: "Trinkerie",
      description: "A community marketplace for blind box collectors to trade, list, and discover art toys. Easily swap figures locally or browse wishlists—all in a playful, modern space designed for safe, collector-friendly exchanges.",
      imageUrl: "https://images.pexels.com/photos/32222706/pexels-photo-32222706/free-photo-of-colorful-gashapon-vending-machines-in-taiwan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      comingSoon: true
    },
  ];

  return (
    <section id="creations" className="relative py-24 px-4">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 to-purple-900 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4 tracking-wide">
            Our Creations
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Embark on extraordinary journeys through our carefully crafted worlds, where every pixel and sound
            has been infused with meaning and magic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {creations.map((creation, index) => (
            <CreationCard key={index} creation={creation} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreationsSection;
