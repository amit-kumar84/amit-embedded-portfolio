import React, { useState, useEffect, useRef } from 'react';
import { Zap, Code, Cpu, Wifi } from 'lucide-react';
import { Card } from './ui/card';

const About = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    sensors: 0,
    linesOfCode: 0,
    hours: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const targetValues = {
    projects: 12,
    sensors: 20,
    linesOfCode: 50000,
    hours: 900,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounters({
        projects: Math.floor(targetValues.projects * progress),
        sensors: Math.floor(targetValues.sensors * progress),
        linesOfCode: Math.floor(targetValues.linesOfCode * progress),
        hours: Math.floor(targetValues.hours * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targetValues);
      }
    }, interval);
  };

  const stats = [
    { icon: Zap, label: 'Projects Completed', value: `${counters.projects}+`, color: '#00ffd1' },
    { icon: Cpu, label: 'Sensors Used', value: `${counters.sensors}+`, color: '#00ff88' },
    { icon: Code, label: 'Lines of Code', value: `${counters.linesOfCode.toLocaleString()}+`, color: '#00ffd1' },
    { icon: Wifi, label: 'Hours of Development', value: `${counters.hours}+`, color: '#00ff88' },
  ];

  return (
    <section id="about" ref={sectionRef} className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4">
            <span className="text-white">Who I </span>
            <span className="text-[#00ffd1]">Am</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00ffd1] to-[#00ff88] mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-gray-300 font-poppins text-lg leading-relaxed">
              I am an <span className="text-[#00ffd1] font-semibold">Electronics and Communication Engineering</span> student passionate about Embedded Systems and IoT solutions.
            </p>
            <p className="text-gray-300 font-poppins text-lg leading-relaxed">
              I build smart, connected devices using microcontrollers, sensors, and efficient firmware. My work focuses on <span className="text-[#00ff88] font-semibold">hardware-software integration</span>, real-time systems, and wireless communication.
            </p>
            <p className="text-gray-300 font-poppins text-lg leading-relaxed">
              I enjoy experimenting with ARM processors, FreeRTOS, and IoT cloud platforms. Every project is an opportunity to bridge the gap between the <span className="text-[#00ffd1] font-semibold">physical and digital worlds</span>.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00ffd1]/20 to-[#00ff88]/20 rounded-lg blur-xl" />
            <img
              src="https://images.unsplash.com/photo-1517055729445-fa7d27394b48?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxjaXJjdWl0JTIwYm9hcmR8ZW58MHx8fGJsYWNrfDE3NjE4NDU3OTd8MA&ixlib=rb-4.1.0&q=85"
              alt="Circuit Board"
              className="relative rounded-lg shadow-2xl border border-[#00ffd1]/30 w-full h-[400px] object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="bg-[#0f1419] border border-[#00ffd1]/20 p-6 text-center hover:border-[#00ffd1] hover:shadow-[0_0_30px_rgba(0,255,209,0.2)] transition-all duration-300 group"
              >
                <div className="flex justify-center mb-4">
                  <div
                    className="w-16 h-16 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={{
                      border: `2px solid ${stat.color}`,
                      boxShadow: `0 0 20px ${stat.color}40`,
                    }}
                  >
                    <Icon size={32} style={{ color: stat.color }} />
                  </div>
                </div>
                <div
                  className="text-3xl md:text-4xl font-bold font-orbitron mb-2 transition-all duration-300"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-gray-400 font-poppins text-sm">{stat.label}</div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;