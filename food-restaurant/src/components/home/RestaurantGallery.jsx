import ingredient from "../../assets/images/resturant/ingredient.png";
import preparation from "../../assets/images/resturant/preparation.png";
import cooking from "../../assets/images/resturant/cooking.png";
import result from "../../assets/images/resturant/result.png";

const kitchenSteps = [
  {
    image: ingredient,
    title: "Fresh Ingredients",
  },
  {
    image: preparation,
    title: "Careful Preparation",
  },
  {
    image: cooking,
    title: "Expert Cooking",
  },
  {
    image: result,
    title: "Delicious Results",
  },
];

const RestaurantGallery = () => {
  return (
    <section className="kitchen-section" id="gallery">

      <div className="container">

        <div className="kitchen-header">

          <div>
            <p className="section-label">
              BEHIND EVERY GREAT DISH
            </p>

            <h2>From Our Kitchen to Your Table</h2>
          </div>

        </div>

        <div className="kitchen-grid">

          {kitchenSteps.map((step, index) => (
            <div className="kitchen-step" key={step.title}>

              <div className="kitchen-image">
                <img src={step.image} alt={step.title} />
              </div>

              <p>{step.title}</p>

              {index !== kitchenSteps.length - 1 && (
                <span className="step-arrow">→</span>
              )}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default RestaurantGallery;