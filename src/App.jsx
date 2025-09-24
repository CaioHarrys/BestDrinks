import "./App.css";
import ImageCarousel from "./assets/Componentes/ImageCarousel";
import DrinkCard from "./assets/Componentes/DrinkCard";
import "./assets/Css/OurProductSection.css";
function App() {
  return (
    <div className="page-fit">
      <ImageCarousel />
      <div className="section-2">
        <div className="our-title">
          <h1>Nossos Produtos</h1>
        </div>
        <DrinkCard />
      </div>
    </div>
  );
}

export default App;
