import { MapPin, Phone, Mail, Clock } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="contact-icon" />,
      title: "Dirección",
      content: "Carrer de la Muralla, 46, 17300 Blanes, Girona, España",
      description: "Ubicado en el centro de Blanes",
    },
    {
      icon: <Phone className="contact-icon" />,
      title: "Teléfono",
      content: "972 33 03 26",
      description: "Llámanos en horario comercial",
    },
    {
      icon: <Mail className="contact-icon" />,
      title: "Email",
      content: "estancroca.bl@gmail.com",
      description: "Respondemos en menos de 24 h",
    },
    {
      icon: <Clock className="contact-icon" />,
      title: "Horario",
      content: "L–V: 9:00–13:00 / 17:00–21:00, S: 9:00–13:00",
      description: "Domingo cerrado",
    },
  ];

  return (
    <div className="contact-container">
      <div className="contact-content">
        {/* Hero Section */}
        <div className="hero-section">
          <h1 className="hero-title">Contacto</h1>
          <p className="hero-subtitle">
            Estamos aquí para ayudarte. Ponte en contacto con nosotros para
            cualquier consulta.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info-section">
            <div>
              <h2 className="contact-info-title">Información de Contacto</h2>
              <div className="contact-info-list">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-item">
                    <div className="contact-info-content">
                      <div className="contact-info-icon">{info.icon}</div>
                      <div className="contact-info-details">
                        <h3 className="contact-info-name">{info.title}</h3>
                        <p className="contact-info-value">{info.content}</p>
                        <p className="contact-info-description">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h2 className="faq-title">Preguntas Frecuentes</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">¿Cuál es el horario de apertura?</h3>
              <p className="faq-answer">
                Abrimos de lunes a viernes de 9:00 a 13:00 y de 17:00 a 21:00.
                Los sábados solo por la mañana (9:00–13:00).
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">¿Dónde está ubicado el estanco?</h3>
              <p className="faq-answer">
                Nos encontramos en Carrer de la Muralla, 46, 17300 Blanes,
                Girona.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">¿Venden artículos de regalo?</h3>
              <p className="faq-answer">
                Sí, disponemos de una selección de artículos para regalo
                relacionados con el tabaco.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">¿Puedo pagar con tarjeta?</h3>
              <p className="faq-answer">
                Sí, aceptamos pagos con tarjeta en tienda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
