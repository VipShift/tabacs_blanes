import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <MapPin className="contact-icon" />,
      title: "Dirección",
      content: "Calle Mayor 123, Madrid, España",
      description: "En el corazón de la capital española",
    },
    {
      icon: <Phone className="contact-icon" />,
      title: "Teléfono",
      content: "+34 91 123 45 67",
      description: "Llámanos de lunes a domingo",
    },
    {
      icon: <Mail className="contact-icon" />,
      title: "Email",
      content: "info@tabacosespana.es",
      description: "Respondemos en 24 horas",
    },
    {
      icon: <Clock className="contact-icon" />,
      title: "Horario",
      content: "Lun-Vie: 9:00-20:00",
      description: "Sáb: 10:00-18:00, Dom: 12:00-16:00",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setSubmitted(true);
    setLoading(false);
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Reset submitted state after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

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

            {/* Map Placeholder */}
            <div className="map-section">
              <h3 className="map-title">Ubicación</h3>
              <div className="map-placeholder">
                <div className="map-content">
                  <MapPin className="map-icon" />
                  <p>Mapa interactivo</p>
                  <p className="map-address">Calle Mayor 123, Madrid</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <h2 className="form-title">
              <MessageSquare className="form-title-icon" />
              Envíanos un Mensaje
            </h2>

            {submitted ? (
              <div className="success-message">
                <div className="success-icon-container">
                  <Send className="success-icon" />
                </div>
                <h3 className="success-title">¡Mensaje Enviado!</h3>
                <p className="success-text">
                  Gracias por contactarnos. Te responderemos pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-field">
                    <label className="form-label">Nombre Completo</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label className="form-label">Asunto</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="¿En qué podemos ayudarte?"
                    required
                  />
                </div>

                <div className="form-field">
                  <label className="form-label">Mensaje</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className="form-textarea"
                    placeholder="Escribe tu mensaje aquí..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="submit-button"
                >
                  {loading ? (
                    <>
                      <div className="loading-spinner"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Enviar Mensaje</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h2 className="faq-title">Preguntas Frecuentes</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">¿Hacen envíos a toda España?</h3>
              <p className="faq-answer">
                Sí, realizamos envíos a toda la península española en 24-48
                horas.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">¿Puedo devolver un producto?</h3>
              <p className="faq-answer">
                Aceptamos devoluciones dentro de los 14 días posteriores a la
                compra.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">¿Tienen productos sin impuestos?</h3>
              <p className="faq-answer">
                Todos nuestros productos cumplen con la normativa fiscal
                vigente.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">¿Ofrecen descuentos por volumen?</h3>
              <p className="faq-answer">
                Sí, contacta con nosotros para consultar nuestros precios
                mayoristas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
