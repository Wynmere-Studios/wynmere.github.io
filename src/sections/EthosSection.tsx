import React from 'react';
import { StudioValue } from '../types';
import ValueCard from '../components/ValueCard';

const EthosSection: React.FC = () => {
  const values: StudioValue[] = [
    {
      icon: 'Palette',
      title: 'Whimsical Creation',
      description:
        'We craft cozy, enchanting games and apps that invite curiosity, creativity, and wonder for dreamers of all ages.'
    },
    {
      icon: 'BookOpen',
      title: 'Story-First Design',
      description:
        `Every creation begins with a story. Whether it's a witchy tea-brewing adventure or a charming productivity tool, narrative threads run through all we build.`
    },
    {
      icon: 'Users',
      title: 'Community & Care',
      description:
        'We design with intention—for everyone. Our creations center inclusivity, accessibility, and empathy, welcoming all kinds of players and users into magical spaces.'
    },
    {
      icon: 'Lightbulb',
      title: 'Curious Innovation',
      description:
        'We explore playful ideas and experiment with unexpected interactions, blending art and technology to invent joyful, meaningful experiences.'
    }
  ];

  return (
    <section id="ethos" className="relative py-24 px-4">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-pink-900 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4 tracking-wide">
            Our Studio Ethos
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            The principles that guide our creative journey and shape the experiences we craft.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <ValueCard key={index} value={value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EthosSection;
