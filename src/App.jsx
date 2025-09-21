import "./css/App.css";
import Home from "./pages/Home";
import { MovieProvider } from "./contexts/MovieContext";
import Favorites from "./pages/favorites";
import Navbar from "./components/Navbar";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <MovieProvider>
      <Router>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </Router>
    </MovieProvider>
  );
}
export default App;