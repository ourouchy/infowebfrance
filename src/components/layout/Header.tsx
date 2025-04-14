import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const location = useLocation();
const navigate = useNavigate();

function handleAnchorClick(anchor: string) {
  if (location.pathname !== "/") {
    navigate(`/#${anchor}`);
    setTimeout(() => {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // tiny delay to wait for page render
  } else {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  setIsMobileMenuOpen(false);
}

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-custom flex h-20 items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="block">
          <img
                src="/images/logoinfo.png"
                alt="Étudiant"
                className="h-5 w-100"
              />
          </Link>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link to="/formations" className="text-primary hover:text-secondary">
                Formations
              </Link>
            </li>
            <li>
            <Link to="/pourquoi-nous" className="text-primary hover:text-secondary">
                Pourquoi nous
              </Link>
            </li>
            <li>
            <Link to="/financement" className="text-primary hover:text-secondary">
                Financement
              </Link>
            </li>
            
          </ul>
        </nav>

        {/* CTA Buttons - Desktop */}
        <div className="hidden items-center space-x-4 md:flex">
        <a href="/contact" className="btn-primary">
            Prendre RDV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-primary hover:bg-light-bg md:hidden"
          onClick={toggleMobileMenu}
        >
          <span className="sr-only">Ouvrir le menu</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="container-custom px-2 pb-4 pt-2">
            <nav>
              <ul className="space-y-2">
              <li>
                  <Link
                    to="/"
                    className="block rounded-md px-3 py-2 text-primary hover:bg-light-bg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Acceuil
                  </Link>
                </li>
                <li>
                  <Link
                    to="/formations"
                    className="block rounded-md px-3 py-2 text-primary hover:bg-light-bg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Formations
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      window.location.href = "/pourquoi-nous";
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full rounded-md px-3 py-2 text-left text-primary hover:bg-light-bg"
                  >
                    Pourquoi nous
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      window.location.href = "/Financement";
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full rounded-md px-3 py-2 text-left text-primary hover:bg-light-bg"
                  >
                    Financement
                  </button>
                </li>
                

              </ul>
              <div className="mt-4 flex flex-col space-y-2">
                
                <a href="/contact" className="btn-primary w-full text-center">
                  Prendre RDV
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
