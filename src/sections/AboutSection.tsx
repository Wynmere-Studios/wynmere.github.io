import React from 'react';
import { Star, Sparkles } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-4 overflow-hidden"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-indigo-950 z-0" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-pink-500/20">
        <Star className="h-16 w-16 animate-pulse" />
      </div>
      <div className="absolute bottom-20 right-10 text-purple-500/20">
        <Sparkles className="h-20 w-20 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-6 tracking-wide">
          About Wynmere
        </h2>

        <div className="prose prose-lg prose-invert mx-auto">
          <p className="text-white/80 mb-6 leading-relaxed">
            Wynmere Studios is a remote-first creative collective based in Washington, crafting whimsical games and magical tools—each one woven from stardust and stories.
          </p>

          <p className="text-white/80 mb-6 leading-relaxed">
            Founded by storytellers, artists, and technologists, we blend narrative, cozy design, and accessibility to build playful, inclusive experiences that spark curiosity and joy. From experimental apps to story-rich games, we create with intention, imagination, and care.
          </p>

          <p className="text-white/80 leading-relaxed">
            We're a small studio with big dreams—independent, multidisciplinary, and proudly community-centered.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
