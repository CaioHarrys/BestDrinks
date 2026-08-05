import React, { useRef } from "react";
import gingibre1 from "../Imagens/Bebidas/Gingibre/gingibre1.png";
import rubra1 from "../Imagens/Bebidas/Rubra/rubra1.png";
import veneta1 from "../Imagens/Bebidas/Veneta/veneta1.png";
import pacotebebidas2 from "../Imagens/Bebidas/Pacote/pacotebebidas2.jpg";
import gingibre2 from "../Imagens/Bebidas/Gingibre/gingibre2.png";
import rubra2 from "../Imagens/Bebidas/Rubra/rubra2.png";
import veneta2 from "../Imagens/Bebidas/Veneta/veneta2.png";
import mascate from "../Imagens/Bebidas/Mascate/Maracuja/maracuja1.png";
import mascate2 from "../Imagens/Bebidas/Mascate/Maracuja/maracuja2.png";
import melancia from "../Imagens/Bebidas/Mascate/Melancia/melancia1.png";
import melancia2 from "../Imagens/Bebidas/Mascate/Melancia/melancia2.png";
import xeque from "../Imagens/Bebidas/Xeque/mate1.png";
import xeque2 from "../Imagens/Bebidas/Xeque/mate2.png";
import chablau from "../Imagens/Bebidas/Chablauzin/chablauzin1.png";
import chablau2 from "../Imagens/Bebidas/Chablauzin/chablauzin2.png";
import pacotebebidas from "../Imagens/Bebidas/Pacote/pacotebebidas.jpg";
import "../Css/OurProductSection.css";

export default function CarouselCards() {
  const cardData = [
    {
      image: xeque,
      cover: xeque2,
      title: "Xeque Mate",
      valor: "Sucesso nacional o Xeque-Mate com a mistura de : Guaraná, Mate, limão e rum.",
    },
    {
      image: mascate,
      cover: mascate2,
      title: "Mascate Maracujá",
      valor: "Novidade da Xeque-Mate, Mascate Drinks de Maracuja: com maracujá , caju, água de coco e rum.",
    },
    {
      image: melancia,
      cover: melancia2,
      title: "Mascate Melancia",
      valor:
        "Novidade Xeque-Mate, Mascate Drinks de Melancia com: melancia, framboesa, hibisco , limão siciliano e rum.",
    },
    {
      image: chablau,
      cover: chablau2,
      title: "Chablauzin",
      valor: "Lançamento de A Equilibrista, Chablauzin com : Guaraná, limão siciliano, chapéu de couro e vodka.",
    },
    {
      image: gingibre1,
      cover: gingibre2,
      title: "Gingibre",
      valor: "Gingibre é refrescante, autêntica e com a picância única que só o gengibre natural tem.",
    },
    {
      image: rubra1,
      cover: rubra2,
      title: "Rubra",
      valor: "Soft Bitter: Rubra equilibra o doce e o amargo em um sabor interessante, adulto e de alto drinkability.",
    },
    {
      image: veneta1,
      cover: veneta2,
      title: "Veneta",
      valor: "Veneta traz o equilíbrio perfeito entre frutas vermelhas e hortelã: doce e refrescante no ponto certo.",
    },
    // {
    //   image: pacotebebidas2,
    //   cover: pacotebebidas,
    //   title: "Pack Bebidas",
    //   valor: "R$ 12,40",
    // },
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
