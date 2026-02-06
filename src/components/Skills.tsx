import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import PremiumCard from './ui/PremiumCard';
import {
  SiPython, SiPytorch, SiTensorflow, SiScikitlearn, SiFastapi, SiFlask,
  SiDocker, SiKubernetes, SiMysql,
  SiPostgresql, SiApachespark, SiPandas, SiNumpy, SiSqlite, SiMlflow,
  SiOpenai, SiHuggingface, SiLangchain, SiOracle, SiAmazon, SiStackoverflow
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import { FaBrain, FaRobot, FaLanguage, FaDatabase, FaServer, FaCogs, FaChartLine, FaAws } from 'react-icons/fa';

interface Skill {
  name: string;
  level: number;
  icon: JSX.Element;
  category: string;
}

const skillsData: Skill[] = [
  // AI & ML
  { name: 'Artificial Intelligence', level: 95, icon: <FaBrain />, category: 'AI & ML' },
  { name: 'Machine Learning', level: 92, icon: <SiScikitlearn />, category: 'AI & ML' },
  { name: 'Deep Learning', level: 88, icon: <SiPytorch />, category: 'AI & ML' },
  { name: 'Model Training', level: 90, icon: <FaRobot />, category: 'AI & ML' },
  { name: 'Feature Engineering', level: 85, icon: <FaCogs />, category: 'AI & ML' },

  // Gen AI
  { name: 'Generative AI', level: 92, icon: <SiOpenai />, category: 'Gen AI' },
  { name: 'LLMs', level: 90, icon: <SiHuggingface />, category: 'Gen AI' },
  { name: 'RAG', level: 88, icon: <SiLangchain />, category: 'Gen AI' },
  { name: 'Prompt Engineering', level: 94, icon: <FaLanguage />, category: 'Gen AI' },

  // NLP
  { name: 'NLP', level: 87, icon: <FaLanguage />, category: 'NLP' },
  { name: 'Text Analytics', level: 85, icon: <FaChartLine />, category: 'NLP' },
  { name: 'Semantic Search', level: 82, icon: <FaDatabase />, category: 'NLP' },

  // Programming & Frameworks
  { name: 'Python', level: 96, icon: <SiPython />, category: 'Dev' },
  { name: 'PyTorch', level: 88, icon: <SiPytorch />, category: 'Dev' },
  { name: 'TensorFlow', level: 82, icon: <SiTensorflow />, category: 'Dev' },
  { name: 'FastAPI', level: 85, icon: <SiFastapi />, category: 'Dev' },
  { name: 'Pandas/NumPy', level: 92, icon: <SiPandas />, category: 'Dev' },

  // Cloud & MLOps
  { name: 'AWS SageMaker', level: 84, icon: <FaAws />, category: 'Cloud' },
  { name: 'Docker', level: 86, icon: <SiDocker />, category: 'Cloud' },
  { name: 'Kubernetes', level: 78, icon: <SiKubernetes />, category: 'Cloud' },
  { name: 'MLOps', level: 85, icon: <SiMlflow />, category: 'Cloud' },
  { name: 'Azure ML', level: 75, icon: <VscAzure />, category: 'Cloud' },

  // Databases
  { name: 'PostgreSQL', level: 88, icon: <SiPostgresql />, category: 'Data' },
  { name: 'MySQL', level: 85, icon: <SiMysql />, category: 'Data' },
  { name: 'Apache Spark', level: 80, icon: <SiApachespark />, category: 'Data' },
  { name: 'SQL Server', level: 82, icon: <FaDatabase />, category: 'Data' },
];

const categories = [
  { name: 'AI & ML' },
  { name: 'Gen AI' },
  { name: 'NLP' },
  { name: 'Dev' },
  { name: 'Cloud' },
  { name: 'Data' },
];

const ProgressBar = ({ level }: { level: number }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(level), 200);
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="w-full h-2 bg-muted/30 rounded-full overflow-hidden border border-border/50">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${width}%` }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="h-full bg-gradient-to-r from-gold to-orange relative"
      >
        <div className="absolute inset-0 bg-white/20 animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
      </motion.div>
    </div>
  );
};

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <PremiumCard className="p-8 h-full group" glowColor="hsl(var(--orange))">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="text-5xl text-orange p-5 rounded-2xl bg-orange/10 group-hover:scale-110 transition-all duration-300">
            {skill.icon}
          </div>
          <div className="w-full">
            <div className="flex justify-between items-end mb-3">
              <h4 className="font-orbitron font-bold text-lg md:text-xl transition-colors">
                {skill.name}
              </h4>
              <span className="text-sm font-rajdhani font-bold text-muted-foreground whitespace-nowrap">
                {skill.level}%
              </span>
            </div>
            <ProgressBar level={skill.level} />
          </div>
        </div>
      </PremiumCard>
    </motion.div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('AI & ML');

  useEffect(() => {
    AOS.refresh();
  }, []);

  const filteredSkills = skillsData.filter(skill =>
    skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-12 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="section-heading"><span className="text-foreground">Technical</span> <span className="text-orange">Expertise</span></h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-orange to-gold rounded-full mb-6" />
          <p className="text-muted-foreground font-exo max-w-2xl mx-auto">
            A comprehensive overview of my technical stack and proficiency levels across various domains of AI, Data Engineering, and Deployment.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up" data-aos-delay="100">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`
                px-6 py-2 rounded-full font-rajdhani font-bold text-sm transition-all duration-300 border
                ${activeCategory === cat.name
                  ? 'bg-orange text-white border-orange shadow-[0_0_15px_rgba(254,145,53,0.4)]'
                  : 'bg-glass-bg text-muted-foreground border-border hover:border-orange/50'
                }
              `}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Skills;