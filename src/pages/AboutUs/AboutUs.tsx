import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./AboutUs.styles.scss";

interface Item {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  description: string;
}

const AboutUsPage: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const items: Item[] = [
    {
      id: "1",
      title: "Nuestra Historia",
      subtitle: "Descubre cómo comenzamos",
      imageUrl: "https://img.freepik.com/fotos-premium/clientes-disfrutando-su-cafe-mostrando-aspecto-social_943281-44729.jpg",
      description:
        "Nuestra historia comenzó con un pequeño sueño de ofrecer el mejor café en un ambiente acogedor.",
    },
    {
      id: "2",
      title: "Nuestro Café",
      subtitle: "Calidad en cada grano",
      imageUrl: "https://editorialtelevisa.brightspotcdn.com/dims4/default/10ea439/2147483647/strip/true/crop/706x706+177+0/resize/1000x1000!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2F6b%2F66%2Fbadcc27245e59fc1c0fd1ca34ae3%2Fcafe.jpg",
      description:
        "Cada taza de café está hecha con granos seleccionados de la más alta calidad, garantizando una experiencia única.",
    },
    {
      id: "3",
      title: "Ubicación",
      subtitle: "Visítanos en el corazón de la ciudad",
      imageUrl: "https://cdn.icon-icons.com/icons2/882/PNG/512/1-68_icon-icons.com_68826.png",
      description:
        "Estamos ubicados en el centro de la ciudad, un lugar ideal para desconectar y disfrutar de una buena taza de café.",
    },
  ];

  return (
    <div className="about-us-page">
      <h2 className="about-us-slogan">"Más que una taza de café, una experiencia para tus sentidos"</h2>

      <div className="about-us-image">
        <img
          src="https://mapal-os.com/fileadmin/_processed_/f/1/csm_1013x520-6-claves-para-asegurar-el-rendimiento-de-los-empleados-en-el-restaurante_14db377e9f.jpg"
          alt="Ambiente de la cafetería"
        />
      </div>

      <div className="about-us-sections">
        {items.map((item) => (
          <div
            key={item.id}
            className="section-item"
            onClick={() => setSelectedId(item.id)}
          >
            <h5>{item.subtitle}</h5>
            <h2>{item.title}</h2>
            <img src={item.imageUrl} alt={item.title} className="section-image" />
          </div>
        ))}
      </div>

      {selectedId && (
        <>
          {/* Fondo semi-transparente */}
          <div className="overlay" onClick={() => setSelectedId(null)} />

          <div className="selected-section">
            <div className="selected-content">
              <div className="text-content">
                <h5>
                  {items.find((item) => item.id === selectedId)?.subtitle}
                </h5>
                <h2>
                  {items.find((item) => item.id === selectedId)?.title}
                </h2>
                <p>
                  {items.find((item) => item.id === selectedId)?.description}
                </p>
              </div>
              {/* Si es "Ubicación", muestra un mapa más pequeño y cuadrado */}
              {selectedId === "3" ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799146069!2d-74.25986685897299!3d40.69767006734362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af0187e6d1%3A0x2c5cda0c9d6c6a99!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2smx!4v1695242146959!5m2!1sen!2smx"
                  width="300"
                  height="300"
                  style={{ border: "0", borderRadius: "10px" }}
                  allowFullScreen={true}
                  loading="lazy"
                />
              ) : (
                <img
                  src={items.find((item) => item.id === selectedId)?.imageUrl}
                  alt="Detalle"
                  className="selected-image"
                />
              )}
            </div>
            <button
              className="close-button"
              onClick={() => setSelectedId(null)}
            >
              <AiOutlineClose size={24} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export { AboutUsPage };
