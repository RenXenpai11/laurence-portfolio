import { motion } from 'motion/react';

export function Logo() {
  return (
    <motion.svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
    >
      <defs>
        <linearGradient id="logoGrad1" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00d9ff" />
          <stop offset="100%" stopColor="#ff6b6b" />
        </linearGradient>
        <linearGradient id="logoGrad2" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00d9ff" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ff6b6b" stopOpacity="0.1" />
        </linearGradient>
        <filter id="logoGlow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer hexagon - animated draw-in */}
      <motion.polygon
        points="22,2 38,11 38,33 22,42 6,33 6,11"
        stroke="url(#logoGrad1)"
        strokeWidth="1.8"
        fill="url(#logoGrad2)"
        filter="url(#logoGlow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: 'easeInOut' }}
      />

      {/* Inner hexagon */}
      <motion.polygon
        points="22,10 31,15.5 31,28.5 22,34 13,28.5 13,15.5"
        stroke="url(#logoGrad1)"
        strokeWidth="1"
        fill="none"
        strokeOpacity="0.5"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        style={{ transformOrigin: '22px 22px' }}
      />

      {/* Diagonal accent line - top-left to bottom-right */}
      <motion.line
        x1="10" y1="14"
        x2="34" y2="30"
        stroke="#00d9ff"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.9 }}
        transition={{ duration: 0.7, delay: 1.2 }}
      />

      {/* Diagonal accent line - top-right to bottom-left */}
      <motion.line
        x1="34" y1="14"
        x2="10" y2="30"
        stroke="#ff6b6b"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.9 }}
        transition={{ duration: 0.7, delay: 1.4 }}
      />

      {/* Center glowing dot */}
      <motion.circle
        cx="22"
        cy="22"
        r="3.5"
        fill="#00d9ff"
        filter="url(#logoGlow)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.6, type: 'spring', stiffness: 300 }}
      />

      {/* Pulsing ring around center */}
      <motion.circle
        cx="22"
        cy="22"
        r="3.5"
        stroke="#00d9ff"
        strokeWidth="1"
        fill="none"
        animate={{ r: [3.5, 7, 3.5], opacity: [0.8, 0, 0.8] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', delay: 2 }}
      />
    </motion.svg>
  );
}
