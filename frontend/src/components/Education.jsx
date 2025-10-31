import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { Card } from './ui/card';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Electronics & Communication Engineering',
      institution: 'Subharti University',
      period: '2024 – Ongoing',
      icon: GraduationCap,
      color: '#00ffd1',
    },
    {
      degree: 'Diploma in Computer Science & Engineering',
      institution: 'BTEUP',
      period: '2021 – 2024',
      icon: GraduationCap,
      color: '#00ff88',
    },
  ];

  const certifications = [
    { name: 'Embedded Systems Design', provider: 'NPTEL' },
    { name: 'IoT Fundamentals', provider: 'Cisco Networking Academy' },
    { name: 'C Programming for Microcontrollers', provider: 'Udemy' },
  ];

  return (
    <section id="education" className="relative py-20 px-6 bg-[#0a0f1f]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4">
            <span className="text-white">Education & </span>
            <span className="text-[#00ffd1]">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00ffd1] to-[#00ff88] mx-auto" />
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold font-orbitron text-[#00ffd1] mb-8">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <Card
                  key={index}
                  className="bg-[#0f1419] border border-[#00ffd1]/20 p-6 hover:border-[#00ffd1] hover:shadow-[0_0_30px_rgba(0,255,209,0.15)] transition-all duration-300 group"
                >
                  <div className="flex items-start gap-6">
                    <div
                      className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{
                        border: `2px solid ${edu.color}`,
                        boxShadow: `0 0 20px ${edu.color}40`,
                      }}
                    >
                      <Icon size={32} style={{ color: edu.color }} />
                    </div>
                    <div className="flex-1">
                      <h4
                        className="text-xl font-bold font-orbitron mb-2"
                        style={{ color: edu.color }}
                      >
                        {edu.degree}
                      </h4>
                      <p className="text-gray-300 font-poppins mb-1">{edu.institution}</p>
                      <p className="text-gray-500 font-poppins text-sm">{edu.period}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold font-orbitron text-[#00ff88] mb-8">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="bg-[#0f1419] border border-[#00ff88]/20 p-6 hover:border-[#00ff88] hover:shadow-[0_0_30px_rgba(0,255,136,0.15)] transition-all duration-300 group text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-lg border-2 border-[#00ff88] flex items-center justify-center shadow-[0_0_15px_rgba(0,255,136,0.3)]">
                    <Award size={24} className="text-[#00ff88]" />
                  </div>
                </div>
                <h4 className="text-lg font-bold font-orbitron text-[#00ff88] mb-2">
                  {cert.name}
                </h4>
                <p className="text-gray-400 font-poppins text-sm">{cert.provider}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;