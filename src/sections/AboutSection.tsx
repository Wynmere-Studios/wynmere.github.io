import React from 'react';
import { Star, Sparkles } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-4 overflow-hidden"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900 to-ink-950 z-0" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-white/10">
        <Star className="h-16 w-16 animate-pulse" />
      </div>
      <div className="absolute bottom-20 right-10 text-white/10">
        <Sparkles className="h-20 w-20 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-6 tracking-wide">
          About Wynmere
        </h2>

        <div className="prose prose-lg prose-invert mx-auto">
          <p className="text-white/80 mb-6 leading-relaxed">
            Wynmere is an indie game studio based in Washington. We make cozy games and creative tools, with a focus on storytelling, thoughtful design, and accessibility.
          </p>

          <p className="text-white/80 leading-relaxed">
            We're a duo, writing, designing, and developing. Right now we're working on Mycelium, and we'll share more as it comes together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
