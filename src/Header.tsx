import './header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="no-domain-label">
            <img src="/openrleague-transparent.png" id="openr-logo" />
            <ul>
                <li><Link to="/main"><button>Main</button></Link></li>
                <li><Link to="/league"><button>League</button></Link></li>
                <li><Link to="/partners"><button>Partners</button></Link></li>
                <li><Link to="/sign-up"><button>Sign up</button></Link></li>
            </ul>
        </header>
    );
}
export default Header;