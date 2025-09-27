import React from "react";
import "../Css/FooterSection.css";
import amex from "../Imagens/Cards_Flags/amex.png";
import dinners from "../Imagens/Cards_Flags/dinners.png";
import elo from "../Imagens/Cards_Flags/elo.png";
import hiper from "../Imagens/Cards_Flags/hiper.png";
import mastercard from "../Imagens/Cards_Flags/mastercard.png";
import visa from "../Imagens/Cards_Flags/visa.png";
import pix from "../Imagens/Cards_Flags/pix.png";
import sitesafe from "../Imagens/Cards_Flags/sitesafe.png";

const FooterSection = () => {
  const cardFlags = [
    {
      src: amex,
      alt: "American Express",
    },
    {
      src: dinners,
      alt: "Dinners",
    },
    {
      src: elo,
      alt: "Elo",
    },
    {
      src: hiper,
      alt: "Hipercard",
    },
    {
      src: mastercard,
      alt: "Mastercard",
    },
    {
      src: visa,
      alt: "Visa",
    },
    {
      src: pix,
      alt: "Pix",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="footer-column">
          <h4>ACESSE</h4>
          <ul>
            <li>Quem Somos</li>
            <li>Trocas e Devoluções</li>
            <li>Política de Privacidade</li>
            <li>Pontos de Venda</li>
            <li>Contato</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>PRODUTOS</h4>
          <ul>
            <li>GINGIBRE</li>
            <li>RUBRA</li>
            <li>VENETA</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>ENTRE EM CONTATO</h4>
          <ul>
            <li>(061) 99211-9889</li>
            <li>melhoresdrinks.com.br</li>
            <li>
              Rua Niágara, 968, Jardim Canadá – Nova Lima/MG – CEP 3400-652
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-payment-icons">
        {cardFlags.map((card, index) => (
          <img key={index} src={card.src} alt={card.alt} />
        ))}
      </div>
      <div className="footer-secure-site">
        <img src={sitesafe} alt="Site Protegido" className="secure-icon" />
        <div className="secure-text">
          <p>COMPRA SEGURA</p>
          <strong>SITE PROTEGIDO</strong>
          <span>CERTIFICADO SSL</span>
        </div>
      </div>

      <p className="footer-copyright">
        Copyright Mwlhores Drinks - 35471933000141 - 2025. Todos os direitos
        reservados.
      </p>
      <p className="footer-created">
        criado com{" "}
        <span role="img" aria-label="infinity">
          ∞
        </span>{" "}
        harryscompany
      </p>
    </footer>
  );
};

export default FooterSection;
