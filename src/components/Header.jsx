import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shield } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import "./Header.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Catálogo" },
    { path: "/about", label: "Sobre Nosotros" },
    { path: "/contact", label: "Contacto" },
  ];

  const isActive = (path) => location.pathname === path;

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-container">
          {/* Logo */}
          <Link to="/" className="logo">
            <div className="logo-icon">
              <span className="logo-text">T</span>
            </div>
            <div className="logo-info">
              <h1 className="logo-title">Tabacos</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${
                  isActive(item.path) ? "nav-link-active" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Auth buttons */}
          <div className="auth-section">
            {currentUser ? (
              <div className="auth-buttons">
                <Link to="/admin" className="btn-admin">
                  <Shield size={16} />
                  <span>Admin</span>
                </Link>
                <button onClick={handleLogout} className="btn-logout">
                  Cerrar Sesión
                </button>
              </div>
            ) : (
              <Link to="/login" className="btn-login">
                Iniciar Sesión
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-button"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-nav">
          <div className="mobile-nav-content">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`mobile-nav-link ${
                  isActive(item.path) ? "mobile-nav-link-active" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {currentUser ? (
              <>
                <Link
                  to="/admin"
                  className="mobile-btn-admin"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Shield size={16} />
                  <span>Admin</span>
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="mobile-btn-logout"
                >
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="mobile-btn-login"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Iniciar Sesión
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
