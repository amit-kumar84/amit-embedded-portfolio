import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Send, Download, ChevronDown } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { Button } from './ui/button';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hi, I'm Amit Kumar";
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.substring(0, index + 1));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
        // Show subtitle after name animation completes (with delay)
        setTimeout(() => {
          setShowSubtitle(true);
        }, 500);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/amit-kumar84', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/amit-kumar-h/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:kumaramit8126@gmail.com', label: 'Email' },
    { icon: Send, href: 'https://t.me/Mr_Amit_Rajput_1', label: 'Telegram' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-10"
    >
      {/* Circuit Lines Decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00ffd1] to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00ffd1] to-transparent" />
        <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#00ffd1] to-transparent" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#00ff88] to-transparent" />
        <div className="absolute left-3/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#00ffd1] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            <div className="mb-8">
              {/* Line 1 - Typing Animation with Gradient and Glow Flicker */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-orbitron mb-4 min-h-[80px] md:min-h-[100px]">
                <span
                  className="bg-gradient-to-r from-[#00fff0] to-[#00ff88] bg-clip-text text-transparent glow-flicker"
                  style={{
                    textShadow: '0 0 40px rgba(0, 255, 240, 0.4), 0 0 80px rgba(0, 255, 136, 0.2)',
                  }}
                >
                  {displayText}
                </span>
                <span className="inline-block w-1 h-12 md:h-16 bg-[#00ffd1] ml-1 animate-pulse" />
              </h1>

              {/* Line 2 - Fade in from below */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isTypingComplete ? 1 : 0,
                  y: isTypingComplete ? 0 : 20,
                }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold font-orbitron text-white mb-4"
              >
                Embedded Systems Engineer & IoT Innovator
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: isTypingComplete ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg md:text-xl text-gray-300 font-poppins"
              >
                Designing smart hardware that connects the physical and digital worlds.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isTypingComplete ? 1 : 0,
                y: isTypingComplete ? 0 : 20,
              }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8"
            >
              <Button
                onClick={scrollToProjects}
                className="bg-transparent border-2 border-[#00ffd1] text-[#00ffd1] hover:bg-[#00ffd1] hover:text-[#0a0f1f] font-poppins px-8 py-6 text-lg shadow-[0_0_20px_rgba(0,255,209,0.3)] hover:shadow-[0_0_30px_rgba(0,255,209,0.5)] transition-all duration-300"
              >
                View Projects
              </Button>

              <Button
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="bg-[#00ff88] text-[#0a0f1f] hover:bg-[#00ffd1] font-poppins px-8 py-6 text-lg shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isTypingComplete ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="flex gap-4 justify-center md:justify-start"
            >
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
            </motion.div>
          </div>

          {/* Right Column - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: isTypingComplete ? 1 : 0,
              scale: isTypingComplete ? 1 : 0.8,
            }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex justify-center md:justify-end order-1 md:order-2"
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative group cursor-pointer"
              style={{ perspective: '1000px' }}
            >
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ffd1] to-[#00ff88] rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-300" />

              {/* Profile image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full border-4 border-[#00ffd1] shadow-[0_0_30px_rgba(0,255,209,0.4),inset_0_0_30px_rgba(0,255,209,0.2)] group-hover:shadow-[0_0_50px_rgba(0,255,209,0.6),inset_0_0_50px_rgba(0,255,209,0.3)] transition-all duration-300" />
                
                <img
                  src="https://images.unsplash.com/photo-1717444308688-866a50e55a02?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxlbWJlZGRlZCUyMHN5c3RlbXN8ZW58MHx8fGJsYWNrfDE3NjE4NDU3OTJ8MA&ixlib=rb-4.1.0&q=85"
                  alt="Amit Kumar - Embedded Systems Engineer"
                  className="w-full h-full object-cover rounded-full"
                />

                {/* Scan line shimmer effect */}
                <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                  <div className="scan-line"></div>
                </div>

                {/* Additional glow ring */}
                <div className="absolute inset-[-8px] rounded-full border-2 border-[#00ff88]/30 animate-pulse" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isTypingComplete ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown size={32} className="text-[#00ffd1]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;