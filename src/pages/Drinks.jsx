import React, { useState } from "react";
import "./drinks.css";
import { BiDrink } from "react-icons/bi";

const categories = [
  { id: "1", name: "Margaritas", selector: "#margaritas" },
  { id: "2", name: "Premium-Ritas", selector: "#premiumritas" },
  { id: "3", name: "Beer", selector: "#beer" },
  { id: "4", name: "Tequila", selector: "#tequila" },
  { id: "5", name: "Wine", selector: "#wine" },
  { id: "6", name: "Mixed Drinks", selector: "#mixeddrinks" },
];

const Drinks = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  function handleCategoryChange(event) {
    const selectedCategoryId = event.target.value;
    const selectedCategory = categories.find(
      (category) => category.id === selectedCategoryId
    );
    setSelectedCategory(selectedCategory);
    const categoryElement = document.querySelector(selectedCategory.selector);
    categoryElement.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="drinks">
      <div className="container">
        <h2 className="section-title">Drink Menu</h2>
        <div className="searchbar">
          <label className="selector" htmlFor="category-dropdown">
            Select a category
          </label>
          <select
            id="category-dropdown"
            value={selectedCategory.id}
            onChange={handleCategoryChange}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <h4 className="food-title text-center">
          We have a full bar and can make any cocktail you like
        </h4>

        <BiDrink className="menu-icon" />
        <h3 className="menu-category" id="margaritas">
          Margaritas
        </h3>
        <div className="card">
          <h4 className="food-title">House Margarita</h4>
          <p className="food-description">Frozen or on the rocks</p>
          <h5 className="food-price">12oz $5.99 - 27oz $8.99 - 32oz $15.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Swirl Margarita</h4>
          <p className="food-description">
            Frozen margarita topped with house sangria
          </p>
          <h5 className="food-price">27oz $11.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Flavored Margarita</h4>
          <p className="food-description">
            Strawberry, Mango, Peach, Guava, Watermelon, Ocean Blue Mexican Flag
          </p>
          <h5 className="food-price">27oz $10.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Top Shelf Margarita</h4>
          <p className="food-description">
            Jose Cuervo Tequila, Grand Marnier, Fresh Lime Juice, Orange Juice,
            Triple Sec
          </p>
          <h5 className="food-price">
            12oz $10.99 - 27oz $13.99 - 32oz $19.99
          </h5>
        </div>
        <div className="card">
          <h4 className="food-title">Skinny Margarita</h4>
          <p className="food-description">
            Espolon Blanco Tequila, Agave Nectar, Fresh Lime Juice
          </p>
          <h5 className="food-price">12oz $8.99 - 27oz $13.99 - 32oz $18.99</h5>
        </div>
        <h3 className="menu-category" id="premiumritas">
          Premium-Ritas
        </h3>
        <span className="menu-category-details">Frozen or On The Rocks</span>
        <div className="card">
          <h4 className="food-title">Berry-Rita</h4>
          <p className="food-description">
            Espolon Blanco Tequila, Royale Montaine Orange Cognac, Berry Puree,
            Sweet & Sour
          </p>
          <h5 className="food-price">$18.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Mangoneada-Rita</h4>
          <p className="food-description">
            Espolon Blanco Tequila, Royale Montaine Orange Cognac, Mango Puree,
            Sweet & Sour, Chamoy
          </p>
          <h5 className="food-price">$14.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Cucumber-Rita</h4>
          <p className="food-description">
            Teremana Tequilla Blanco, Lime Juice, Fresh Muddled Cucumber &
            Cilantro
          </p>
          <h5 className="food-price">$13.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Guava-Rita</h4>
          <p className="food-description">
            Sauza Blue Blanco, Royale Montaine Orange Cognac, Guava Purée, Sweet
            & Sour, Chamoy Sryup
          </p>
          <h5 className="food-price">$13.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Hawaiian-Rita</h4>
          <p className="food-description">
            Cabo Wabo Blanco Tequila, Royale Montaine Orange Cognac, Lime Juice,
            Pineapple Juice, Blue Curaçao
          </p>
          <h5 className="food-price">$13.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Watermelon-Rita</h4>
          <p className="food-description">
            Avion Blanco Tequila, Royale Montaine Orange Cognac, Watermelon
            Puree, Sweet & Sour, Chamoy Syrup
          </p>
          <h5 className="food-price">$13.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Pineapple Jalapeño-Rita</h4>
          <p className="food-description">
            Avion Blanco Tequila, Royale Montaine Orange Cognac, Watermelon
            Puree, Sweet & Sour, Chamoy Syrup
          </p>
          <h5 className="food-price">$13.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Corona-Rita</h4>
          <p className="food-description">Margarita topped with a Corona</p>
          <h5 className="food-price">$15.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Dosa-Rita</h4>
          <p className="food-description">Margarita topped with a Dos Equis</p>
          <h5 className="food-price">$15.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Champa-Rita</h4>
          <p className="food-description">
            Teremana Tequila Blanco, Royale Montaine Orange Cognac, Lime Juice,
            topped with Champagne and a splash of Blue Curaçao
          </p>
          <h5 className="food-price">$15.99</h5>
        </div>
        <h3 className="menu-category" id="beer">
          Beer
        </h3>
        <span className="menu-category-details">Imports</span>
        <div className="card">
          <h4 className="food-title">Bottle Imports</h4>
          <p className="food-description">Served with a lime</p>
          <h6 className="byobo">Cornona</h6>
          <h6 className="byobo">Cornona Premier</h6>
          <h6 className="byobo">Cornona Light</h6>
          <h6 className="byobo">Tecate</h6>
          <h6 className="byobo">Modelo</h6>
          <h6 className="byobo">Negra Modelo</h6>
          <h6 className="byobo">Victoria</h6>
          <h6 className="byobo">Sol</h6>
          <h5 className="food-price">$4.75</h5>
        </div>
        <span className="menu-category-details">Domestic</span>
        <div className="card">
          <h4 className="food-title">Bottle Domestic</h4>
          <h6 className="byobo">Miller Lite</h6>
          <h6 className="byobo">Michelob Ultra</h6>
          <h6 className="byobo">Budweiser</h6>
          <h6 className="byobo">Bud Light</h6>
          <h6 className="byobo">Coors Light</h6>
          <h6 className="byobo">Yuengling</h6>
          <h6 className="byobo">Blue Moon</h6>
          <h5 className="food-price">$4.25</h5>
        </div>
        <span className="menu-category-details">Draft</span>
        <div className="card">
          <h4 className="food-title">Draft Beers</h4>
          <p className="food-description">Served with a cold glass</p>
          <h6 className="byobo">Cornona Premier</h6>
          <h6 className="byobo">Modelo</h6>
          <h6 className="byobo">Dos Equis</h6>
          <h6 className="byobo">Michelob Ultra</h6>
          <h6 className="byobo">Blue Moon</h6>
          <h6 className="byobo">Pacífico</h6>
          <h5 className="food-price">Small $2.75 - Large $4.75</h5>
        </div>
        <h3 className="menu-category" id="tequila">
          Tequila
        </h3>
        <span className="menu-category-details">by the shot</span>
        <div className="card">
          <h4 className="food-title">Tequila</h4>
          <p className="food-description">Served with a lime</p>
          <h6 className="byobo">1800</h6>
          <h6 className="byob">$7.25</h6>
          <h6 className="byobo">Jose Cuervo</h6>
          <h6 className="byob">$6.25</h6>
          <h6 className="byobo">Avión</h6>
          <h6 className="byob">$9.99</h6>
          <h6 className="byobo">Espolon</h6>
          <h6 className="byob">$8.99</h6>
          <h6 className="byobo">Cabo Wabo</h6>
          <h6 className="byob">$8.25</h6>
          <h6 className="byobo">Don Julio</h6>
          <h6 className="byob">$9.75</h6>
          <h6 className="byobo">Sauza Hornitos</h6>
          <h6 className="byob">$6.99</h6>
          <h6 className="byobo">El Jimador</h6>
          <h6 className="byob">$6.25</h6>
          <h6 className="byobo">Herradura</h6>
          <h6 className="byob">$8.99</h6>
          <h6 className="byobo">3 Generaciones</h6>
          <h6 className="byob">$10.25</h6>
          <h6 className="byobo">Patron</h6>
          <h6 className="byob">$10.25</h6>
          <h6 className="byobo">Teramana</h6>
          <h6 className="byob">$7.25</h6>
        </div>
        <h3 className="menu-category" id="wine">
          Wine
        </h3>
        <span className="menu-category-details">by the glass</span>
        <div className="card">
          <h4 className="food-title">Wine</h4>
          <p className="food-description">Served in a wine glass</p>
          <h6 className="byobo">Sangria</h6>
          <h6 className="byobo">Merlot</h6>
          <h6 className="byobo">Pinot Grigio</h6>
          <h6 className="byobo">Burgundy</h6>
          <h6 className="byobo">Chardonnay</h6>
          <h6 className="byobo">White Zinfandel</h6>
          <h5 className="food-price">$6.75 per glass</h5>
        </div>
        <h3 className="menu-category" id="mixeddrinks">
          Mixed Drinks
        </h3>
        <div className="card">
          <h4 className="food-title">Rancheros Sangria</h4>
          <p className="food-description">
            A homemade sangria topped with fresh fruit
          </p>
          <h5 className="food-price">27oz $8.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Paloma</h4>
          <p className="food-description">
            Don Julio Blanco, Simple Syrup, Lime Juice, Ginger Beer, Fresh Mint
          </p>
          <h5 className="food-price">$11.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Bloody Mary</h4>
          <p className="food-description">Sky Vodka & House Bloody Mary Mix</p>
          <h5 className="food-price">$9.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Mexican Mule</h4>
          <p className="food-description">
            Cabo Wabo Blanco, Simple Syrup, Lime Juice, Ginger Beer, Fresh Mint
          </p>
          <h5 className="food-price">$9.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Mojito</h4>
          <p className="food-description">
            Silver Jamaica Rum, Fresh Muddled Mint, Lime, Simple Syrup, Club
            Soda
          </p>
          <h5 className="food-price">$10.99</h5>
          <h5 className="food-price">Make it a flavor +$1.00</h5>
          <p className="food-description">
            Mango, Peach, Mango, Watermelon, Guava
          </p>
        </div>
        <div className="card">
          <h4 className="food-title">Michelada</h4>
          <h5 className="food-price">$9.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Daiquiri</h4>
          <p className="food-description">Strawberry, Peach, Mango, Guava</p>
          <h5 className="food-price">$10.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Pina Colada</h4>
          <p className="food-description">
            Made with Bacardi, Served in a fresh pineapple
          </p>
          <h5 className="food-price">$13.99</h5>
        </div>
      </div>
    </div>
  );
};

export default Drinks;
