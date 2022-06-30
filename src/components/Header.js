import SettingsIcon from '@mui/icons-material/Settings';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to="/" data-testid="backBtn" className="header page-t">
        <ArrowBackIcon className="back-i" fontSize="large" />
        {window.location.pathname === '/' && <Typography variant="h3" component="h1">Stock Market</Typography>}
        {window.location.pathname === '/details' && <p>Stock Market</p>}
        <SettingsIcon className="SettingsIcon" fontSize="large" />
      </Link>
    </header>
  );
}
