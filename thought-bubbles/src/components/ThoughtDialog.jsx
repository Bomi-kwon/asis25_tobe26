import { motion, AnimatePresence } from 'framer-motion';
import './ThoughtDialog.css';

const ThoughtDialog = ({ isOpen, onClose, thought }) => {
  if (!thought) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="dialog-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className="dialog-container"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <button className="dialog-close" onClick={onClose}>
              ×
            </button>

            <h2 className="dialog-title" style={{ color: thought.color }}>
              {thought.label}
            </h2>

            <div className="dialog-content">
              {/* 2025년 섹션 */}
              <div className="year-section year-2025">
                <h3 className="year-title">2025</h3>
                <div className="year-content">
                  {thought.year2025.image && (
                    <div className="image-container">
                      <img
                        src={thought.year2025.image}
                        alt={thought.year2025.title}
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  <p className="year-text">{thought.year2025.text}</p>
                </div>
              </div>

              {/* 구분선 */}
              <div className="divider" />

              {/* 2026년 섹션 */}
              <div className="year-section year-2026">
                <h3 className="year-title">2026</h3>
                <div className="year-content">
                  {thought.year2026.image && (
                    <div className="image-container">
                      <img
                        src={thought.year2026.image}
                        alt={thought.year2026.title}
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  <p className="year-text">{thought.year2026.text}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ThoughtDialog;
