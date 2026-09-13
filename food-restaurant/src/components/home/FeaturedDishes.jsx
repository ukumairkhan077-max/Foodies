import { Link } from "react-router-dom";
import SectionTitle from "../common/SectionTitle";
import MenuCard from "../menu/MenuCard";
import menuData from "../../data/menuData";

const FeaturedDishes = () => {
  return (
    <section className="featured-section" id="menu">

      <div className="featured-overlay"></div>

      <div className="container featured-container">

        <SectionTitle
          label="OUR BEST SELLERS"
          title="Customer Favorites"
          dark
        />

        {menuData.map((section) => (
          <div className="featured-category" key={section.category}>

            <h3 className="featured-category-title">{section.category}</h3>

            <div className="featured-dishes-grid">
              {section.items.slice(0, 3).map((item) => (
                <MenuCard key={item.id} {...item} />
              ))}
            </div>

          </div>
        ))}

        <Link to="/menu" className="view-menu">
          View Full Menu →
        </Link>

      </div>
    </section>
  );
};

export default FeaturedDishes;