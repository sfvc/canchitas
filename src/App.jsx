import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DeportePage from './pages/DeportePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/deportes/:url" element={<DeportePage />} />
    </Routes>
  );
}

export default App;
