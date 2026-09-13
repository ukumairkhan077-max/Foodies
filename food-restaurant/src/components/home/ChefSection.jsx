import chef from "../../assets/images/chefs/ahmed.png";
const ChefSection = () => {
  return (
    <section className="chef-section">

      <div className="chef-image">
        <img
          src={chef}
          alt="Chef Ahmed Khan"
        />
      </div>

      <div className="chef-content">

        <p className="section-label">
          MEET OUR CHEF
        </p>

        <h2>Chef Ahmed Khan</h2>

        <p>
          With years of culinary experience, Chef Ahmed brings
          traditional flavors together with modern techniques,
          creating dishes that make every meal special.
        </p>

        <div className="chef-signature">
          Chef Ahmed Khan
        </div>

      </div>

    </section>
  );
};

export default ChefSection;