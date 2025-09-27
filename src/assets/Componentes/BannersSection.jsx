import React from "react";
import banner_gingibre from "../Imagens/Banners/Banner_Site_Page/banner_gingibre.jpg";
import banner_rubra from "../Imagens/Banners/Banner_Site_Page/banner_rubra.jpg";
import banner_veneta from "../Imagens/Banners/Banner_Site_Page/banner_veneta.jpg";
import banner_moderacao from "../Imagens/Banners/Banner_Site_Page/banner_moderacao.png";
import "../Css/BannersSection.css";

export default function BannersSection() {
  const banners = [
    { image: banner_gingibre, alt: "Banner Gingibre" },
    { image: banner_rubra, alt: "Banner Rubra" },
    { image: banner_veneta, alt: "Banner Veneta" },
    { image: banner_moderacao, alt: "Banner Moderação" },
  ];

  return (
    <div className="banners-section">
      {banners.map((banner, index) => (
        <div key={index} className="banner-item">
          <img src={banner.image} alt={banner.alt} className="banner-image" />
        </div>
      ))}
    </div>
  );
}
