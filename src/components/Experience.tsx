import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import { Briefcase, MapPin, Calendar, Building2, Target, Trophy, Zap, Layers } from 'lucide-react';
import PremiumCard from './ui/PremiumCard';

const experiences = [
  {
    company: 'Equifax',
    role: 'AI / Machine Learning Engineer',
    location: 'Saint Louis, Missouri',
    period: 'Mar 2025 - Present',
    client: 'Equifax Global Analytics',
    project: 'Consumer Credit Decisioning Platform',
    challenge: 'Fragmented consumer credit data caused 60+ day model build cycles, hindering real-time risk assessment and decisioning speed for modern lending markets.',
    impact: 'Streamlined data preparation reduced cycles by 30% while achieving 22% recall gains through automated MLOps pipelines and hyperparameter optimization.',
    bullets: [
      'Engineered Python-based ML pipelines with Scikit-learn, optimizing feature preparation for large consumer credit datasets.',
      'Advanced credit risk decisioning by training supervised and unsupervised models with disciplined tuning.',
      'Developed low-latency inference services using FastAPI and Flask for real-time predictor access.',
      'Established robust MLOps workflows including automated monitoring and drift detection to prevent degradation.',
      'Implemented LLM-powered document intelligence solutions for intelligent content extraction and review.',
    ],
    techStack: ['Python', 'Scikit-learn', 'FastAPI', 'AWS', 'Docker', 'Azure ML', 'Generative AI'],
  },
  {
    company: 'MedPlus Health Systems',
    role: 'Database Developer - ML Systems',
    location: 'Chennai, India',
    period: 'Sep 2021 - Jul 2023',
    client: 'MedPlus Retail & Analytics',
    project: 'Pharmacy Sales Forecasting & Inventory Optimization',
    challenge: 'Maintaining high-availability and accuracy for demand forecasting datasets across 3000+ retail pharmacy locations with fragmented transactional data.',
    impact: 'Achieved 40% faster feature retrieval and 35% higher data availability through optimized high-performance SQL architectures and ETL pipelines.',
    bullets: [
      'Architected high-performance SQL ETL pipelines for multi-domain healthcare data and model-ready sets.',
      'Designed robust feature engineering workflows that processed high-volume transactional records.',
      'Enhanced model training reliability by developing integrated data validation and anomaly detection logic.',
      'Optimized database architectures and partitioning strategies to minimize query latencies.',
      'Built secure REST API gateways to expose curated healthcare insights to downstream ML services.',
    ],
    techStack: ['SQL', 'PostgreSQL', 'Python', 'REST APIs', 'Apache Spark', 'Feature Engineering'],
  },
  {
    company: 'DXC Technologies India',
    role: 'Software Engineer - Data Platforms',
    location: 'India',
    period: 'Mar 2019 - Aug 2021',
    client: 'Enterprise Data Services',
    project: 'Multi-Cloud Analytics Migration & Infrastructure',
    challenge: 'Managing massive data growth within legacy warehouse structures that lacked the throughput and scalability required for modern AI/ML analytics.',
    impact: 'Boosted analytics throughput by 30% and reduced query latency by 40% via strategic cloud migration and schema normalization.',
    bullets: [
      'Optimized enterprise-scale SQL Server environments, leveraging advanced indexing and query tuning.',
      'Restructured legacy database schemas and execution plans for prep of modeling datasets.',
      'Facilitated the migration of analytics workloads to AWS (EC2, S3) for scalable compute/storage.',
      'Collaborated on cloud-native architecture designs to align warehouse structures with AI needs.',
      'Enhanced platform reliability through root-cause analysis and automated pipeline monitoring.',
    ],
    techStack: ['SQL Server', 'AWS', 'EC2', 'S3', 'Data Warehousing', 'ETL', 'Cloud Migration'],
  },
];

const Experience = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section id="experience" className="py-12 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="section-heading"><span className="text-foreground">Professional</span> <span className="text-orange">Journey</span></h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-orange to-gold rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative pl-8 md:pl-12">
          {/* Vertical Timeline Line on the Left */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange/50 via-gold/30 to-transparent rounded-full" />

          {experiences.map((exp, index) => (
            <div
              key={exp.company + exp.role}
              data-aos="fade-left"
              data-aos-delay={index * 100}
              className="relative mb-20 last:mb-0"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[37px] md:-left-[45px] top-6 w-10 h-10 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-background border-4 border-orange shadow-[0_0_10px_rgba(254,145,53,0.5)] z-20" />
                <div className="absolute w-12 h-1 bg-gradient-to-r from-orange/50 to-transparent left-4" />
              </div>

              <PremiumCard className="p-8 md:p-10 ml-8">
                {/* Header Information */}
                <div className="flex flex-col gap-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-foreground mb-2">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        <span className="flex items-center gap-2 bg-orange/10 text-orange border border-orange/20 px-3 py-1 rounded-full text-xs font-rajdhani font-bold">
                          <Building2 className="w-3.5 h-3.5" />
                          Client: {exp.client}
                        </span>
                        <span className="flex items-center gap-2 bg-gold/10 text-gold border border-gold/20 px-3 py-1 rounded-full text-xs font-rajdhani font-bold">
                          <Layers className="w-3.5 h-3.5" />
                          Project: {exp.project}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <h4 className="text-xl font-orbitron font-bold text-orange mb-2">{exp.company}</h4>
                      <div className="flex flex-wrap justify-end gap-3 text-sm font-rajdhani font-semibold text-muted-foreground">
                        <span className="flex items-center gap-1.5 ">
                          <MapPin className="w-4 h-4 text-orange" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-orange" />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Challenge & Impact Summary Box */}
                  <div className="grid md:grid-cols-2 gap-6 p-6 bg-muted/10 rounded-2xl border border-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange/5 to-transparent pointer-events-none" />

                    <div className="relative z-10">
                      <div className="flex items-center gap-2 text-orange mb-3">
                        <Target className="w-5 h-5" />
                        <span className="font-orbitron font-bold text-sm uppercase tracking-wider">The Challenge</span>
                      </div>
                      <p className="text-sm font-exo text-muted-foreground leading-relaxed">
                        {exp.challenge}
                      </p>
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-2 text-gold mb-3">
                        <Trophy className="w-5 h-5" />
                        <span className="font-orbitron font-bold text-sm uppercase tracking-wider">Key Impact</span>
                      </div>
                      <p className="text-sm font-exo text-muted-foreground leading-relaxed">
                        {exp.impact}
                      </p>
                    </div>
                  </div>

                  {/* Achievement Bullets */}
                  <div className="mt-4">
                    <ul className="grid md:grid-cols-1 gap-4">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3 group">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange mt-2 flex-shrink-0 transition-transform shadow-[0_0_8px_rgba(254,145,53,0.6)]" />
                          <span className="text-sm md:text-base font-exo text-muted-foreground leading-relaxed transition-colors">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-6 border-t border-white/5 flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-orange/5 border border-orange/10 text-orange/80 rounded-lg text-xs font-rajdhani font-bold transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </PremiumCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;