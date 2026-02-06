import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PremiumCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    glowColor?: string;
}

const PremiumCard = ({ children, className, glowColor = 'hsl(var(--orange))', ...props }: PremiumCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);

    // Motion values for tilt
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth springs for tilt
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    // Transform motion values to rotation and parallax
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

    // Parallax transform for inner content
    const contentX = useTransform(mouseXSpring, [-0.5, 0.5], ['-10px', '10px']);
    const contentY = useTransform(mouseYSpring, [-0.5, 0.5], ['-10px', '10px']);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        const xPct = (mouseX / width) - 0.5;
        const yPct = (mouseY / height) - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div
            className="relative group perspective-1000 w-full h-full"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            <motion.div
                ref={cardRef}
                whileHover={{
                    boxShadow: `0 8px 32px hsl(var(--glass-shadow)), inset 0 1px 0 hsl(var(--glass-border)), 0 0 40px 2px ${glowColor.replace(')', ' / 0.4)')}`,
                }}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: 'preserve-3d',
                }}
                className={cn(
                    "relative rounded-2xl",
                    "glass-card transition-all duration-300 !overflow-visible",
                    "border border-white/10 group-hover:border-primary/50",
                    "w-full h-full",
                    className
                )}
            >
                {/* Inner Content with Parallax */}
                <motion.div
                    style={{
                        x: contentX,
                        y: contentY,
                        transformStyle: 'preserve-3d',
                        translateZ: '20px'
                    }}
                    className="relative z-10 w-full h-full"
                >
                    {children}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default PremiumCard;
