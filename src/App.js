// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';  // Vérifiez l'importation du composant Header
import Footer from './components/footer/Footer';  // Vérifiez l'importation du composant Footer
import Description from './pages/Description';
import Vision from './pages/Vision';
import Mission from './pages/Mission';
import Valeurs from './pages/Valeurs';
import Programme from './pages/Programme';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Description />} />
                    <Route path="/vision" element={<Vision />} />
                    <Route path="/mission" element={<Mission />} />
                    <Route path="/valeurs" element={<Valeurs />} />
                    <Route path="/programme" element={<Programme />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
