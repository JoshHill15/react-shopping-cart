import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Contexts
import ProductContext from "./contexts/ProductContext";
import CartContext from "./contexts/CartContext";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    // add the given item to the cart
    const newItem = {
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image
    };
    setCart([...cart, newItem]);
  };

  const removeItem = id => {
  setCart(cart.filter(item => item.id !== id))


  // setCart(cart.filter(item => {
  //   if (item.id !== id){
  //     return item
  //   }
  // }))

  }

  return (
    <div className="App">
      <ProductContext.Provider value={{ products, addItem }}>
        <CartContext.Provider value = {{ cart, removeItem }} >
          <Navigation />
          {/* Routes */}
          <Route exact path="/" component={Products} />
          <Route path="/cart" component={ShoppingCart} />
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
