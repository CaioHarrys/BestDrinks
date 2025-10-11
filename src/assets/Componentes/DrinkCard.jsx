import React, { useRef, useState, useEffect } from "react";
// Importe todas as suas imagens aqui:
import gingibre1 from "../Imagens/Bebidas/Gingibre/gingibre1.png";
import rubra1 from "../Imagens/Bebidas/Rubra/rubra1.png";
import veneta1 from "../Imagens/Bebidas/Veneta/veneta1.png";
import pacotebebidas2 from "../Imagens/Bebidas/Pacote/pacotebebidas2.jpg";
import gingibre2 from "../Imagens/Bebidas/Gingibre/gingibre2.png";
import rubra2 from "../Imagens/Bebidas/Rubra/rubra2.png";
import veneta2 from "../Imagens/Bebidas/Veneta/veneta2.png";
import pacotebebidas from "../Imagens/Bebidas/Pacote/pacotebebidas.jpg";
import "../Css/OurProductSection.css"; // Seu CSS

// =========================================================
// 1. Definição dos Dados (APENAS o conjunto original)
// =========================================================
const originalCardData = [
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
    valor: "R$ 12,40",
  },
  {
    image: veneta1,
    cover: veneta2,
    title: "Veneta",
    valor: "R$ 12,40",
  },
  {
    image: pacotebebidas2,
    cover: pacotebebidas,
    title: "Pack Bebidas",
    valor: "R$ 12,40",
  },
];

// CRIA O ARRAY INFINITO: Duplica os dados originais para simular o loop.
const infiniteCardData = [...originalCardData, ...originalCardData];

// =========================================================
// 2. Componente Principal (Lógica de Loop)
// =========================================================
export default function CarouselCards() {
  const carouselRef = useRef(null);
  
  // Largura de um card (350px) + gap (30px) = 380px (para desktop)
  const CARD_DIMENSION = 380; 
  const originalLength = originalCardData.length;

  // 1. Efeito: Rola para o ponto inicial (início da segunda cópia) ao montar.
  useEffect(() => {
    if (carouselRef.current) {
      // Posição inicial: Começo da segunda cópia dos dados.
      const initialScroll = originalLength * CARD_DIMENSION;
      carouselRef.current.scrollLeft = initialScroll;
    }
  }, [originalLength]);

  // 2. Função de Scroll: Usada nos botões.
  const scroll = (direction) => {
    if (carouselRef.current) {
      // Rola para a esquerda ou direita com animação suave.
      carouselRef.current.scrollBy({
        left: direction === "left" ? -CARD_DIMENSION : CARD_DIMENSION,
        behavior: "smooth",
      });
      
      // Checa e reseta a posição (handleScroll) após o scroll suave.
      // 400ms deve ser suficiente para o smooth scroll terminar.
      setTimeout(handleScroll, 400); 
    }
  };

  // 3. Função de Loop: Checa a posição e reseta o scroll para simular o infinito.
  const handleScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollLeft = carousel.scrollLeft;
    // Largura total de um conjunto de dados
    const singleSetWidth = originalLength * CARD_DIMENSION; 
    // Largura total da div .carousel
    const carouselWidth = carousel.scrollWidth;

    // Se o usuário rolou para a frente (chegando perto do final do array duplicado)
    if (scrollLeft >= singleSetWidth * 2 - CARD_DIMENSION * 2) {
      // Pula instantaneamente para a posição inicial (começo da segunda cópia).
      carousel.scrollLeft = singleSetWidth - carousel.clientWidth + 10;
      return;
    }
    
    // Se o usuário rolou para trás (chegando perto do início do primeiro array)
    if (scrollLeft <= CARD_DIMENSION) {
      // Pula instantaneamente para o final do array duplicado (o mesmo card, na segunda cópia).
      carousel.scrollLeft = singleSetWidth + 10;
      return;
    }
  };

  return (
    <div className="carousel-container">
      {/* Botões de navegação */}
      <button className="nav-btn left" onClick={() => scroll("left")}>
        ◀
      </button>

      {/* O onScroll só é necessário para a rolagem manual (mouse/touch) */}
      <div className="carousel" ref={carouselRef} onScroll={handleScroll}>
        {/* Renderiza o array duplicado */}
        {infiniteCardData.map((item, index) => (
          // Usar index + item.title garante uma chave única mesmo com itens duplicados
          <CardHoverEffect
            key={index + item.title} 
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

// =========================================================
// 3. Componente Card (Mantido Igual)
// =========================================================
function CardHoverEffect({ image, cover, title, valor }) {
  const [currentImage, setCurrentImage] = useState(image);

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