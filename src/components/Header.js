import { Link } from 'react-router-dom';
import backIcon from '../assets/ic_arrow_back.png';
import settingsIcon from '../assets/settings.png';

export default function Header() {
  return (
    <header>
      <Link to="/" className="header page-t">
        <img className="back-i" src={backIcon} alt="Back" />
        {window.location.pathname === '/' && <p>Stock Market</p>}
        <img className="settings-i" src={settingsIcon} alt="Setting" />
      </Link>
    </header>
  );
}
