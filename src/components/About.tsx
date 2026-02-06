import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Brain, Sparkles, MessageSquare, Cloud, Workflow, Database, Target, Trophy, Zap, ChevronRight, Binary } from 'lucide-react';
import PremiumCard from './ui/PremiumCard';

const expertiseAreas = [
  {
    icon: Brain,
    title: 'AI & ML',
    description: 'Deep Learning, Supervised & Unsupervised Learning, Feature Engineering, Model Training & Evaluation, Hyperparameter Optimization',
  },
  {
    icon: Sparkles,
    title: 'Generative AI & LLMs',
    description: 'Large Language Models, Transformer Architectures, Prompt Engineering, Fine-Tuning (LoRA, PEFT), RAG, Embeddings, Vector Search',
  },
  {
    icon: MessageSquare,
    title: 'NLP',
    description: 'Text Classification, Named Entity Recognition, Sentiment Analysis, Text Summarization, Semantic Search, Tokenization',
  },
  {
    icon: Workflow,
    title: 'MLOps',
    description: 'MLflow, Model Versioning, Deployment, Monitoring, Data Drift Detection, RESTful APIs, FastAPI, Flask',
  },
  {
    icon: Cloud,
    title: 'Cloud & Containers',
    description: 'AWS (SageMaker, EC2, S3, RDS), Azure Machine Learning, Docker, Kubernetes',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'ETL Pipelines, Feature Pipelines, Apache Spark, Data Warehousing, PostgreSQL, MySQL, Oracle, SQL Server',
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <section id="about" className="py-12 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="section-heading"><span className="text-foreground">About</span> <span className="text-orange">Me</span></h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-orange to-gold rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Left Column: Summary & Focus */}
          <div data-aos="fade-right">
            <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-foreground mb-6">
              AI / Machine Learning <span className="text-orange">Specialist</span>
            </h3>
            <div className="w-20 h-1 bg-gold mb-8 rounded-full" />

            <div className="space-y-6 text-lg font-exo text-muted-foreground leading-relaxed mb-12">
              <p>
                AI / Machine Learning Engineer with <span className="text-orange font-bold">5+ years of experience</span> designing, building, and operating production-ready machine learning systems across enterprise environments.
              </p>
              <p>
                Hands-on expertise in <span className="text-foreground font-semibold">Azure Data Factory, Azure Synapse Analytics, AWS SageMaker</span>, and scalable lakehouse architectures. Strong collaborator who translates business and analytics requirements into optimized ML-based solutions, improving model quality, performance, and accessibility for reporting and decision-making.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="mt-1">
                  <div className="w-3 h-3 rounded-full bg-orange shadow-[0_0_8px_rgba(254,145,53,0.6)]" />
                </div>
                <div>
                  <h4 className="text-xl font-orbitron font-bold text-orange mb-2">MLOps & Production Systems</h4>
                  <p className="text-muted-foreground font-exo">
                    Expertise in designing and implementing scalable ML solutions on Microsoft Azure and AWS, leveraging modern cloud services for enterprise-grade workloads.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1">
                  <div className="w-3 h-3 rounded-full bg-gold shadow-[0_0_8px_rgba(251,194,70,0.6)]" />
                </div>
                <div>
                  <h4 className="text-xl font-orbitron font-bold text-gold mb-2">Generative AI & NLP</h4>
                  <p className="text-muted-foreground font-exo">
                    Proven track record in building robust Generative AI solutions using LLMs and RAG, reducing manual effort through intelligent automation and document review strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Achievements & Focus Cards */}
          <div className="space-y-8" data-aos="fade-left">
            {/* Key Achievements Card */}
            <PremiumCard className="p-8 md:p-10 !bg-card/30 backdrop-blur-xl border-white/5">
              <h4 className="text-xl font-orbitron font-bold mb-6 flex items-center gap-3">
                <Trophy className="w-5 h-5 text-orange" />
                <span className="text-foreground">Key</span> <span className="text-orange">Achievements</span>
              </h4>
              <ul className="space-y-4">
                {[
                  { text: "Reduced model build cycles by", highlight: "~30%", suffix: "through optimized pipelines" },
                  { text: "Improved model accuracy & recall by", highlight: "18-22%", suffix: "using disciplined tuning" },
                  { text: "Decreased unexpected degradation by", highlight: "~25%", suffix: "with drift detection" },
                  { text: "Increased process efficiency by", highlight: "~35%", suffix: "via Generative AI" },
                  { text: "Managed high-performance datasets supporting", highlight: "3000+", suffix: "retail locations" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group text-muted-foreground font-exo">
                    <ChevronRight className="w-4 h-4 text-gold mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                    <p className="text-sm md:text-base leading-relaxed">
                      {item.text} <span className="text-foreground font-bold">{item.highlight}</span> {item.suffix}
                    </p>
                  </li>
                ))}
              </ul>
            </PremiumCard>

            {/* Current Focus Card */}
            <PremiumCard className="p-8 md:p-10 !bg-card/30 backdrop-blur-xl border-white/5">
              <h4 className="text-xl font-orbitron font-bold mb-6 flex items-center gap-3">
                <Target className="w-5 h-5 text-orange" />
                <span className="text-foreground">Current</span> <span className="text-orange">Focus</span>
              </h4>
              <ul className="space-y-4">
                {[
                  "Production-Ready ML Systems & MLOps",
                  "Generative AI & RAG Optimization",
                  "Advanced NLP & Transformer Architectures",
                  "Scalable Feature Engineering & ETL",
                  "Cloud Data Platform Optimization"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 group text-muted-foreground font-exo">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange/50 transition-colors" />
                    <span className="text-sm md:text-base transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </PremiumCard>
          </div>
        </div>
        {/* Core Expertise Section */}
        <div className="mt-24" data-aos="fade-up">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-orbitron font-bold mb-4">
              <span className="text-foreground">Core</span> <span className="text-orange">Expertise</span>
            </h3>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-orange to-gold rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {expertiseAreas.map((area, index) => (
              <PremiumCard
                key={area.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="p-8 cursor-pointer group h-full"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange to-gold flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(254,145,53,0.3)]"
                >
                  <area.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h4 className="text-xl font-orbitron font-semibold text-foreground mb-4 transition-colors">
                  {area.title}
                </h4>
                <p className="text-sm font-exo text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;