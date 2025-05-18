import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TargetShootAnimationProps {
  title?: string;
  subtitle?: string;
}

export const TargetShootAnimation: React.FC<TargetShootAnimationProps> = ({ 
  title = "Strategic Growth", 
  subtitle = "Hitting Our Targets" 
}) => {
  const [shotsCount, setShotsCount] = useState(0);

  const targetVariants = {
    initial: { scale: 1, opacity: 0.6 },
    hit: { 
      scale: 1.2, 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const projectileVariants = {
    initial: { 
      x: 0, 
      y: 0, 
      opacity: 0 
    },
    shoot: { 
      x: ['0%', '80%'],
      y: [0, -10, 0],
      opacity: [1, 1, 0],
      transition: { 
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  const handleShoot = () => {
    setShotsCount(prev => prev + 1);
  };

  return (
    <div className="flex items-center justify-center min-h-[400px] bg-gray-100 p-8 rounded-lg">
      <div className="flex space-x-8 items-center w-full justify-between">
        {/* Shooter Side (Left) - Gun */}
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img 
            src="/logo/gun.svg"
            alt="Gun"
            className="w-48 h-48"
            whileHover={{ scale: 1.1 }}
            onClick={handleShoot}
          />
          <p className="mt-4 text-sm text-gray-600">Click to Shoot</p>
        </motion.div>

        {/* Projectile - Bullet */}
        <AnimatePresence>
          {shotsCount > 0 && (
            <motion.img
              key={`bullet-${shotsCount}`}
              src="/logo/bullet.svg"
              alt="Bullet"
              className="absolute w-12 h-12"
              variants={projectileVariants}
              initial="initial"
              animate="shoot"
            />
          )}
        </AnimatePresence>

        {/* Target Side (Right) */}
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="w-64 h-64 bg-white border-4 border-gray-300 rounded-full flex items-center justify-center"
            variants={targetVariants}
            initial="initial"
            animate={shotsCount > 0 ? "hit" : "initial"}
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
              <p className="text-lg text-gray-600">{subtitle}</p>
              <p className="text-sm text-gray-500 mt-2">Shots Fired: {shotsCount}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
