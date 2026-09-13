import SectionTitle from "../common/SectionTitle";

const services = [
  {
    icon: "♧",
    title: "Fresh Ingredients",
    text: "We use fresh, carefully selected ingredients every day.",
  },
  {
    icon: "♨",
    title: "Expert Chefs",
    text: "Our experienced chefs bring passion and creativity to every dish.",
  },
  {
    icon: "▣",
    title: "Fast Delivery",
    text: "Hot and fresh food delivered right to your doorstep.",
  },
  {
    icon: "♢",
    title: "Quality First",
    text: "Every order is prepared with attention to quality and taste.",
  },
];

const Services = () => {
  return (
    <section className="services-section">

      <div className="services-image"></div>

      <div className="container services-container">

        <SectionTitle
          label="WHY CHOOSE US"
          title="The Perfect Blend"
        />

        <div className="services-grid">

          {services.map((service, index) => (
            <div className="service-item" key={index}>

              <div className="service-icon">
                {service.icon}
              </div>

              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;