import menuData from "../data/menuData";
import MenuCard from "../components/menu/MenuCard";
import "./Menu.css";

function Menu() {
  return (
    <div className="menu-page">
      {menuData.map((section) => (
        <div className="menu-category" key={section.category}>
          <h2 className="menu-category-title">{section.category}</h2>
          <div className="menu-scroll-container">
            {section.items.map((item) => (
              <MenuCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;