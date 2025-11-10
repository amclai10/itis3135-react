import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <h1>Aidan McLain's Ambitious Monkey - ITIC3135</h1>

            <ul className="header-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contract">Contract</Link></li>
                <li><Link to="/introduction">Introduction</Link></li>
            </ul>
        </header>
    );
}