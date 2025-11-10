
import './styles.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Contract from './Contract.jsx'
import Introduction from './Introduction.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {useEffect} from "react";

function HomePage() {
    useEffect(() => {
        document.title = "Aidan McLain's Ambitious Monkey | ITIS3135 | Home";
    }, []);

    return (
        <main>
            <h2>Home</h2>
            <p>Hello, this is the home page for Aidan McLain's ITIS-3135 course. Here you can find links to my other page.</p>
        </main>
    );
}

function App() {

    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contract" element={<Contract />} />
                <Route path="/introduction" element={<Introduction />} />
            </Routes>
            <Footer/>
        </Router>
    )
}

export default App
