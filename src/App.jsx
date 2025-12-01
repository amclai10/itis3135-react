
import './styles.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Contract from './Contract.jsx'
import Introduction from './Introduction.jsx'
import Home from './Home.jsx'
import ClassIntros from './StudentIntroductions.jsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contract" element={<Contract />} />
                <Route path="/introduction" element={<Introduction />} />
                <Route path="/classintros" element={<ClassIntros />} />
            </Routes>
            <Footer/>
        </Router>
    )
}

export default App
