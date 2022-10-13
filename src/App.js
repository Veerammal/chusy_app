import React, { useState, useEffect } from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar, Products, Cart, Footer, View } from "./components";
import { Home } from "./pages";
import { commerce } from "./lib/commerce";

const App = () => {
  const [categories, setCategories] = useState([]);

  const [tops, setTops] = useState([]);
  const [chudis, setChudis] = useState([]);
  const [blouses, setBlouses] = useState([]);
  const [pants, setPants] = useState([]);
  const [others, setOthers] = useState([]);

  
  const [cart, setCart] = useState({});

  const fetchProductsPerCategory = async () => {
    // const { data: products } = await commerce.products.list({ limit: 200 });
    const { data: products } = await commerce.products.list();
    console.log("products are fetched");
    console.log(products);
    const { data: categories } = await commerce.categories.list();
    console.log("categories are fetched");
    console.log(categories);
    
    const productsPerCategory = categories.reduce((acc, category) => {
      return [
        ...acc,
        {
          ...category,
          productsData: products.filter((product) =>
            product.categories.find((cat) => cat.id === category.id)
          ),
        },
      ];
    }, []);
    console.log("productsPerCategory are reduced and filtered");
    console.log(productsPerCategory);
    setCategories(productsPerCategory);

    var categoriesCount = productsPerCategory.length;
    console.log(categoriesCount);

    for(var i = 0; i < categoriesCount; i++) {
      if(productsPerCategory[i].slug === "tops") {
        setTops(productsPerCategory[i].productsData);
        console.log(productsPerCategory[i].productsData);
        console.log("Fetched Tops");
        console.log(tops);
      }else if(productsPerCategory[i].slug === "chudis") {
        setChudis(productsPerCategory[i]);
      }else if(productsPerCategory[i].slug === "pants") {
        setPants(productsPerCategory[i]);
      }else if(productsPerCategory[i].slug === "blouses") {
        setBlouses(productsPerCategory[i]);
      }else if(productsPerCategory[i].slug === "others") {
        setOthers(productsPerCategory[i]);
      }
    }
    console.log("Tops");
    console.log(tops);
    console.log("Chudis");
    console.log(chudis);
    console.log("Blouses");
    console.log(blouses);
    console.log("Pants");
    console.log(pants);
    console.log("Others");
    console.log(others);

  };

  
  const fetchCart = async () => {
    const cartdata = await commerce.cart.retrieve();
    // console.log("Fetching our cart from commercejsapi");
    // console.log(cartdata);
    setCart(cartdata);
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    console.log("Product added to the cart successfully");
    console.log(item);
    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });
    console.log("Product updated to the cart successfully");
    console.log(response);
    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);
    console.log("Product removed from the cart successfully");
    console.log(response);
    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    console.log("Cart emptied successfully");
    console.log(response);
    setCart(response.cart);
  };

  // const refreshCart = async () => {
  //   const newCart = await commerce.cart.refresh();
  //   console.log("Cart refreshed successfully");
  //   console.log(newCart);
  //   setCart(newCart);
  // };

  useEffect(() => {
    console.log("Product per Category are going to be fetched");
    fetchProductsPerCategory();
  }, []);

  // categories ,tops, chudis, pants, blouses, others

  useEffect(() => {
    fetchCart();
  }, [cart]);

  
  return (
    <Router>
      <CssBaseline />
      <Navbar
        totalItems={cart ? cart.total_items : ""}
      />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/shop">
          <Products categories={categories} onAddToCart={handleAddToCart} />
        </Route>

        <Route exact path="/tops">
          <Products categories={tops} onAddToCart={handleAddToCart} />
        </Route>

        <Route exact path="/chudis">
          <Products categories={chudis} onAddToCart={handleAddToCart} />
        </Route>

        <Route exact path="/pants">
          <Products categories={pants} onAddToCart={handleAddToCart} />
        </Route>

        <Route exact path="/blouses">
          <Products categories={blouses} onAddToCart={handleAddToCart} />
        </Route>

        <Route exact path="/others">
          <Products categories={others} onAddToCart={handleAddToCart} />
        </Route>

        <Route exact path="/cart">
          <Cart
            cart={cart}
            onUpdateCartQty={handleUpdateCartQty}
            onRemoveFromCart={handleRemoveFromCart}
            onEmptyCart={handleEmptyCart}
          />
        </Route>

        <Route exact path="/view/:id">
          <View onAddToCart={handleAddToCart} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
