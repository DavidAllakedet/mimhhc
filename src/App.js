// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Description from './pages/Description';
import Vision from './pages/Vision';
import Mission from './pages/Mission';
import Valeurs from './pages/Valeurs';
import Programme from './pages/Programme';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><a href="/">Description</a></li>
                        <li><a href="/vision">Vision</a></li>
                        <li><a href="/mission">Mission</a></li>
                        <li><a href="/valeurs">Valeurs</a></li>
                        <li><a href="/programme">Programme</a></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Description />} />
                    <Route path="/vision" element={<Vision />} />
                    <Route path="/mission" element={<Mission />} />
                    <Route path="/valeurs" element={<Valeurs />} />
                    <Route path="/programme" element={<Programme />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
