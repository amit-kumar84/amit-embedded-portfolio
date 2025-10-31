import React from 'react';
import { Github, Linkedin, Mail, Send, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/amit-kumar84', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/amit-kumar-h/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:kumaramit8126@gmail.com', label: 'Email' },
    { icon: Send, href: 'https://t.me/Mr_Amit_Rajput_1', label: 'Telegram' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0a0f1f] border-t border-[#00ffd1]/20 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div
              className="text-2xl font-bold font-orbitron mb-2 cursor-pointer inline-block group"
              onClick={scrollToTop}
            >
              <span className="text-[#00ffd1] group-hover:text-[#00ff88] transition-colors duration-300">
                {'<AK/>'}
              </span>
            </div>
            <p className="text-gray-400 font-poppins text-sm">
              Embedded Systems Engineer & IoT Innovator
            </p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg border border-[#00ffd1]/30 flex items-center justify-center text-[#00ffd1] hover:bg-[#00ffd1] hover:text-[#0a0f1f] hover:border-[#00ffd1] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,209,0.4)] hover:scale-110"
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#00ffd1]/20 text-center">
          <p className="text-gray-400 font-poppins text-sm flex items-center justify-center gap-2 flex-wrap">
            <span>© {currentYear} Amit Kumar</span>
            <span className="hidden md:inline">|</span>
            <span className="flex items-center gap-1">
              Designed with <Heart size={16} className="text-[#00ffd1] fill-current" /> Passion for Embedded Systems & IoT
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;