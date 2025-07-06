import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"; // ✅ правильно
import { Mail, Lock, Eye, EyeOff, AlertCircle } from "lucide-react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Por favor completa todos los campos");
      return;
    }

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/admin");
    } catch (error) {
      console.error("Login error:", error);
      setError("Credenciales incorrectas. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        {/* Logo */}
        <div className="login-header">
          <div className="logo-container">
            <span className="logo-text">T</span>
          </div>
          <h1 className="login-title">Tabacos España</h1>
          <p className="login-subtitle">Acceso Administrativo</p>
        </div>

        {/* Login Form */}
        <div className="login-form-container">
          <form onSubmit={handleSubmit} className="login-form">
            {error && (
              <div className="error-message">
                <AlertCircle size={20} />
                <span className="error-text">{error}</span>
              </div>
            )}

            {/* Email Field */}
            <div className="form-field">
              <label htmlFor="email" className="form-label">
                Correo Electrónico
              </label>
              <div className="input-container">
                <Mail className="input-icon" size={20} />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                  placeholder="admin@tabacosespana.es"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="form-field">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <div className="input-container">
                <Lock className="input-icon" size={20} />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input password-input"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="password-toggle"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" disabled={loading} className="submit-button">
              {loading ? (
                <div className="loading-container">
                  <div className="loading-spinner"></div>
                  <span>Iniciando sesión...</span>
                </div>
              ) : (
                "Iniciar Sesión"
              )}
            </button>
          </form>

          {/* Back to Catalog */}
          <div className="back-link">
            <Link to="/" className="back-link-text">
              ← Volver al catálogo
            </Link>
          </div>
        </div>

        {/* Demo Credentials */}
        <div className="demo-credentials">
          <div className="demo-container">
            <h3 className="demo-title">Credenciales de Demo</h3>
            <p className="demo-text">
              Email: admin@tabacosespana.es
              <br />
              Contraseña: admin123
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
