import { Leaf, Award, Truck, Users, Clock, MapPin } from "lucide-react";
import "./About.css";

const About = () => {
  const features = [
    {
      icon: <Leaf className="feature-icon" />,
      title: "100% Natural",
      description: "Tabaco cultivado sin químicos ni aditivos artificiales",
    },
    {
      icon: <Award className="feature-icon" />,
      title: "Calidad Premium",
      description: "Los mejores productos seleccionados cuidadosamente",
    },
    {
      icon: <Truck className="feature-icon" />,
      title: "Envío Rápido",
      description: "Entrega en 24-48 horas en toda España",
    },
    {
      icon: <Users className="feature-icon" />,
      title: "Atención Personalizada",
      description: "Servicio al cliente excepcional",
    },
  ];

  const stats = [
    { number: "1985", label: "Año de Fundación" },
    { number: "10,000+", label: "Clientes Satisfechos" },
    { number: "500+", label: "Productos Premium" },
    { number: "24/7", label: "Soporte Disponible" },
  ];

  return (
    <div className="about-container">
      <div className="about-content">
        {/* Hero Section */}
        <div className="hero-section">
          <h1 className="hero-title">Sobre Tabacos España</h1>
          <p className="hero-subtitle">
            Desde 1985, hemos sido los guardianes de la tradición tabacalera
            española. Nuestros productos son seleccionados cuidadosamente de las
            mejores regiones productoras de España y el mundo.
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
          <h2 className="stats-title">Nuestros Números</h2>
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
                Fundada en 1985 en el corazón de Madrid, Tabacos España nació de
                la pasión por la tradición tabacalera y el compromiso con la
                calidad. Nuestro fundador, Don Carlos Rodríguez, comenzó con una
                pequeña tienda en la Calle Mayor, trayendo los mejores tabacos
                de Cuba y las regiones productoras de España.
              </p>
              <p>
                A lo largo de más de tres décadas, hemos mantenido los mismos
                valores de excelencia y atención al detalle que nos
                caracterizaron desde el primer día. Cada producto en nuestro
                catálogo ha sido cuidadosamente seleccionado para ofrecer la
                mejor experiencia a nuestros clientes.
              </p>
              <p>
                Hoy, seguimos siendo una empresa familiar que combina la
                tradición con la innovación, ofreciendo no solo productos de la
                más alta calidad, sino también un servicio personalizado que
                hace que cada visita sea especial.
              </p>
            </div>
          </div>

          <div className="hours-card">
            <div className="hours-content">
              <div className="hours-header">
                <Clock className="hours-icon" />
                <h3 className="hours-title">Horario de Atención</h3>
              </div>
              <div className="hours-schedule">
                <p>
                  <strong>Lunes - Viernes:</strong> 9:00 - 20:00
                </p>
                <p>
                  <strong>Sábados:</strong> 10:00 - 18:00
                </p>
                <p>
                  <strong>Domingos:</strong> 12:00 - 16:00
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
              <h3 className="value-name">Tradición</h3>
              <p className="value-description">
                Respetamos y mantenemos las tradiciones centenarias de la
                tabacalera española
              </p>
            </div>

            <div className="value-item">
              <div className="value-icon-container">
                <Award className="value-icon" />
              </div>
              <h3 className="value-name">Calidad</h3>
              <p className="value-description">
                Solo ofrecemos productos de la más alta calidad, probados y
                verificados
              </p>
            </div>

            <div className="value-item">
              <div className="value-icon-container">
                <Users className="value-icon" />
              </div>
              <h3 className="value-name">Cliente</h3>
              <p className="value-description">
                Nuestros clientes son nuestra prioridad, ofrecemos atención
                personalizada
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
