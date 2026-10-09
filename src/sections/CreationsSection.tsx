import React from 'react';
import { CreationCard as CreationCardType } from '../types';
import CreationCard from '../components/CreationCard';

const CreationsSection: React.FC = () => {
  const creations: CreationCardType[] = [
    {
      title: "Coforo",
      description: "A cozy social MMO where you decorate your own focus room, work through tasks, and spend quiet time with other players.",
      imageUrl: "https://images.pexels.com/photos/32229060/pexels-photo-32229060/free-photo-of-cozy-indoor-library-with-modern-decor-and-books.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      comingSoon: true
    },
    {
      title: "Mycelium: Story Maker",
      description: "A dialogue tool for visual novels and other story-driven games. Write branching conversations and characters, then use them in Godot.",
      imageUrl: "https://images.pexels.com/photos/32672265/pexels-photo-32672265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      comingSoon: true
    },
  ];

  return (
    <section id="creations" className="relative py-24 px-4">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 to-ink-900 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-white tracking-wide">
            Our Creations
          </h2>
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
