import Button from "../common/Button";
import interior from "../../assets/images/resturant/resturant_interior.png";


const AboutPreview = () => {
  return (
    <section className="about-preview" id="about">

      <div className="about-image">
        <img
          src={interior}
          alt="Foodie's restaurant interior"
        />
      </div>

      <div className="about-content">

        <p className="section-label">
          OUR STORY
        </p>

        <h2>More Than Just Food</h2>

        <p>
          We believe every meal should be an experience.
          From carefully selected ingredients to the final plate,
          our team puts passion into everything we serve.
        </p>

        <Button>
          Learn More About Us →
        </Button>

      </div>

    </section>
  );
};

export default AboutPreview;