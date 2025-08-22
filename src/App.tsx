import './App.css';
import Header from './Header';
import { Routes, Route } from 'react-router-dom';
import Main from './MainPage';
import League from './League';
import Partners from './Partners';
import SignUp from './SignUp';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelectorAll('a[href]').forEach(a => {
      if (!a.closest('.no-domain-label')) {
        const anchor = a as HTMLAnchorElement;
        try {
          const url = new URL(anchor.href);
          anchor.setAttribute('data-domain', url.hostname);
        } catch {
          // ignore invalid URLs
        }
      } else {
        a.removeAttribute('data-domain');
      }
    });
  }, [location]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/league" element={<League />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<Main />} />
      </Routes>
      </>
  );
}

export default App;