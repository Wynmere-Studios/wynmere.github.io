import React from 'react';
import { StudioValue } from '../types';
import * as LucideIcons from 'lucide-react';

interface ValueCardProps {
  value: StudioValue;
}

const ValueCard: React.FC<ValueCardProps> = ({ value }) => {
  // Dynamically get the icon from lucide-react
  const IconComponent =
    ((LucideIcons as unknown) as Record<string, React.FC<{ className?: string }>>)[value.icon] ||
    LucideIcons.Sparkles;

  return (
    <div className="p-6 rounded-lg bg-gradient-to-br from-indigo-900/40 to-purple-800/20 backdrop-blur-sm border border-white/10 text-center transform transition-transform hover:-translate-y-1">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-700/30 mb-4">
        <IconComponent className="h-6 w-6 text-purple-300" />
      </div>
      <h3 className="text-white text-lg font-serif mb-2">{value.title}</h3>
      <p className="text-white/70 text-sm">{value.description}</p>
    </div>
  );
};

export default ValueCard;
