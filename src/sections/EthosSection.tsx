import React from 'react';
import { StudioValue } from '../types';
import ValueCard from '../components/ValueCard';

const EthosSection: React.FC = () => {
  const values: StudioValue[] = [
    {
      icon: 'Palette',
      title: 'Whimsical Creation',
      description:
        'We make cozy games and tools that are nice to spend time in.'
    },
    {
      icon: 'BookOpen',
      title: 'Story-First Design',
      description:
        `Most of what we build starts with a story, whether it's a game or a tool for writing one.`
    },
    {
      icon: 'Users',
      title: 'Community & Care',
      description:
        'We design with accessibility and inclusivity in mind so more people can play and use what we make.'
    },
    {
      icon: 'Brush',
      title: 'Human-Made Art',
      description:
        `All of our art is made by people. We don't use AI-generated art in our games or tools.`
    }
  ];

  return (
    <section id="ethos" className="relative py-24 px-4">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900 to-plum-900 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4 tracking-wide">
            Our Studio Ethos
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            What we care about when we make things.
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
