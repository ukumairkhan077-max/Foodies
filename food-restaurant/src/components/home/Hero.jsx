import Button from "../common/Button";
import heroImage from "../../assets/images/hero/hero-burger.png";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-label">
            SINCE 2018 · SERVING HAPPINESS EVERY DAY
          </p>

          <h1>
            Taste the
            <span>Difference</span>
          </h1>

          <p className="hero-description">
            Fresh ingredients. Authentic flavors.
            <br />
            Made with passion.
          </p>

          <div className="hero-buttons">
            <Button>
              Order Now <span>→</span>
            </Button>
            <Button variant="outline">Explore Menu</Button>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Hero;