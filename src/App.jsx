import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProfilePage from './pages/ProfilePage';
import canchas from './json/canchas.json';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/canchas/:nombre" element={<ProfilePage canchas={canchas} />} />
    </Routes>
  );
}

export default App;
