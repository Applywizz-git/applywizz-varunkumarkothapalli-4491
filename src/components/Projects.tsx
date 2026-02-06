import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import PremiumCard from './ui/PremiumCard';

import projectDocAi from '@/assets/project-doc-ai.jpg';
import projectMlPipeline from '@/assets/project-ml-pipeline.jpg';

const projects = [
  {
    title: 'Generative AI-Powered Document Intelligence System',
    image: projectDocAi,
    description: [
      'Implemented Generative AI and Large Language Models (LLMs) to automate document understanding and summarization, enabling accurate extraction of contextual insights from unstructured enterprise documents.',
      'Response relevance and factual grounding improved by integrating Retrieval-Augmented Generation (RAG) with embedding models and vector search, ensuring LLM outputs referenced indexed enterprise data.',
      'Inference reliability at scale was achieved by serving models through FastAPI, containerizing with Docker, deploying on AWS and registering models via MLflow with SageMaker-compatible artifacts, enabling reproducible and versioned deployments.',
    ],
    techStack: ['Generative AI', 'LLMs', 'RAG', 'FastAPI', 'Docker', 'AWS', 'MLflow', 'SageMaker', 'Vector Search', 'Embeddings'],
  },
  {
    title: 'End-to-End Machine Learning Pipeline for Predictive Analytics',
    image: projectMlPipeline,
    description: [
      'Structured datasets were prepared for modeling by orchestrating data ingestion, feature engineering, and preprocessing pipelines using Python, SQL, and Apache Spark, supporting repeatable ML experimentation.',
      'Predictive performance was improved through training supervised machine learning models with Scikit-learn and PyTorch, applying cross-validation and hyperparameter optimization techniques.',
      'Production stability and transparency were maintained by deploying models with Docker and Kubernetes, while implementing model evaluation, explainability, and monitoring aligned with MLOps practices.',
    ],
    techStack: ['Python', 'SQL', 'Apache Spark', 'Scikit-learn', 'PyTorch', 'Docker', 'Kubernetes', 'MLOps', 'Feature Engineering'],
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section id="projects" className="py-12 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="section-heading"><span className="text-foreground">Featured</span> <span className="text-orange">Projects</span></h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-orange to-gold rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="h-full"
            >
              <PremiumCard className="h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden group">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </div>

                {/* Project Content */}
                <div className="p-8 md:p-10 flex-grow flex flex-col">
                  <h3 className="text-xl md:text-2xl font-orbitron font-bold text-foreground mb-4 cursor-default">
                    {project.title}
                  </h3>

                  <div className="space-y-3 mb-6 flex-grow">
                    {project.description.map((desc, i) => (
                      <p key={i} className="text-sm font-exo text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{desc}</span>
                      </p>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1 text-xs font-rajdhani font-semibold rounded-full bg-primary/10 text-primary border border-primary/30"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;