import './header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="no-domain-label">
            <img src="/openrleague-transparent.png" id="openr-logo" />
            <ul>
                <li><Link to="/main"><button>MAIN</button></Link></li>
                <li><Link to="/league"><button>LEAGUE</button></Link></li>
                <li><Link to="/partners"><button>PARTNERS</button></Link></li>
                <li><Link to="/sign-up"><button>SIGN UP</button></Link></li>
            </ul>
        </header>
    );
}
export default Header;