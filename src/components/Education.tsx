import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import PremiumCard from './ui/PremiumCard';

const education = [
  {
    degree: 'Master of Science in Information Technology',
    school: 'Webster University',
    location: 'Missouri, USA',
    period: 'Aug 2023 - Dec 2024',
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'Loyola Academy Degree & PG College',
    location: 'Hyderabad, India',
    period: 'Jun 2015 - May 2018',
  },
];

const Education = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section id="education" className="py-12 md:py-16 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="section-heading"><span className="text-foreground">Academic</span> <span className="text-orange">History</span></h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-orange to-gold rounded-full" />
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <PremiumCard
              key={edu.degree}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="p-8"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange to-gold flex items-center justify-center mb-6"
              >
                <GraduationCap className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-xl font-orbitron font-bold text-foreground mb-2">
                {edu.degree}
              </h3>

              <h4 className="text-lg font-rajdhani font-bold text-orange mb-4">
                {edu.school}
              </h4>

              <div className="flex flex-wrap gap-4 text-sm font-exo text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-orange" />
                  {edu.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-orange" />
                  {edu.location}
                </span>
              </div>
            </PremiumCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;