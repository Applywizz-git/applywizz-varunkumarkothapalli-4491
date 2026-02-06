import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import { Award, ShieldCheck, GraduationCap } from 'lucide-react';
import PremiumCard from './ui/PremiumCard';

const certifications = [
  {
    name: 'Machine Learning Specialization',
    issuer: 'Coursera (Stanford)',
    date: 'Dec 2023',
    icon: <ShieldCheck className="w-8 h-8" />,
  },
  {
    name: 'Deep Learning Specialization',
    issuer: 'Coursera (DeepLearning.AI)',
    date: 'Oct 2023',
    icon: <Award className="w-8 h-8" />,
  },
  {
    name: 'Generative AI with Large Language Models',
    issuer: 'Coursera (AWS)',
    date: 'Sep 2023',
    icon: <ShieldCheck className="w-8 h-8" />,
  },
  {
    name: 'Applied Machine Learning with Python',
    issuer: 'Coursera (University of Michigan)',
    date: 'Aug 2023',
    icon: <GraduationCap className="w-8 h-8" />,
  },
  {
    name: 'MLOps Fundamentals',
    issuer: 'DataCamp',
    date: 'Jun 2023',
    icon: <ShieldCheck className="w-8 h-8" />,
  },
];

const Certifications = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section id="certifications" className="py-12 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="section-heading"><span className="text-foreground">Verifiable</span> <span className="text-orange">Credentials</span></h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-orange to-gold rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="h-full"
            >
              <PremiumCard className="p-8 group h-full flex flex-col items-center text-center">
                {/* Badge Icon Animation */}
                <div className="relative mb-6">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-orange/20 to-gold/10 flex items-center justify-center border border-orange/30 transition-colors shadow-lg shadow-orange/10"
                  >
                    <div className="text-orange transition-transform duration-300">
                      {cert.icon}
                    </div>
                  </motion.div>
                  {/* Decorative Sparkle */}
                  <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-2 -right-2 text-gold"
                  >
                    <Award className="w-5 h-5 fill-gold" />
                  </motion.div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl font-orbitron font-bold text-foreground mb-3 leading-tight transition-colors">
                    {cert.name}
                  </h3>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-rajdhani font-bold text-orange uppercase tracking-wider">
                      {cert.issuer}
                    </p>
                    <p className="text-xs font-exo text-muted-foreground italic">
                      Completed: {cert.date}
                    </p>
                  </div>
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange/5 rounded-full blur-[120px] -z-10" />
    </section>
  );
};

export default Certifications;