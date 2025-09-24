import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import gingibre1 from "../Imagens/Bebidas/Gingibre/gingibre1.png";
import rubra1 from "../Imagens/Bebidas/Rubra/rubra1.png";
import veneta1 from "../Imagens/Bebidas/Veneta/veneta1.png";
import pacotebebidas2 from "../Imagens/Bebidas/Pacote/pacotebebidas2.jpg";
import gingibre2 from "../Imagens/Bebidas/Gingibre/gingibre2.png";
import rubra2 from "../Imagens/Bebidas/Rubra/rubra2.png";
import veneta2 from "../Imagens/Bebidas/Veneta/veneta2.png";
import pacotebebidas from "../Imagens/Bebidas/Pacote/pacotebebidas.jpg";
import "../Css/OurProductSection.css";

export default function ImgMediaCard() {
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

  return (
    <div className="drink-row">
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
  );
}

function CardHoverEffect({ image, cover, title, valor }) {
  const [currentImage, setCurrentImage] = useState(image);

  const handleMouseEnter = () => {
    setCurrentImage(cover);
  };

  const handleMouseLeave = () => {
    setCurrentImage(image);
  };

  return (
    <Card className="drink-card"
      sx={{ maxWidth: 345, margin: 2 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardMedia
        component="img"
        alt={title}
        height="fit-content"
        image={currentImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" className="price-tag" sx={{ color: "text.secondary" }}>
          {valor}
        </Typography>
      </CardContent>
    </Card>
  );
}
