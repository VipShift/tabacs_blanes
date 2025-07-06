import { Leaf, Award, Truck, Users, Clock } from "lucide-react";
import "./About.css";

const About = () => {
  const features = [
    {
      icon: <Leaf className="feature-icon" />,
      title: "Productos Oficiales",
      description:
        "Todos los artículos provienen de distribuidores legales y regulados.",
    },
    {
      icon: <Award className="feature-icon" />,
      title: "Atención de Confianza",
      description: "Servicio amable y profesional con 4,8★ en Google.",
    },
    {
      icon: <Truck className="feature-icon" />,
      title: "Ubicación Céntrica",
      description: "Estamos en el centro de Blanes, cerca de todo.",
    },
    {
      icon: <Users className="feature-icon" />,
      title: "Clientes Recurrentes",
      description: "Más de 20 años sirviendo a vecinos y turistas.",
    },
  ];

  const stats = [
    { number: "2003", label: "Año de Apertura" },
    { number: "4,8 ★", label: "Valoración en Google" },
    { number: "21+", label: "Opiniones Positivas" },
    { number: "100%", label: "Legal y Certificado" },
  ];

  return (
    <div className="about-container">
      <div className="about-content">
        {/* Hero Section */}
        <div className="hero-section">
          <h1 className="hero-title">Sobre Estanc Roca</h1>
          <p className="hero-subtitle">
            En Estanc Roca, ofrecemos productos oficiales de tabaco, puros,
            papel, mecheros y más. Estamos ubicados en Carrer de la Muralla, 46
            — el corazón de Blanes. Más de 20 años de experiencia, con atención
            amable, confianza y productos regulados por el Estado.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-container">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <h2 className="stats-title">Nuestros Datos</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="story-section">
          <div className="story-content">
            <h2 className="story-title">Nuestra Historia</h2>
            <div className="story-text">
              <p>
                Fundado en 2003, Estanc Roca ha sido un referente en Blanes por
                su trato cercano y su compromiso con la calidad. Inició como un
                pequeño estanco familiar y ha crecido gracias a la fidelidad de
                sus clientes.
              </p>
              <p>
                Con más de 20 años de servicio, mantenemos una oferta variada de
                tabacos, accesorios y artículos de fumador. Atendemos en
                español, catalán, ruso y ucraniano.
              </p>
              <p>
                Nuestro objetivo: cercanía, honestidad y cumplimiento con la
                normativa vigente.
              </p>
            </div>
          </div>

          <div className="hours-card">
            <div className="hours-content">
              <div className="hours-header">
                <Clock className="hours-icon" />
                <h3 className="hours-title">Horario Comercial</h3>
              </div>
              <div className="hours-schedule">
                <p>
                  <strong>Lunes - Viernes:</strong> 09:00 - 20:00
                </p>
                <p>
                  <strong>Sábados:</strong> 10:00 - 18:00
                </p>
                <p>
                  <strong>Domingos:</strong> Cerrado
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="values-section">
          <h2 className="values-title">Nuestros Valores</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon-container">
                <Leaf className="value-icon" />
              </div>
              <h3 className="value-name">Legalidad</h3>
              <p className="value-description">
                Cumplimos con todas las normativas del estanco estatal español.
              </p>
            </div>

            <div className="value-item">
              <div className="value-icon-container">
                <Award className="value-icon" />
              </div>
              <h3 className="value-name">Calidad</h3>
              <p className="value-description">
                Selección de productos premium y servicio cercano al cliente.
              </p>
            </div>

            <div className="value-item">
              <div className="value-icon-container">
                <Users className="value-icon" />
              </div>
              <h3 className="value-name">Confianza</h3>
              <p className="value-description">
                Más de dos décadas sirviendo con honestidad a la comunidad local
                y turistas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
