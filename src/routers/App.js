import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Buscar from '../components/Buscar';
import Navbar from "../components/Navbar";
import Personajes from '../components/Personajes';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Personajes />} />
        <Route exact path="/buscar" element={<Buscar />} />
      </Routes>
    </Router>
  );
}

export default App;
