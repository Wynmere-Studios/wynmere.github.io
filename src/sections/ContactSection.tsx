import React from 'react';
import Button from '../components/Button';
import { Mail } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 px-4">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-900 to-indigo-950 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4 tracking-wide">
            Get in Touch
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Have questions about our games or interested in collaborating? We'd love to hear from you.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-8 shadow-xl">
          <form
            className="space-y-6"
            action="https://formsubmit.co/team@wynmere.com" // Replace with your email
            method="POST"
            target="_blank"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="What would you like to say?"
                required
              />
            </div>
            <div className="flex justify-center">
              <Button type="submit" className="w-full md:w-auto">
                Send Message
              </Button>
            </div>
          </form>

          <div className="mt-10 pt-8 border-t border-white/10">
            <div className="text-center">
              <p className="text-white/70 mb-4">Or reach out directly:</p>
              <a href="mailto:team@wynmere.com" className="inline-flex items-center text-white hover:text-purple-300 transition-colors">
                <Mail className="h-5 w-5 mr-2" />
                team@wynmere.com
              </a>

              {/* Social media links can be added here if needed. */}
              {/* <div className="flex justify-center space-x-6 mt-6">
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
