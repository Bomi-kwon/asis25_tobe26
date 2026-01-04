import { motion } from 'framer-motion';
import ThoughtBubble from './ThoughtBubble';
import thoughtsJson from '../data/thoughts.json';

// SVG path 데이터 (5개 영역)
const pathData = [
  {
    id: 'thought-1',
    path: 'M 180 80 Q 200 60 230 70 Q 260 80 270 110 Q 275 140 250 150 Q 220 160 190 140 Q 165 120 180 80',
    floatDelay: 0,
  },
  {
    id: 'thought-2',
    path: 'M 280 90 Q 320 75 350 95 Q 375 120 365 155 Q 350 180 310 175 Q 270 170 265 135 Q 260 100 280 90',
    floatDelay: 0.5,
  },
  {
    id: 'thought-3',
    path: 'M 150 140 Q 140 110 165 90 Q 195 75 215 100 Q 230 130 220 165 Q 205 200 175 195 Q 145 185 150 140',
    floatDelay: 1,
  },
  {
    id: 'thought-4',
    path: 'M 230 160 Q 270 150 310 165 Q 340 185 330 220 Q 315 250 270 245 Q 225 240 215 205 Q 205 175 230 160',
    floatDelay: 1.5,
  },
  {
    id: 'thought-5',
    path: 'M 290 230 Q 330 220 360 245 Q 385 275 370 310 Q 350 340 310 335 Q 270 325 265 290 Q 260 255 290 230',
    floatDelay: 2,
  },
];

// JSON 데이터와 path 데이터 병합
const thoughtsData = thoughtsJson.thoughts.map((thought, index) => ({
  ...thought,
  ...pathData[index],
}));

const HeadSilhouette = ({ onThoughtClick }) => {
  // 사람 옆모습 실루엣 path (왼쪽을 바라보는 형태)
  const headPath = `
    M 420 380
    Q 430 350 425 320
    Q 420 290 410 270
    Q 400 250 395 230
    Q 390 200 400 170
    Q 415 130 400 90
    Q 380 50 330 35
    Q 280 20 220 30
    Q 160 40 120 80
    Q 85 120 80 170
    Q 75 220 95 260
    Q 110 290 100 310
    Q 85 330 75 350
    Q 70 365 80 380
    Q 95 400 120 395
    Q 140 390 145 370
    Q 150 350 165 340
    Q 185 330 200 340
    Q 210 350 200 370
    Q 190 390 180 420
    Q 175 450 190 470
    L 220 470
    Q 230 450 240 440
    Q 260 430 280 440
    Q 300 450 310 470
    L 340 470
    Q 350 450 360 430
    Q 380 410 400 400
    Q 420 395 420 380
    Z
  `;

  // 귀 path
  const earPath = `
    M 410 230
    Q 430 225 440 245
    Q 450 270 440 290
    Q 430 305 410 300
    Q 400 285 405 260
    Q 408 240 410 230
    Z
  `;

  return (
    <motion.svg
      viewBox="0 0 500 500"
      width="100%"
      height="100%"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* 배경 그라데이션 정의 */}
      <defs>
        <linearGradient id="headGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2c3e50" />
          <stop offset="100%" stopColor="#1a252f" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* 머리 실루엣 */}
      <motion.path
        d={headPath}
        fill="url(#headGradient)"
        stroke="#3d5a73"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      {/* 귀 */}
      <motion.path
        d={earPath}
        fill="url(#headGradient)"
        stroke="#3d5a73"
        strokeWidth="2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      />

      {/* 생각 영역들 */}
      {thoughtsData.map((thought) => (
        <ThoughtBubble
          key={thought.id}
          id={thought.id}
          path={thought.path}
          color={thought.color}
          label={thought.label}
          floatDelay={thought.floatDelay}
          onClick={() => onThoughtClick(thought)}
        />
      ))}
    </motion.svg>
  );
};

export default HeadSilhouette;
