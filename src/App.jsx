import "./App.css";
import ImageCarousel from "./assets/Componentes/ImageCarousel";
import DrinkCard from "./assets/Componentes/DrinkCard";
import CardInfo from "./assets/Componentes/CardInfo";
import "./assets/Css/OurProductSection.css";
import BannersSection from "./assets/Componentes/BannersSection";
import FooterSection from "./assets/Componentes/FooterSection";
function App() {
  return (
    <div className="page-fit">
      <ImageCarousel />
      <div className="section-2">
        <div className="our-title">
          <h1>Nossos Produtos</h1>
        </div>
        <DrinkCard />
        <CardInfo />
        <BannersSection/>
        <FooterSection/>
      </div>
    </div>
  );
}

export default App;
