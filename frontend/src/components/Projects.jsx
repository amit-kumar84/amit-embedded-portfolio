import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Agriculture Monitoring System',
      description: 'IoT-based soil moisture and temperature monitoring with automatic irrigation control.',
      tech: ['ESP32', 'DHT11', 'Blynk', 'C'],
      image: 'https://images.unsplash.com/photo-1583390792041-4ee677ef276f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxtaWNyb2NvbnRyb2xsZXJ8ZW58MHx8fGJsYWNrfDE3NjE4NDU4MDl8MA&ixlib=rb-4.1.0&q=85',
      github: 'https://github.com',
      demo: 'https://example.com',
      color: '#00ffd1',
    },
    {
      title: 'Object Avoiding Robot',
      description: 'Autonomous robot using ultrasonic sensors and PWM motor control for obstacle avoidance.',
      tech: ['Arduino Uno', 'Embedded C', 'IR Sensor', 'PWM'],
      image: 'https://images.unsplash.com/photo-1542064923-b4bd6908c745?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHxtaWNyb2NvbnRyb2xsZXJ8ZW58MHx8fGJsYWNrfDE3NjE4NDU4MDl8MA&ixlib=rb-4.1.0&q=85',
      github: 'https://github.com',
      color: '#00ff88',
    },
    {
      title: 'IoT Home Energy Meter',
      description: 'Real-time power usage tracking with MQTT protocol and ThingSpeak cloud dashboard.',
      tech: ['NodeMCU', 'MQTT', 'ThingSpeak', 'Cloud Integration'],
      image: 'https://images.unsplash.com/photo-1568209865332-a15790aed756?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHxjaXJjdWl0JTIwYm9hcmR8ZW58MHx8fGJsYWNrfDE3NjE4NDU3OTd8MA&ixlib=rb-4.1.0&q=85',
      github: 'https://github.com',
      demo: 'https://example.com',
      color: '#00ffd1',
    },
    {
      title: 'Smart Helmet Prototype',
      description: 'Accident detection and GSM alert system for motorcycle rider safety.',
      tech: ['Atmega328P', 'GSM Module', 'Embedded C', 'Sensors'],
      image: 'https://images.unsplash.com/photo-1507220529008-e931df30d1ed?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHw0fHxjaXJjdWl0JTIwYm9hcmR8ZW58MHx8fGJsYWNrfDE3NjE4NDU3OTd8MA&ixlib=rb-4.1.0&q=85',
      github: 'https://github.com',
      color: '#00ff88',
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4">
            <span className="text-white">Featured </span>
            <span className="text-[#00ffd1]">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00ffd1] to-[#00ff88] mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-[#0f1419] border border-[#00ffd1]/20 overflow-hidden group hover:border-[#00ffd1] hover:shadow-[0_0_40px_rgba(0,255,209,0.2)] transition-all duration-500"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1419] via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3
                  className="text-2xl font-bold font-orbitron mb-3"
                  style={{ color: project.color }}
                >
                  {project.title}
                </h3>
                <p className="text-gray-300 font-poppins mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-poppins rounded-full border"
                      style={{
                        borderColor: `${project.color}40`,
                        color: project.color,
                        backgroundColor: `${project.color}10`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <Button
                      onClick={() => window.open(project.github, '_blank')}
                      className="flex-1 bg-transparent border border-[#00ffd1]/50 text-[#00ffd1] hover:bg-[#00ffd1]/10 hover:border-[#00ffd1] font-poppins transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Github size={16} />
                      Code
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      onClick={() => window.open(project.demo, '_blank')}
                      className="flex-1 bg-[#00ff88]/20 border border-[#00ff88]/50 text-[#00ff88] hover:bg-[#00ff88] hover:text-[#0a0f1f] hover:border-[#00ff88] font-poppins transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;