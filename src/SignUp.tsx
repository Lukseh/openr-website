import './pages.css';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <main className="no-domain-label">
      <p id="page-title">Signing up for Season 1 starts soon!</p>
      <div id="signup">
        {/* <p>To sign up for OpenR League please visit our partners site <a target="_blank" rel="noopener noreferrer" href="https://www.cs2tournament.com/tournament/openr-season-0/">here</a></p> */}
        <p>In the meantime check out <Link to="/league">League</Link> tab or our <Link to="/partners">Partners</Link></p>
      </div>
    </main>
  );
}
export default SignUp;
