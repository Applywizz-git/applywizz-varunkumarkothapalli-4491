import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Eye, Brain, Cpu, Database, Code, Zap } from 'lucide-react';
import { Link } from 'react-scroll';


const typewriterTexts = [
  'AI',
  'Machine Learning',
  'Generative AI',
  'NLP',
  'MLOps',
];

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = typewriterTexts[currentTextIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentWord.length) {
            setDisplayText(currentWord.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(currentWord.slice(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl font-rajdhani text-muted-foreground mb-2"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-4"
            >
              <span className="text-foreground">Varun Kumar</span>
              <br />
              <span className="text-orange">Kothapalli</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-2xl md:text-3xl font-rajdhani font-semibold text-primary mb-6"
            >
              AI / Machine Learning Engineer
            </motion.h2>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <span className="text-xl md:text-2xl font-exo text-muted-foreground">
                Specializing in{' '}
              </span>
              <span className="text-xl md:text-2xl font-orbitron font-bold gradient-text">
                {displayText}
                <span className="inline-block w-0.5 h-6 md:h-8 bg-primary ml-1 animate-blink" />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg font-exo text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8"
            >
              AI / Machine Learning Engineer with 5+ years of experience
              designing, building, and operating production-ready machine
              learning systems across enterprise environments.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-hero w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <Eye className="w-5 h-5" />
                  <span>View Projects</span>
                </motion.button>
              </Link>

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline-hero flex items-center justify-center gap-2"
              >
                <FileText className="w-5 h-5" />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center order-1 lg:order-2"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              {/* Glow Ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary via-accent to-secondary opacity-50 blur-xl animate-pulse" />

              {/* Profile Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glass-card glow-border p-2">
                <img
                  src="/image.png"
                  alt="Varun Kumar Kothapalli"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Floating Tech Badges */}
              {[
                { Icon: Brain, color: 'text-orange', delay: 0, top: '10%', left: '-12%' },
                { Icon: Cpu, color: 'text-gold-highlight', delay: 1, bottom: '15%', right: '-10%' },
                { Icon: Database, color: 'text-orange', delay: 2, top: '45%', right: '-18%' },
                { Icon: Code, color: 'text-orange', delay: 3, bottom: '5%', left: '0%' },
                { Icon: Zap, color: 'text-gold-highlight', delay: 4, top: '-5%', right: '15%' },
              ].map((badge, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -15, 0],
                    x: [0, 8, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: badge.delay,
                    ease: "easeInOut"
                  }}
                  style={{
                    position: 'absolute',
                    top: badge.top,
                    bottom: badge.bottom,
                    left: badge.left,
                    right: badge.right,
                  }}
                  className="z-20 p-2"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl glass-card flex items-center justify-center shadow-xl backdrop-blur-xl border-white/10">
                    <badge.Icon className={`w-6 h-6 md:w-7 md:h-7 ${badge.color === 'text-gold-highlight' ? 'text-gold' : 'text-orange'}`} />
                  </div>
                </motion.div>
              ))}

              {/* Enhanced Rotating Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-10 border border-orange/15 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-20 border border-white/5 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="cursor-pointer"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-sm font-rajdhani">Scroll Down</span>
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;