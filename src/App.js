import './normalize.css';
import  './styles.css';
import { Header } from './components/header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Skills } from './components/skills';
import { Home } from './components/homepage/index';
import { Projects } from './components/projects';
import { Footer } from './components/footer';
import { SoftSkills } from './components/softSkills';

function App() {
    return (
        <Router>
            <Header />
            <div className="container">
                <Routes >
                  <Route exact path="/" element={<Home />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/soft-skills" element={<SoftSkills />} />
                  <Route path="/projects" element={<Projects />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
