import React, { useState, useEffect, useRef } from 'react';
import { Card } from './ui/card';

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      title: 'Core Embedded Skills',
      color: '#00ffd1',
      skills: [
        { name: 'C / C++ for Embedded', level: 90 },
        { name: 'Microcontrollers (8051, AVR, ARM, STM32, ESP32)', level: 85 },
        { name: 'Embedded C & Keil µVision', level: 80 },
        { name: 'RTOS (FreeRTOS)', level: 75 },
        { name: 'UART, SPI, I2C, PWM, ADC, Timers', level: 88 },
      ],
    },
    {
      title: 'IoT & Networking',
      color: '#00ff88',
      skills: [
        { name: 'ESP8266 / ESP32 Wi-Fi Modules', level: 85 },
        { name: 'MQTT, HTTP, REST APIs', level: 82 },
        { name: 'Cloud Platforms (Blynk, Firebase, AWS IoT)', level: 78 },
        { name: 'Sensor Interfacing', level: 90 },
      ],
    },
    {
      title: 'Hardware & Tools',
      color: '#00ffd1',
      skills: [
        { name: 'Arduino IDE, STM32CubeIDE, MPLAB', level: 85 },
        { name: 'Proteus, EasyEDA (PCB Design)', level: 80 },
        { name: 'Soldering & Hardware Prototyping', level: 88 },
      ],
    },
    {
      title: 'Programming & Extras',
      color: '#00ff88',
      skills: [
        { name: 'Python (Automation & Data Logging)', level: 82 },
        { name: 'Linux Basics', level: 75 },
        { name: 'Git & GitHub', level: 85 },
        { name: 'MATLAB (Signal Processing)', level: 70 },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          skillCategories.forEach((category, catIndex) => {
            category.skills.forEach((skill, skillIndex) => {
              setTimeout(() => {
                setVisibleSkills((prev) => [...prev, `${catIndex}-${skillIndex}`]);
              }, (catIndex * category.skills.length + skillIndex) * 100);
            });
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="relative py-20 px-6 bg-[#0a0f1f]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4">
            <span className="text-white">Technical </span>
            <span className="text-[#00ffd1]">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00ffd1] to-[#00ff88] mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <Card
              key={catIndex}
              className="bg-[#0f1419] border border-[#00ffd1]/20 p-8 hover:border-[#00ffd1] hover:shadow-[0_0_30px_rgba(0,255,209,0.15)] transition-all duration-300"
            >
              <h3
                className="text-2xl font-bold font-orbitron mb-6"
                style={{ color: category.color }}
              >
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => {
                  const isVisible = visibleSkills.includes(`${catIndex}-${skillIndex}`);
                  return (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 font-poppins text-sm">{skill.name}</span>
                        <span
                          className="text-sm font-semibold font-poppins"
                          style={{ color: category.color }}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-[#1a1f2e] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            background: `linear-gradient(90deg, ${category.color}, ${category.color}dd)`,
                            boxShadow: `0 0 10px ${category.color}80`,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;