import React, { useRef } from "react";
import gingibre1 from "../Imagens/Bebidas/Gingibre/gingibre1.png";
import rubra1 from "../Imagens/Bebidas/Rubra/rubra1.png";
import veneta1 from "../Imagens/Bebidas/Veneta/veneta1.png";
import pacotebebidas2 from "../Imagens/Bebidas/Pacote/pacotebebidas2.jpg";
import gingibre2 from "../Imagens/Bebidas/Gingibre/gingibre2.png";
import rubra2 from "../Imagens/Bebidas/Rubra/rubra2.png";
import veneta2 from "../Imagens/Bebidas/Veneta/veneta2.png";
import pacotebebidas from "../Imagens/Bebidas/Pacote/pacotebebidas.jpg";
import "../Css/OurProductSection.css";

export default function CarouselCards() {
  const cardData = [
    {
      image: gingibre1,
      cover: gingibre2,
      title: "Gingibre",
      valor: "R$ 12,40",
    },
    { 
      image: rubra1, 
      cover: rubra2, 
      title: "Rubra", 
      valor: "R$ 12,40" 
    },
    { 
      image: veneta1, 
      cover: veneta2, 
      title: "Veneta", 
      valor: "R$ 12,40" 
    },
    {
      image: pacotebebidas2,
      cover: pacotebebidas,
      title: "Pack Bebidas",
      valor: "R$ 12,40",
    },
    {
      image: pacotebebidas2,
      cover: pacotebebidas,
      title: "Pack Bebidas",
      valor: "R$ 12,40",
    },
    {
      image: pacotebebidas2,
      cover: pacotebebidas,
      title: "Pack Bebidas",
      valor: "R$ 12,40",
    },
  ];

  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 270; // largura base de um card
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="carousel-container">
      {/* Botões aparecem só em telas grandes */}
      <button className="nav-btn left" onClick={() => scroll("left")}>
        ◀
      </button>

      <div className="carousel" ref={carouselRef}>
        {cardData.map((item, index) => (
          <CardHoverEffect
            key={index}
            image={item.image}
            cover={item.cover}
            title={item.title}
            valor={item.valor}
          />
        ))}
      </div>

      <button className="nav-btn right" onClick={() => scroll("right")}>
        ▶
      </button>
    </div>
  );
}

function CardHoverEffect({ image, cover, title, valor }) {
  const [currentImage, setCurrentImage] = React.useState(image);

  return (
    <div
      className="drink-card"
      onMouseEnter={() => setCurrentImage(cover)}
      onMouseLeave={() => setCurrentImage(image)}
    >
      <img src={currentImage} alt={title} className="card-img" />
      <div className="card-content">
        <h3>{title}</h3>
        <p className="price">{valor}</p>
      </div>
    </div>
  );
}
