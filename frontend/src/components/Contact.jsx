import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Message Sent!',
        description: 'Thank you for reaching out. I\'ll get back to you soon!',
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'kumaramit812670@gmail.com', href: 'mailto:kumaramit812670@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 8126704800', href: 'tel:+91 8126704800' },
    { icon: MapPin, label: 'Location', value: 'India', href: null },
  ];

  return (
    <section id="contact" className="relative py-20 px-6 bg-[#0a0f1f]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4">
            <span className="text-white">Get In </span>
            <span className="text-[#00ffd1]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00ffd1] to-[#00ff88] mx-auto mb-6" />
          <p className="text-gray-300 font-poppins text-lg max-w-2xl mx-auto">
            Let's build something intelligent together! Reach out for collaborations, projects, or opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <Card className="bg-[#0f1419] border border-[#00ffd1]/20 p-8 h-full">
              <h3 className="text-2xl font-bold font-orbitron text-[#00ffd1] mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-lg border-2 border-[#00ffd1] flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_20px_rgba(0,255,209,0.4)] transition-all duration-300">
                        <Icon size={20} className="text-[#00ffd1]" />
                      </div>
                      <div>
                        <p className="text-gray-500 font-poppins text-sm">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-gray-300 font-poppins hover:text-[#00ffd1] transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-300 font-poppins">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-8 border-t border-[#00ffd1]/20">
                <p className="text-gray-400 font-poppins text-sm leading-relaxed">
                  I'm always interested in hearing about new projects and opportunities in embedded systems, IoT, and robotics.
                </p>
              </div>
            </Card>
          </div>

          <div>
            <Card className="bg-[#0f1419] border border-[#00ffd1]/20 p-8">
              <h3 className="text-2xl font-bold font-orbitron text-[#00ff88] mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 font-poppins text-sm mb-2">Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-[#0a0f1f] border-[#00ffd1]/30 text-white focus:border-[#00ffd1] focus:ring-[#00ffd1]/20 font-poppins"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-poppins text-sm mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-[#0a0f1f] border-[#00ffd1]/30 text-white focus:border-[#00ffd1] focus:ring-[#00ffd1]/20 font-poppins"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-poppins text-sm mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-[#0a0f1f] border-[#00ffd1]/30 text-white focus:border-[#00ffd1] focus:ring-[#00ffd1]/20 font-poppins resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#00ff88] text-[#0a0f1f] hover:bg-[#00ffd1] font-poppins py-6 text-lg shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;