import React from 'react';
import { CreationCard as creationCardType } from '../types';
// import Button from './Button';

interface CreationCardProps {
  creation: creationCardType;
}

const CreationCard: React.FC<CreationCardProps> = ({ creation }) => {
  return (
    <div className="group relative rounded-xl overflow-hidden transition-transform duration-500 hover:scale-[1.02] hover:shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/60 to-transparent z-10" />

      <img
        src={creation.imageUrl}
        alt={creation.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        style={{ aspectRatio: '16/9', filter: 'brightness(0.6)' }}
      />

      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
        {creation.comingSoon && (
          <div className="bg-pink-600/90 text-white text-xs font-medium px-3 py-1 rounded-full w-max mb-3">
            Coming Soon
          </div>
        )}

        <h3 className="text-white text-xl md:text-2xl font-serif mb-2 tracking-wider">
          {creation.title}
        </h3>

        <p className="text-white/80 text-sm mb-4 line-clamp-3">
          {creation.description}
        </p>

        {/* <Button variant="secondary" className="w-max">
          Wishlist on Steam
        </Button> */}
      </div>
    </div>
  );
};

export default CreationCard;
