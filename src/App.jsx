import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SplashScreen from './pages/SplashScreen';
import LoginScreen from './pages/LoginScreen';
import PrimarySportScreen from './pages/PrimarySportScreen';
import SecondarySportsScreen from './pages/SecondarySportsScreen';
import HomeScreen from './pages/HomeScreen';
import PlayScreen from './pages/PlayScreen';
import PostSessionScreen from './pages/PostSessionScreen';
import ProfileScreen from './pages/ProfileScreen';
import PoolsScreen from './pages/PoolsScreen';
import EarnScreen from './pages/EarnScreen';
import ChallengeFriendScreen from './pages/ChallengeFriendScreen';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/onboarding/primary" element={<PrimarySportScreen />} />
        <Route path="/onboarding/secondary" element={<SecondarySportsScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/play" element={<PlayScreen />} />
        <Route path="/post-session" element={<PostSessionScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/pools" element={<PoolsScreen />} />
        <Route path="/earn" element={<EarnScreen />} />
        <Route path="/challenge" element={<ChallengeFriendScreen />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
