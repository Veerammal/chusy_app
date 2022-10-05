import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, useNavigate } from 'react-router-dom';

import { Navbar, Products, Cart } from './components';
import { commerce } from './lib/commerce';

const App = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({ });
  // const [order, setOrder] = useState({});
  // const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    console.log("Products fetched from commercejsapi");
    console.log(data);
    setProducts(data);
  };

  const fetchCart = async () => {
    const cartdata = await commerce.cart.retrieve()
    console.log("Fetching our cart from commercejsapi");
    console.log(cartdata)
    setCart(cartdata);
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    console.log("Product added to the cart successfully");
    console.log(item);
    setCart(item.cart);
    window.location.reload();
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });
    console.log("Product updated to the cart successfully");
    console.log(response);
    setCart(response.cart);
    window.location.reload();
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);
    console.log("Product removed from the cart successfully");
    console.log(response);
    setCart(response.cart);
    window.location.reload();
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    console.log("Cart emptied successfully");
    console.log(response);
    setCart(response.cart);
    navigate('/');
  };

  // const refreshCart = async () => {
  //   const newCart = await commerce.cart.refresh();
  //   console.log("Cart refreshed successfully");
  //   console.log(newCart);
  //   setCart(newCart);
  // };

  // const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
  //   try {
  //     const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

  //     setOrder(incomingOrder);

  //     refreshCart();
  //   } catch (error) {
  //     setErrorMessage(error.data.error.message);
  //   }
  // };

  useEffect(() => {
    console.log("Product and cart are going to be fetched");
    fetchProducts();
    fetchCart();
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <CssBaseline />
        <Navbar totalItems={cart.total_items} handleDrawerToggle={handleDrawerToggle} />
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
          </Route>
          {/* <Route path="/checkout" exact>
            <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
