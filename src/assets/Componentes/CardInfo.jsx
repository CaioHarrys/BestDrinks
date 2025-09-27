import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddCardIcon from "@mui/icons-material/AddCard";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import "../Css/CardInfo.css";

export default function cardInfo() {
  const cardInfo = [
    {
      // Card Preço
      image: LocalOfferOutlinedIcon,
      title: "Melhores Preços",
      description:
        "Oferecemos os melhores preços do mercado para nossos clientes fiéis.",
    },
    {
      // Card Pagamento
      image: AddCardIcon,
      title: "Meios de Pagamento",
      description: "Temos diversas formas de pagamento para sua comodidade.",
    },
    {
      // Card Cupom
      image: LocalShippingOutlinedIcon,
      title: "Cupom de Desconto",
      description:
        "Oferecemos cupons de desconto exclusivos para nossos clientes fiéis.",
    },
  ];

  return (
    <div>
      <div className="card-info-container">
        {cardInfo.map((card, index) => (
          <Card
            key={index}
            elevation={0}
            sx={{
              maxWidth: 320,
            }}
          >
            <CardContent className="card-box">
              <div className="icon-container">
                <card.image sx={{ fontSize: 70, color: "black" }} />
              </div>
              <Typography gutterBottom variant="h5" fontWeight={700} component="div">
                {card.title}
              </Typography>
              <Typography variant="body4" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
