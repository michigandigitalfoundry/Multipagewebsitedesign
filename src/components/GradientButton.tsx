import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface GradientButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function GradientButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
}: GradientButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4',
  };

  if (variant === 'outline') {
    return (
      <motion.button
        onClick={onClick}
        className={`${sizeClasses[size]} rounded-lg border-2 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 hover:shadow-lg transition-all relative group overflow-hidden ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10 bg-white px-6 py-3 rounded-md block group-hover:bg-transparent group-hover:text-white transition-all">
          {children}
        </span>
      </motion.button>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={`${sizeClasses[size]} rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 text-white hover:shadow-lg transition-all relative overflow-hidden group ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"
        initial={false}
      />
    </motion.button>
  );
}
