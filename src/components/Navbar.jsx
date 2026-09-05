import { navLinks } from '../data/content.js';

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="wrap navin">
        <a className="brand" href="#top">
          <span className="mark" />
          arbaj.dev
        </a>
        <div className="navlinks">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
