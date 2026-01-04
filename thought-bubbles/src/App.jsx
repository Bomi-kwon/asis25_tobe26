import { useState } from 'react';
import HeadSilhouette from './components/HeadSilhouette';
import ThoughtDialog from './components/ThoughtDialog';
import './App.css';

function App() {
  const [selectedThought, setSelectedThought] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleThoughtClick = (thought) => {
    setSelectedThought(thought);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>인사이드 보미</h1>
        <p className="subtitle">각 영역을 클릭해보세요</p>
      </header>

      <main className="main-content">
        <div className="silhouette-container">
          <HeadSilhouette onThoughtClick={handleThoughtClick} />
        </div>
      </main>

      <footer className="footer">
        <p>25년과 26년</p>
      </footer>

      <ThoughtDialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        thought={selectedThought}
      />
    </div>
  );
}

export default App;
