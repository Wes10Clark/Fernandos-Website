import React, { useState } from "react";
import "./menu.css";
import { MdRestaurantMenu } from "react-icons/md";
const categories = [
  { id: "1", name: "Appetizers", selector: "#appetizers" },
  { id: "2", name: "Salads", selector: "#salads" },
  { id: "3", name: "Tacos", selector: "#tacos" },
  { id: "4", name: "Burritos", selector: "#burritos" },
  { id: "5", name: "Chimichangas", selector: "#chimichangas" },
  { id: "6", name: "Chicken", selector: "#chicken" },
  { id: "7", name: "Fajitas", selector: "#fajitas" },
  { id: "8", name: "Fernandos Burritos", selector: "#fernandosburritos" },
  { id: "9", name: "House Specialties", selector: "#housespecialties" },
  { id: "10", name: "Enchiladas", selector: "#enchiladas" },
  { id: "11", name: "Seafood", selector: "#seafood" },
  { id: "12", name: "Combinations", selector: "#combinations" },
  { id: "13", name: "A La Carte", selector: "#alacarte" },
  { id: "14", name: "Make Your Own Combo", selector: "#makeyourowncombo" },
  { id: "15", name: "Lunch Menu", selector: "#lunchmenu" },
];

const Menu = () => {
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
    <div className="menu">
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
      <div className="container">
        <h2 className="section-title">Menu</h2>
        <MdRestaurantMenu className="menu-icon" />
        <h3 className="menu-category" id="appetizer">
          Appetizers
        </h3>
        <div className="card">
          <h4 className="food-title">White Queso</h4>
          <p className="food-description">
            White cheese dip. Our one-of-a-kind homemade queso with Jalapeño to
            add some kick
          </p>
          <h5 className="food-price">Small $4.99 Large $8.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Yellow Queso</h4>
          <p className="food-description">
            Yellow cheese dip. Our traditional homemade queso dipping sauce
          </p>
          <h5 className="food-price">Small $4.99 Large $8.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Fernando`s Dip</h4>
          <p className="food-description">
            Fernando's own special cheese dip. Your choice of white or yellow
            queso with seasoned beef, refried beans and Pico De Gallo
          </p>
          <h5 className="food-price">$9.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Guacamole Platter</h4>
          <p className="food-description">
            Guacamole is specially prepared at your table with fresh avocados,
            shredded cheese, tomatoes, cilantro and pico de gallo, served with
            tortilla chips
          </p>
          <h5 className="food-price">$10.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Quesadillas</h4>
          <p className="food-description">
            Served with lettuce, pico de gallo, sour cream, guacamole and
            ranchero
          </p>
          <h5 className="food-price">
            Ground Beef, Shredded Chicken or mixed $10.99
          </h5>
          <h5 className="food-price">
            Steak, Grilled Chicken, or mixed. (served with sautéed vegetables)
            $11.99
          </h5>
          <h5 className="food-price">
            Seasoned Grilled Shrimp (served with sautéed vegetables) $12.99
          </h5>
          <h5 className="food-price">
            Veggie: Onions, Bell Peppers, Zucchini, Squash, & Mushrooms $9.99
          </h5>
          <h5 className="food-price">Spinach & Mushroom $10.50</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Flautas</h4>
          <p className="food-description">
            Flaky crisp flour tortillas stuffed and filled with and your choice
            of shredded chicken or shredded beef served with lettuce, pico de
            gallo guacamole sour cream, and white queso dipping sauce
          </p>
          <h5 className="food-price">$10.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Nacho Time</h4>
          <p className="food-description">
            Flour tortilla chips served with refried beans, lettuce, sour cream,
            guacamole pico de gallo, shredded cheese
          </p>
          <h5 className="food-price">Refried Beans & Cheese $7.99</h5>
          <h5 className="food-price">
            Ground Beef, Shredded Chicken, or mixed $9.50
          </h5>
          <h5 className="food-price">
            Steak, Grilled Chicken, or mixed (served with sautéed vegetables)
            $11.99
          </h5>
          <h5 className="food-price">Seasoned Grilled Shrimp $12.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Garnachos</h4>
          <p className="food-description">
            Your choice of flour or corn tortilla chips individually cut and
            topped with refried beans and melted shredded cheese. Served with
            lettuce, pico de gallo, sour cream, and guacamole
          </p>
          <h5 className="food-price">Refried Beans & Cheese $8.25</h5>
          <h5 className="food-price">
            Ground Beef, Shredded Chicken, or mixed $9.99
          </h5>
          <h5 className="food-price">
            Steak, Grilled Chicken, or mixed (served with sauteed vegetables)
            $11.25
          </h5>
          <h5 className="food-price">Seasoned Grilled Shrimp $11.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Fiesta Sampler</h4>
          <p className="food-description">
            Chicken flautas, beef quesadillas and mixed fajita nachos served
            with lettuce, pico de gallo, guacamole, sour cream, and white queso
            dipping sauce
          </p>
          <h5 className="food-price">$11.99</h5>
        </div>
        <h3 className="menu-category" id="salads">
          Salads
        </h3>
        <span className="menu-category-details">
          All salads are served in a flour tortilla
        </span>
        <div className="card">
          <h4 className="food-title">Avocado Salad</h4>
          <p className="food-description">
            Spring mix, croutons, red onions, tomatoes, cheese, sliced avocado,
            and queso fresco. Served with raspberry dressing.
          </p>
          <h5 className="food-price">$9.99</h5>
          <h5 className="food-price">
            Add Grilled Chicken $11.99, Steak $12.99, Shrimp $13.99, Mahi Mahi
            $14.99
          </h5>
        </div>
        <div className="card">
          <h4 className="food-title">Blackened Shrimp Salad</h4>
          <p className="food-description">
            Seasoned blackened shrimp over a bed of greens with fresh diced
            mangoes and a key lime dressing, guacamole, and sour cream
          </p>
          <h5 className="food-price">$11.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Taco Salad</h4>
          <p className="food-description">
            A flour tortilla taco shell bowl filled with ground beef, refried
            beans, chili, lettuce, black olives, green onions, tomatoes,
            carrots, shredded cheese, sour cream, and guacamole
          </p>
          <h5 className="food-price">$10.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Summer Salad</h4>
          <p className="food-description">
            Your choice of grilled steak, grilled chicken or grilled shrimp.
            With a combination of sautéed vegetables, lettuce, olives, green
            onions, tomatoes, carrots, guacamole, and sour cream
          </p>
          <h5 className="food-price">$12.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Pinata Salad</h4>
          <p className="food-description">
            A crunchy flat flour tortilla shell topped with ground beef,
            shredded chicken, chili con came, rice, refried beans, lettuce,
            tomatoes, grated carrots, green onions, black olives, shredded
            cheese, and sour cream
          </p>
          <h5 className="food-price">$11.99</h5>
        </div>
        <h3 className="menu-category" id="tacos">
          Tacos
        </h3>
        <span className="menu-category-details">
          Served with Mexican rice and your choice of refried beans, charro
          beans or black beans
        </span>
        <div className="card">
          <h4 className="food-title">Triple Duty Tacos</h4>
          <p className="food-description">
            Three crispy or soft tacos with our delicious ground beef, lettuce,
            tomatoes, shredded cheese and sour cream
          </p>
          <h5 className="food-price">$11.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Fernando's Fajita Wrap Tacos</h4>
          <p className="food-description">
            Three soft fajita tacos, one chicken, one steak, and one shrimp
            stuffed with sautéed vegetables, sour cream and white queso on the
            side
          </p>
          <h5 className="food-price">$13.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Fernando's Crunchy Tacos</h4>
          <p className="food-description">
            Two 8" flour tortillas filled with shredded beef and fried to a
            golden brown, then filled with lettuce, tomatoes and shredded cheese
          </p>
          <h5 className="food-price">$10.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Mexican Tacos</h4>
          <p className="food-description">
            Three double corn tortillas filled with chopped fajita steak and
            chorizo sausage, topped with chopped onions, cilantro, and limes on
            the side
          </p>
          <h5 className="food-price">$11.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Combo Tacos</h4>
          <p className="food-description">
            Three tacos one shredded chicken soft taco, one ground beef crispy
            taco, and one shredded beef crunchy taco, all with lettuce tomatoes,
            and shredded cheese. $11.99
          </p>
          <h5 className="food-price">$11.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Mahi Mahi Tacos</h4>
          <p className="food-description">
            Three grilled mahi mahi tacos topped with house sauce, red cabbage,
            pineapple pico de gallo and queso fresco
          </p>
          <h5 className="food-price">$15.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">The Benjamins</h4>
          <p className="food-description">
            Three grilled shrimp tacos topped with house sauce, red cabbage,
            pineapple pico de gallo and queso fresco.
          </p>
          <h5 className="food-price">$15.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Birria Tacos</h4>
          <p className="food-description">
            Three birria queso tacos served with consume, cilantro, onions, lime
            and house made hot sauce
          </p>
          <h5 className="food-price">$14.99</h5>
        </div>
        <h3 className="menu-category" id="burritos">
          Burritos
        </h3>
        <span className="menu-category-details">
          Served with Mexican rice and your choice of refried beans, charro
          beans or black beans
        </span>
        <div className="card">
          <h4 className="food-title">Burritos a La Parilla</h4>
          <p className="food-description">
            Two burritos served on a hot skillet, one grilled steak and one
            grilled chicken, topped with white cheese and black beans. Served
            with rice and refried beans
          </p>
          <h5 className="food-price">$13.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Burrito a La Tipica</h4>
          <p className="food-description">
            A large flour tortilla stuffed and wrapped with shredded chicken,
            ground beef, lettuce, tomatoes, topped with delicious yellow queso
            and ranchero sauce
          </p>
          <h5 className="food-price">$11.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Burrito Frito</h4>
          <p className="food-description">
            A flour tortilla stuffed with ground beef and deep-fried to a golden
            brown, topped with yellow cheese sauce
          </p>
          <h5 className="food-price">$10.25</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Burrito Suizo</h4>
          <p className="food-description">
            A large flour tortilla stuffed and wrapped with fajita grilled
            chicken and topped with white queso, salsa Verde and shredded melted
            cheese. Served with rice, sliced avocado, and sour cream. (Not
            served with beans)
          </p>
          <h5 className="food-price">$11.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Durango Burrito</h4>
          <p className="food-description">
            Flour tortilla loaded with carnitas (shredded pork) and topped with
            white cheese, served with fresh guacamole
          </p>
          <h5 className="food-price">$12.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Fajita Burrito</h4>
          <p className="food-description">
            A large flour tortilla stuffed with fajita chicken or fajita steak
            or mix and sauteed vegetables, topped with white queso
          </p>
          <h5 className="food-price">$12.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">California Burrrito</h4>
          <p className="food-description">
            Large flour tortilla filled with steak, rice, beans, lettuce, tomato
            and sour cream. Topped with cheese sauce and chile con carne
          </p>
          <h5 className="food-price">$13.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Wrap Burrito</h4>
          <p className="food-description">
            Choice of meat, lettuce, pico de mango, sliced avocado, sour cream
            and cheese
          </p>
          <h5 className="food-price">
            Grilled Chicken $12.99, Steak $13.99, Shrimp $12.99, Texano $14.99
          </h5>
        </div>
        <div className="card">
          <h4 className="food-title">Burrito Mexicano</h4>
          <p className="food-description">
            Super burrito filled with vegetables and steak topped with green,
            white and red sauce. Served with lettuce, pico de gallo, sour cream
            and guacamole
          </p>
          <h5 className="food-price">$14.99</h5>
        </div>
        <h3 className="menu-category" id="chimichangas">
          Chimichangas
        </h3>
        <span className="menu-category-details">
          Served with Mexican rice and your choice of refried beans, charro
          beans or black beans
        </span>
        <div className="card">
          <h4 className="food-title">Chimi-Mino</h4>
          <p className="food-description">
            A flour tortilla filled with your choice of shredded beef or
            shredded chicken and fried to a golden crisp, with ranchero sauce on
            the side
          </p>
          <h5 className="food-price">$11.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Chimi-Pocket</h4>
          <p className="food-description">
            A 10"flour tortilla served on a hot skillet, filled with grilled
            steak, grilled chicken and veggies, fried to a golden crisp, topped
            with white queso, green sauce and ranchero sauce. Served with pico
            de gallo and sour cream on the side
          </p>
          <h5 className="food-price">For One $13.99 - For Two $18.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Chimi Al Carbon</h4>
          <p className="food-description">
            A large flour tortilla stuffed with grilled chicken, grilled steak
            or grilled shrimp, and fried to a golden crisp. Served with pico de
            gallo, sour cream and white queso on the side
          </p>
          <h5 className="food-price">$13.99 Add Shrimp +$2.50</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Chimi-Chuy</h4>
          <p className="food-description">
            Flour tortilla filled with shrimp, fajita steak, grilled chicken and
            veggies. Topped with white queso, salsa verde and ranchero sauce.
            Served with mexican rice, refried beans, sour cream and guacamole
          </p>
          <h5 className="food-price">$14.99</h5>
        </div>
        <h3 className="menu-category" id="chicken">
          Chicken
        </h3>
        <div className="card">
          <h4 className="food-title">Grilled Chicken Breast</h4>
          <p className="food-description">
            Boneless chicken breast grilled to perfection, topped with white
            queso. Served with rice and a side salad
          </p>
          <h5 className="food-price">$13.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Chicken Tenders</h4>
          <p className="food-description">
            Delicious seasoned, breaded and fried chicken strips served with a
            scrumptious green salad and tender French fries on the side
          </p>
          <h5 className="food-price">$11.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Happy Plate</h4>
          <p className="food-description">
            Grilled chicken strips over a bed of rice topped with white queso
          </p>
          <h5 className="food-price">
            Chicken $12.99, Steak $14.99, Shrimp $15.99
          </h5>
        </div>
        <div className="card">
          <h4 className="food-title">Cami`s Pollo</h4>
          <p className="food-description">
            Grilled chicken breast topped with chorizo, monterey jack cheese and
            cheese sauce. Served with lettuce, pico de mango ans sour cream
          </p>
          <h5 className="food-price">$14.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Pollo Del Mar</h4>
          <p className="food-description">
            Grilled chicken breast cooked with spinach and wine cream sauce.
            Topped with crawfish, shrimp and crab meat. Served with pico de
            mango
          </p>
          <h5 className="food-price">$17.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Pollo Ranchero</h4>
          <p className="food-description">
            Grilled Chicken breast served with California steamed vegetables,
            rice, cheese dip and sliced avocado.
          </p>
          <h5 className="food-price">$15.99</h5>
        </div>
        <h3 className="menu-category" id="fajitas">
          Fajitas On The Grill
        </h3>
        <span className="menu-category-details">
          All our steaks and steak fajitas are 100% USDA prime beef served with
          Pico De Gallo, hot tortillas, Mexican rice, and your choice of refried
          beans, charro beans or black beans. Shredded cheese, guacamole and
          sour cream served upon request
        </span>
        <div className="card">
          <h4 className="food-title">Fiesta Grill Fajitas</h4>
          <p className="food-description">
            A combination of grilled jumbo diablo shrimp, ribs, steak fajita and
            chicken fajitas. Served on a hot skillet over grilled vegetables
          </p>
          <h5 className="food-price">For One $16.99 - For Two $42.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Traditional Fajitas</h4>
          <p className="food-description">
            Fajitas your choice of tender grilled fajita steak, fajita chicken
            or mixed. Served on a hot skillet over sautéed vegetables
          </p>
          <h5 className="food-price">For One $17.99 - For Two $39.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Combo Fajitas</h4>
          <p className="food-description">
            Tender grilled fajita steak, fajita chicken and grilled seasoned
            jumbo shrimp served on a hot skillet over sautéed vegetables
          </p>
          <h5 className="food-price">For One $18.99 - For Two $41.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Shrimp Fajitas</h4>
          <p className="food-description">
            Seasoned and grilled jumbo shrimp served on a hot skillet over
            sautéed vegetables
          </p>
          <h5 className="food-price">For One $18.50 - For Two $39.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Carne Asada</h4>
          <p className="food-description">
            One of Fernando's favorites, a flavorful, well seasoned 10 oz
            rib-eye grilled to order with a cheese enchilada on top and served
            on a hot skillet
          </p>
          <h5 className="food-price">$19.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Fajitas Poblana</h4>
          <p className="food-description">
            Your choice of grilled fajita steak, fajita chicken or mixed, topped
            with poblano peppers, bacon pieces, and melted shredded cheese.
            Served on a hot skillet over sautéed vegetables
          </p>
          <h5 className="food-price">For One $17.99 - For Two $29.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Baby Back Ribs</h4>
          <p className="food-description">
            Juicy baby back ribs marinated in our special chipotle sauce and
            grilled to order
          </p>
          <h5 className="food-price">Half Rack $17.99 - Full Rack $34.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Junior</h4>
          <p className="food-description">
            Fajita chicken, fajita steak and grilled jumbo shrimp on a bed of
            rice with white queso drizzled on top. Served with refried beans,
            sour cream and guacamole
          </p>
          <h5 className="food-price">$16.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Pineapple Fajita</h4>
          <p className="food-description">
            Half pineapple filled with steak, chicken, shrimp and sautéed
            vegetables. Covered with pineapple pico de gallo and white cheese
            sauce
          </p>
          <h5 className="food-price">$18.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Madison Fajita</h4>
          <p className="food-description">
            A sizzling skillet with grilled steak, chicken and shrimp with one
            cheese enchilada
          </p>
          <h5 className="food-price">$15.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Fish Fajita</h4>
          <p className="food-description">
            Two grilled fish fillets with onions and bell peppers
          </p>
          <h5 className="food-price">$18.99</h5>
        </div>

        <h3 className="menu-category" id="fernandosburritos">
          Fernandos Build Your Own Burrito
        </h3>
        <span className="menu-category-details">
          Roll your own Fernando's burrito with an oversized tortilla stuffed
          with your choice of meat, veggies, beans, cheeses and toppings
        </span>
        <div className="card">
          <h4 className="food-title">Fernando's Burritos</h4>
          <p className="food-description">Build your own burrito</p>
          <h6 className="byob">Torilla</h6>
          <p className="byobo">
            Flour, Wheat, Spinach, Jalapeno, Zesty Garlic Herb
          </p>
          <h6 className="byob">Meat</h6>
          <p className="byobo">
            Ground Beef, Grilled Steak, Shredded Chicken, Shrimp(+$2.50),
            Shredded Beef, Grilled Chicken
          </p>
          <h6 className="byob">Beans</h6>
          <p className="byobo">Refried Beans, Black Beans, Charro Beans</p>
          <h6 className="byob">Cheese</h6>
          <p className="byobo">
            Monterey Jack Cheese, Cheddar Cheese, Mixed Cheeses
          </p>
          <h6 className="byob">Topping Or Sauce</h6>
          <p className="byobo">
            White Queso, Ranchero Sauce, Sour Cream Sauce, Yellow Queso, Salsa
            Verde, Chili Con Carne
          </p>
          <h6 className="byob">Additional Items</h6>
          <p className="byobo">
            Romaine Lettuce, Pico de Gallo, Grilled Onions, Diced Tomatoes,
            Jalapenos, Mixed Veggies
          </p>
          <h5 className="food-price">$14.99</h5>
          <span>Other items can be added at additional charge</span>
        </div>
        <h3 className="menu-category" id="housespecialties">
          House Specialties
        </h3>
        <span className="menu-category-details">
          Served with Mexican rice and your choice of refried beans, charro
          beans or black beans
        </span>
        <div className="card">
          <h4 className="food-title">Chiles Rellenos</h4>
          <p className="food-description">
            Fresh poblano pepper stuffed with cheese and your choice of ground
            beef, shredded beef, shredded chicken, fajita chicken, fajita steak
            or grilled shrimp battered and fried then topped white queso with a
            side of sour cream and pico de gallo and guacamole (add shrimp
            +$2.50)
          </p>
          <h5 className="food-price">$14.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Tilapia a La Marina</h4>
          <p className="food-description">
            A blackened grilled tilapia fillet with mango sauce key lime sauce
            and a green salad on the side and rice(not served with beans)
          </p>
          <h5 className="food-price">$15.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Alambre</h4>
          <p className="food-description">
            Your choice of fajita steak, chicken, topped with grilled veggies
            and melted shredded cheese, with lettuce, sour cream and guacamole
          </p>
          <h5 className="food-price">$11.49</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Tamale Plate</h4>
          <p className="food-description">
            Five tamales topped with chili con carne served with rice and beans
          </p>
          <h5 className="food-price">$11.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Tasty Grilled Burger</h4>
          <p className="food-description">
            Out grilled seasoned angus beef patty, with or without cheese,
            lettuce tomatoes and onions with seasoned French fries on the
            side(not served with rice and beans)
          </p>
          <h5 className="food-price">$12.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Chicken Tortilla Soup</h4>
          <p className="food-description">
            A delicious soup cooked with frilled chicken, rice, tomatoes,
            onions, and cilantro. Served with sliced avocado and tortilla chips
            (not served with rice and beans)
          </p>
          <h5 className="food-price">$9.49</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Stuffed Avocado</h4>
          <p className="food-description">
            A deep fried avocado stuffed with your choice of meat, and a sauza
            enchilada. Served with pico de mango and sour cream.
          </p>
          <h5 className="food-price">
            Steak $13.99, Grilled Chicken $12.99, Shrimp $14.99
          </h5>
        </div>
        <div className="card">
          <h4 className="food-title">Baja Shrimp & Chicken</h4>
          <p className="food-description">
            Grilled chicken and shrimp on a bed of rice covered with cheese dip,
            pico de mango and avocado
          </p>
          <h5 className="food-price">$15.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Baja Ribeye & Shrimp</h4>
          <p className="food-description">
            8 oz ribeye and shrimp on a bed of rice covered with cheese sauce,
            pico de mango and avocado
          </p>
          <h5 className="food-price">$16.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Molcajete</h4>
          <p className="food-description">
            Steak, chicken, chorizo, carnitas, shrimp queso fresco, nopales,
            green onion, chile toreado and homemade salsa. Served in a Molcajete
          </p>
          <h5 className="food-price">$21.99</h5>
        </div>
        <h3 className="menu-category" id="enchiladas">
          Enchiladas
        </h3>
        <span className="menu-category-details">
          Served with Mexican rice and your choice of refried beans, charro
          beans or black beans
        </span>
        <div className="card">
          <h4 className="food-title">Enchiladas de Pollo</h4>
          <p className="food-description">
            Two delicious shredded chicken enchiladas topped with sour cream
            sauce
          </p>
          <h5 className="food-price">$10.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Enchiladas de Carne y Queso</h4>
          <p className="food-description">
            Two ground beef enchiladas topped with yellow queso
          </p>
          <h5 className="food-price">$10.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Enchiladas de Queso y Chili</h4>
          <p className="food-description">
            Two cheese enchiladas topped with chill con carne
          </p>
          <h5 className="food-price">$10.25</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Enchiladas Suizas</h4>
          <p className="food-description">
            Three grilled chicken enchiladas covered with white queso, salsa
            Verde and melted shredded cheese, sliced avocado and a side of sour
            cream
          </p>
          <h5 className="food-price">$12.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Enchiladas Combo</h4>
          <p className="food-description">
            One chicken enchilada topped with sour cream sauce, one beef
            enchilada topped with yellow queso, one shrimp enchilada topped with
            ranchero sauce and one cheese enchilada topped with chili con carne
          </p>
          <h5 className="food-price">$14.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Mushroom & Spinach Enchiladas</h4>
          <p className="food-description">
            Two enchiladas stuffed with sautéed mushrooms and spinach, topped
            with white queso
          </p>
          <h5 className="food-price">$10.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Veggie Enchiladas</h4>
          <p className="food-description">
            Two enchiladas stuffed with onions, bell peppers, zucchini and
            mushrooms topped with white queso
          </p>
          <h5 className="food-price">$10.25</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Steak Enchiladas</h4>
          <p className="food-description">
            Three cheese enchiladas topped with a white queso and delicious
            grilled strips of steak on top
          </p>
          <h5 className="food-price">$13.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Spinach Chicken Enchiladas</h4>
          <p className="food-description">
            Two enchiladas stuffed with spinach and grilled chicken then topped
            with white queso
          </p>
          <h5 className="food-price">$12.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Shrimp Enchiladas</h4>
          <p className="food-description">
            Two enchiladas filled with baby shrimp and topped with a choice of
            white queso or ranchero sauce
          </p>
          <h5 className="food-price">$13.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Rodriguez Enchiladas</h4>
          <p className="food-description">
            Three enchiladas stuffed with cheese, topped with pork and a mild
            chipotle sauce
          </p>
          <h5 className="food-price">$12.99</h5>
        </div>
        <h3 className="menu-category" id="seafood">
          Seafood
        </h3>
        <div className="card">
          <h4 className="food-title">Coctel de Camaron</h4>
          <p className="food-description">
            Mexican style shrimp cocktail made with boiled shrimp, pico de
            gallo, avocado and homemade mild tomato cocktail sauce
          </p>
          <h5 className="food-price">$15.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Camarones Ala Mexicana</h4>
          <p className="food-description">
            Shrimp cooked with wine butter, bell pepper, onions, tomato, &
            jalapeños. Served with rice, beans, and a salad
          </p>
          <h5 className="food-price">$16.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Camarones Ala Diablo</h4>
          <p className="food-description">
            Shrimp cooked in a spicy diablo sauce. Served with rice, beans and a
            guacamole salad
          </p>
          <h5 className="food-price">$16.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Camarones Ala Mojo</h4>
          <p className="food-description">
            Jumbo shrimp sauteed with wine and garlic sauce, served on a bed of
            rice. Served with California vegetable blend
          </p>
          <h5 className="food-price">$16.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Red Snapper Veracruz</h4>
          <p className="food-description">
            Grilled fillet topped with our Veracruz sauce. Served with rice,
            lettuce, pico de mango, California steamed vegetables and guacamole
          </p>
          <h5 className="food-price">$17.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Ceviche</h4>
          <p className="food-description">
            Mixture of shrimp or mahi-mahi, lime juice, pineapple pico de gallo,
            red onion, and special spices. Served with tostadas or crackers
          </p>
          <h5 className="food-price">$14.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Diablo Shrimp</h4>
          <p className="food-description">
            Five large grilled shrimp butterflied and stuffed with a slice of
            jalapeño wrapped in bacon and drizzled with white queso. Served with
            rice, avocado slices and tomatoes.
          </p>
          <h5 className="food-price">$16.99</h5>
        </div>
        <h3 className="menu-category" id="combinations">
          Comninations
        </h3>
        <span className="menu-category-details">
          Served with Mexican Rice and your choice of Refried Beans, Charro
          Beans, or Black Beans
        </span>
        <div className="card">
          <h4 className="food-title">Arturo</h4>
          <p className="food-description">
            One cheese enchilada topped with chili con carne, one tamale topped
            with chile cone carne, and one crispy ground beef taco
          </p>
          <h5 className="food-price">$11.25</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Pancho</h4>
          <p className="food-description">
            One cheese enchilada topped with chili con carne, one shredded
            chicken enchilada topped woth sour cream sauce, and one steak
            burrito topped with white queso
          </p>
          <h5 className="food-price">$11.25</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Lorenzo</h4>
          <p className="food-description">
            One chili relleno topped with ranchero suace and white queso, one
            tamale topped with chili con carne, and a steak burrito topped with
            white queso
          </p>
          <h5 className="food-price">$12.75</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Danny</h4>
          <p className="food-description">
            Slices of steak, sauteed vegetables, one shredded chicken enchilada
            topped with sour cream sauce. Served with lettuce, tomatoes, sour
            cram and guacamole
          </p>
          <h5 className="food-price">$12.75</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Jose</h4>
          <p className="food-description">
            One tamale topped with chili con carne, one shredded chicken
            enchilada topped with sour cream sauce, and one ground beef burrito
            topped with yellow queso
          </p>
          <h5 className="food-price">$11.25</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Carlos</h4>
          <p className="food-description">
            One cheese enchilada topped with chili con carne, one ground beef
            enchilada topped with yellow queso, one shredded chicken enchilada
            topped with sour cream sauce, and one crispy ground beef taco
          </p>
          <h5 className="food-price">$12.25</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Adriana</h4>
          <p className="food-description">
            Two flautas stuffed with shredded chicken and wrapped with bacon,
            two ground beef enchiladas topped with yellow queso. Served with
            lettuce, tomatoes, sour cream, and a side of white queso (not served
            with rice and beans)
          </p>
          <h5 className="food-price">$11.75</h5>
        </div>
        <h3 className="menu-category" id="alacarte">
          A La Carte
        </h3>
        <span className="menu-category-details">
          A La Carte items do not include chips & salsa or queso dip
        </span>
        <div className="card">
          <h4 className="food-title">Crispy or soft taco</h4>
          <p className="food-description">
            A soft or hard shell taco with your choice of ground beef, shredded
            chicken, or shredded beef
          </p>
          <h5 className="food-price">$3.25</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Mexican Taco</h4>
          <p className="food-description">
            One mexican taco with your choice of protein
          </p>
          <h5 className="food-price">$4.25</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Fernando`s Taco</h4>
          <p className="food-description">
            One fernando`s taco with a fried cruchy shell with your choice of
            protein
          </p>
          <h5 className="food-price">Small $3.99 - Large $4.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Chorizo</h4>
          <p className="food-description">an order of chorizo meat</p>
          <h5 className="food-price">$3.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Fajita Taco</h4>
          <p className="food-description">
            a hard or soft shell taco with your choice of steak or grilled
            chicken
          </p>
          <h5 className="food-price">$4.25</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Fish or Shrimp Taco</h4>
          <p className="food-description">
            a hard or soft shell taco with your choice of fish or shrimp
          </p>
          <h5 className="food-price">$4.49</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Shrimp Enchilada</h4>
          <p className="food-description">
            a single enchilada filled with shrimp
          </p>
          <h5 className="food-price">$4.25</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Enchilada</h4>
          <p className="food-description">
            a single enchilada filled with your choice of shredded beef, ground
            beef, shredded chicken, or cheese
          </p>
          <h5 className="food-price">$3.49</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Bean Burrito</h4>
          <p className="food-description">
            a single burrito filled with beans topped with white queso.
          </p>
          <h5 className="food-price">Small $3.25 - Large $4.25</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Burrito</h4>
          <p className="food-description">
            a single burrito filled with shredded beef, ground beef, or shredded
            chicken
          </p>
          <h5 className="food-price">Small $4.25 - Large $5.25</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Fajita Burrito</h4>
          <p className="food-description">
            a single burrito filled with steak, grilled chicken, or shrimp
          </p>
          <h5 className="food-price">Small $5.49 - Large $7.49</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Chili Relleno</h4>
          <p className="food-description">
            a single chili relleno stuffed with your choice of protein
          </p>
          <h5 className="food-price">$5.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Chimichanga</h4>
          <p className="food-description">
            a single chimichanga stuffed with shredded beef, ground beef, or
            shredded chicken
          </p>
          <h5 className="food-price">Small $4.99 - Large $8.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Fajita Chimichanga</h4>
          <p className="food-description">
            a single chimichanga stuffed with your choice of steak or grilled
            chicken
          </p>
          <h5 className="food-price">Small $6.55 - Large $8.55</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Shrimp Chimichanga</h4>
          <p className="food-description">
            a single chimichanga stuffed with shrimp
          </p>
          <h5 className="food-price">Small $4.99 Large $8.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Tamale</h4>
          <p className="food-description">
            a single Tamale topped with chili con carne
          </p>
          <h5 className="food-price">$2.25</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Tamales</h4>
          <p className="food-description">
            a half dozen or a dozen tamles topped with chili con carne
          </p>
          <h5 className="food-price">1/2 Dozen $7.99 Dozen $9.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Charro Beans</h4>
          <p className="food-description">a cup of charro beans</p>
          <h5 className="food-price">$3.49</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Mexican Rice</h4>
          <p className="food-description">a plate of mexican rice</p>
          <h5 className="food-price">$2.75</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Black Beans</h4>
          <p className="food-description">a cup of black beans</p>
          <h5 className="food-price">$3.49</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Refried Beans</h4>
          <p className="food-description">a plate of refried beans</p>
          <h5 className="food-price">$2.75</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Grilled Veggies</h4>
          <p className="food-description">a plate of Grilled Veggies</p>
          <h5 className="food-price">$3.59</h5>
        </div>
        <div className="card">
          <h4 className="food-title">French Fries</h4>
          <p className="food-description">a plate of French Fries</p>
          <h5 className="food-price">$3.25</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Guacamole</h4>
          <p className="food-description">an order of guacamole</p>
          <h5 className="food-price">Small $4.25 - Large $7.39</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Chips</h4>
          <p className="food-description">an order of chips</p>
          <h5 className="food-price">Small $2.99 - Large $3.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Salsa</h4>
          <p className="food-description">an order of salsa</p>
          <h5 className="food-price">Small $3.25 - Large $4.25</h5>
        </div>
        <h3 className="menu-category" id="makeyourowncombo">
          Make Your Own Combo
        </h3>
        <span className="menu-category-details">
          Served with Mexican Rice and your choice of Refried Beans, Charro
          Beans, or Black Beans
        </span>
        <div className="card">
          <h4 className="food-title">MYOC</h4>
          <p className="food-description">Make Your Own Combo</p>
          <h6 className="byob">Enchilada</h6>
          <p className="byobo">Ground Beef, Chicken or Cheese</p>
          <h6 className="byob">Burrito</h6>
          <p className="byobo">
            Ground Beef, Shredded Chicken, Beans, Fajita Steak, Grilled Chicken,
            or Shrimp
          </p>
          <h6 className="byob">Chimi Burrito</h6>
          <p className="byobo">Beef or Chicken</p>
          <h6 className="byob">Crispy Taco</h6>
          <p className="byobo">Ground Beef or Shredded Chicken</p>
          <h6 className="byob">Soft Taco</h6>
          <p className="byobo">Ground Beef or Shredded Chicken</p>
          <h6 className="byob">Fajitas Taco</h6>
          <p className="byobo">
            Steak or Grilled Chicken add $1.00 Shrimp $1.75 (additional or
            substituted items may cost extra)
          </p>
          <h5 className="food-price">
            Choice of: 2 items $9.99 - 3 items $10.99 - 4 items $11.99
          </h5>
        </div>
        <h2 className="section-title" id="lunchmenu">
          Lunch Menu
        </h2>

        <span className="menu-category-details">
          Lunch is served until 3:00PM. If ording from the lunch menu after
          3:00PM a $2.00 charge will be added to the dish
        </span>
        <MdRestaurantMenu className="menu-icon" />
        <div className="card">
          <h4 className="food-title">1) Taco Salad</h4>
          <p className="food-description">
            Large flour tortilla shell filled with lettuce, ground beef, chili,
            beans, rice, shredded cheeses, green onions, black olives, and sour
            cream
          </p>
          <h5 className="food-price">$9.75</h5>
        </div>
        <div className="card">
          <h4 className="food-title">2) Pinata Salad</h4>
          <p className="food-description">
            Flat flour tortilla shell topped with lettuce, rice, beans, ground
            beef, shredded chicken, chili, shredded cheeses, black olives, green
            onions, and sour cream
          </p>
          <h5 className="food-price">$9.75</h5>
        </div>
        <div className="card">
          <h4 className="food-title">3) Taco Plate</h4>
          <p className="food-description">
            Two crispy tacos filled with ground beef lettuce, tomatoes, and
            cheese. Served with rice, beans, and ranchera sauce
          </p>
          <h5 className="food-price">$9.75</h5>
        </div>
        <div className="card">
          <h4 className="food-title">4) Small Appetite</h4>
          <p className="food-description">
            One chicken enchilada topped with sour cream sauce and one crispy
            beef taco. Served with rice and beans
          </p>
          <h5 className="food-price">$9.75</h5>
        </div>
        <div className="card">
          <h4 className="food-title">5) Burrito Frito</h4>
          <p className="food-description">
            Flour tortilla filled with ground beef, fried golden brown, and
            topped with cheese sauce. Served with rice and beans
          </p>
          <h5 className="food-price">$9.75</h5>
        </div>
        <div className="card">
          <h4 className="food-title">6) Tamale Plate</h4>
          <p className="food-description">
            Four beef tamales topped with chili con came and cheese. Served with
            rice and beans
          </p>
          <h5 className="food-price">$9.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">7) Burrito a La Tipica</h4>
          <p className="food-description">
            Flour tortilla filled with lettuce, tomatoes ground beef and
            shredded chicken and topped with cheese sauce and ranchera sauce.
            Served with rice and beans
          </p>
          <h5 className="food-price">$10.25</h5>
        </div>
        <div className="card">
          <h4 className="food-title">8) Beef Chimichanga</h4>
          <p className="food-description">
            Flour tortilla filled with shredded beef and different cheeses and
            fried golden brown. Served with ranchera sauce and rice and beans
          </p>
          <h5 className="food-price">$10.25 - with queso $10.50</h5>
        </div>
        <div className="card">
          <h4 className="food-title">9) Lunch Quesadilla</h4>
          <p className="food-description">
            Flour tortilla filled with ground beef shredded chicken and melted
            together with cheese. Served with guacamole and sour cream
          </p>
          <h5 className="food-price">$10.50</h5>
        </div>
        <div className="card">
          <h4 className="food-title">10) Enchilada Plate</h4>
          <p className="food-description">
            One cheese enchilada topped with chili con carne, one beef enchilada
            topped with cheese sauce, and one chicken enchilada topped with sour
            cream sauce. Served with rice and beans
          </p>
          <h5 className="food-price">$10.50</h5>
        </div>
        <div className="card">
          <h4 className="food-title">11) Combination Plate</h4>
          <p className="food-description">
            One chicken enchilada topped with sour cream sauce, one beef burrito
            topped with cheese sauce, and one crispy beef taco. Served with rice
            and beans
          </p>
          <h5 className="food-price">$10.50</h5>
        </div>
        <div className="card">
          <h4 className="food-title">12) Tacos Al Carbon</h4>
          <p className="food-description">
            Two flour tortillas filled with fajita beef and topped with sautéed
            vegetables served with rice and beans
          </p>
          <h5 className="food-price">$10.50</h5>
        </div>
        <div className="card">
          <h4 className="food-title">13) Enchiladas Suizas</h4>
          <p className="food-description">
            Two chicken enchiladas topped with green sauce and melted cheese.
            Served with rice, beans, and sour cream
          </p>
          <h5 className="food-price">$10.75</h5>
        </div>
        <div className="card">
          <h4 className="food-title">14) Chimiburrito</h4>
          <p className="food-description">
            One small burrito Frito with cheese sauce and one small beef
            chimichanga topped with white cheese. Served with rice and beans
          </p>
          <h5 className="food-price">$10.50</h5>
        </div>
        <div className="card">
          <h4 className="food-title">15) Crunchy Taco</h4>
          <p className="food-description">
            Two small Fernando's tacos with shredded beef lettuce, tomatoes and
            shredded cheese served with rice and beans
          </p>
          <h5 className="food-price">$10.50</h5>
        </div>
        <div className="card">
          <h4 className="food-title">16) Lunch Fajitas</h4>
          <p className="food-description">
            Your choice of chicken or beef served over sautéed vegetables served
            with rice, beans, guacamole, sour cream pico de gallo, and homemade
            tortillas
          </p>
          <h5 className="food-price">$11.75</h5>
        </div>
        <div className="card">
          <h4 className="food-title">17) Shrimp Burrito</h4>
          <p className="food-description">
            Flour tortilla filled with sautéed vegetables and baby shrimp,
            wrapped and topped with ranchera sauce served with rice and beans
          </p>
          <h5 className="food-price">$11.75</h5>
        </div>
        <div className="card">
          <h4 className="food-title">18) Fajita Poblana</h4>
          <p className="food-description">
            Your choice of chicken or beef served over sautéed vegetables and
            topped with melted cheese. Served with rice and beans, guacamole
            sour cream Pico De Gallo, and homemade tortillas
          </p>
          <h5 className="food-price">$12.25</h5>
        </div>
        <div className="card">
          <h4 className="food-title">19) Fajita Salad</h4>
          <p className="food-description">
            Your choice of beef or chicken fajita served with a combo of sautéed
            vegetables cheese sour cream, and guacamole
          </p>
          <h5 className="food-price">$11.50</h5>
        </div>
        <div className="card">
          <h4 className="food-title">20) Cheese & Steak Enchilada</h4>
          <p className="food-description">
            Two cheese enchiladas topped with white cheese sauce and steak
            served with rice and beans
          </p>
          <h5 className="food-price">$11.75</h5>
        </div>
        <div className="card">
          <h4 className="food-title">21) Burrito Suizo</h4>
          <p className="food-description">
            Chicken or beef fajita burrito topped with white cheese sauce.
            Served with rice, sour cream, and sliced avocado
          </p>
          <h5 className="food-price">$11.50</h5>
        </div>
        <div className="card">
          <h4 className="food-title">22) Fajita Tacos</h4>
          <p className="food-description">
            Two soft tacos filled with fajita beef sautéed vegetables and
            shredded cheese served with rice, beans, and white cheese sauce
          </p>
          <h5 className="food-price">$11.75</h5>
        </div>
        <div className="card">
          <h4 className="food-title">23) Three Amigos Quesadilla</h4>
          <p className="food-description">
            Flour tortilla filled with shrimp, chicken and beef fajita. Served
            with shredded cheese, lettuce, tomatoes, sour cream, and guacamole
          </p>
          <h5 className="food-price">$11.75</h5>
        </div>
        <div className="card">
          <h4 className="food-title">24) Grilled Chicken Breast</h4>
          <p className="food-description">
            Grilled chicken breast on a bed of rice and topped with white cheese
            sauce served with a side salad
          </p>
          <h5 className="food-price">$11.75</h5>
        </div>
        <div className="card">
          <h4 className="food-title">25) Burrito Mexicano</h4>
          <p className="food-description">
            A burrito filled with shrimp, chicken and beef fajita topped with
            salsa Verde, white cheese, and ranchera sauce. Served with rice and
            beans
          </p>
          <h5 className="food-price">$11.75</h5>
        </div>
        <div className="card">
          <h4 className="food-title">26) Carne Guisada</h4>
          <p className="food-description">
            This beef is cooked with Fernando's mom's famous recipe. Served with
            rice and beans
          </p>
          <h5 className="food-price">$11.75</h5>
        </div>
        <div className="card">
          <h4 className="food-title">27) Fiesta Sampler</h4>
          <p className="food-description">
            Chicken flautas, beef quesadillas, and mixed fajita nachos. Served
            with pico de gallo, guacamole sour cream, white and yellow cheese
          </p>
          <h5 className="food-price">$11.75</h5>
        </div>
        <div className="card">
          <h4 className="food-title">28) Lunch Fajita Combo</h4>
          <p className="food-description">
            Grilled chicken, fajita steak and seasoned jumbo shrimp over sautéed
            vegetables, all on a sizzling skillet. Served with rice, refried
            beans, sour cream guacamole, pico de gallo and homemade tortillas
          </p>
          <h5 className="food-price">$12.25</h5>
        </div>
        <div className="card">
          <h4 className="food-title">29) Happy, Happy Plate</h4>
          <p className="food-description">
            Our delicious fajita chicken and seasoned grilled shrimp served over
            a bed of rice and topped with white queso. Served with lettuce, sour
            cream and pico de gallo
          </p>
          <h5 className="food-price">$12.75</h5>
        </div>
        <div className="card">
          <h4 className="food-title">30) Chris Combo</h4>
          <p className="food-description">
            Two fajitas grilled chicken strips two fajita steak strips and two
            seasoned grilled shrimp on a plate and served with rice refried
            beans sour cream, guacamole and pico de gallo
          </p>
          <h5 className="food-price">$12.75</h5>
        </div>
      </div>
    </div>
  );
};

export default Menu;
