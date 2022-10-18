import React, { useState } from "react";
import { Container, Typography, Button, Grid, IconButton } from "@material-ui/core";
import { ShoppingBasket, ShoppingCart, ArrowBack } from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";

import CartItem from "./CartItem/CartItem";

import Spinner from "../Spinner/Spinner";

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {

  const [orderUrl, setOrderUrl] = useState("");
  
  const history = useHistory();

  const handleEmptyCart = () => onEmptyCart();

  const showCartDetails = () => {
    console.log("Ordering product details are displaying here");
    console.log(cart);
    var prods = "";
    for (let i = 0; i < cart.line_items.length; i++) {
      prods +=
        "%0A*Product%20Name%3A*%20" +
        cart.line_items[i].name +
        "%0A*Product%20Image%20URL%3A*%20" +
        cart.line_items[i].image.url +
        "%0A*Product%20Quantity%3A*%20" +
        cart.line_items[i].quantity +
        "%0A*Product%20Price%3A*%20" +
        cart.line_items[i].price.formatted_with_symbol +
        "%0A*Total%20Price%3A*%20" +
        cart.line_items[i].line_total.formatted_with_symbol +
        "%0A-----------------------------";
    }
    console.log(prods);

    setOrderUrl(
      "*CHUSY%20ONLINE%20ORDER*%0A____________________________" +
        prods +
        "%0A%0A%0A*Total%20Order%3A*%20" +
        cart.total_items +
        "%0A*Products%20Count%3A*%20" +
        cart.total_unique_items +
        "%0A*Total%20Amount%3A*%20" +
        cart.subtotal.formatted_with_symbol
    );
    console.log(orderUrl);
  };

  const renderEmptyCart = () => (
   
    <div
      style={{
        // paddingTop: "150px",
        width: "100%",
        height: "96vh",
        display: "flex",
        alignItems: "center",
        background: "#f3d9fa",
        overflow: "hidden",
      }}
    >
      <IconButton onClick={() => history.goBack()}>
          <ArrowBack htmlColor="#D750DF" />
        </IconButton>

      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography
              style={{
                fontSize: "45px",
                marginBottom: "20px",
              }}
              variant="h1"
            >
              You have no items in your shopping cart
            </Typography>
            <Button
              style={{
                color: "#000000",
                backgroundColor: "gold",
              }}
              component={Link}
              to="/shop"
            >
              Go to Shopping &nbsp; <ShoppingCart />
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );

  const renderLoading = () => <Spinner />;

  console.log("We are inside cart");
  console.log(cart);
  // if (cart ? !cart.line_items : false) return <h1>Loading</h1>;

  const renderCart = () => (
    <>

<div style={{
paddingTop: "70px",
background: "#f3d9fa",
width: "100%",
overflow: "hidden",
}}>
<IconButton onClick={() => history.goBack()}>
          <ArrowBack htmlColor="#D750DF" />
        </IconButton>
    
      <Grid
      container 
      spacing={2} 
      justifyContent="center"
      >
        {cart.line_items.map((lineItem) => (
          <Grid item
          xs={12}
          sm={6}
          md={3}
          lg={3} key={lineItem.id}>
            <CartItem
              item={lineItem}
              onUpdateCartQty={onUpdateCartQty}
              onRemoveFromCart={onRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div style={{
    display: "flex",
    marginTop: "10%",
    width: "100%",
    justifyContent: "space-between",
  }}>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            style={{
            width: "150px",
            margin: "10px",
          }}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            Empty cart
          </Button>
          {/* <Button class1Name={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button> */}
          <Button
            style={{
            minWidth: "150px",
          }}
            href={"http://Wa.me/916369119553?text=" + orderUrl}
            size="large"
            type="button"
            variant="contained"
            color="primary"
            onClick={showCartDetails}
          >
            Place Order &nbsp; <ShoppingBasket />
          </Button>
          {/* href="http://Wa.me/919360234777?text=*CHUSY%20ONLINE%20ORDER*%0A____________________________%0A%0A%0A*Total%20Order%3A*%20total_items%0A*Products%20Count%3A*%20total_unique_items%0A*Total%20Amount%3A*%20subtotal.formatted_with_symbol%0A%0A-----------------------------%0A*Product%20Name%3A*%20line_items%5Bi%5D.name%0A*Product%20Image%20URL%3A*%20line_items%5Bi%5D.image.url%0A*Product%20Quantity%3A*%20line_items%5Bi%5D.quantity%0A*Product%20Price%3A*%20line_items%5Bi%5D.price.formatted_with_symbol%0A*Total%20Price%3A*%20line_items%5Bi%5D.line_total.formatted_with_symbol%0A-----------------------------" */}
        </div>
      </div>
      </div>
    </>
  );

  return (
    <>
      
      
      {cart
        ? (cart.line_items ? !cart.line_items.length : true)
          ? renderEmptyCart()
          : renderCart()
        : renderLoading()}
    </>
  );
};

export default Cart;


 // <Typography variant="subtitle1">You have no items in your shopping cart,
    //   <Link className={classes.link} to="/">start adding some</Link>!
    // </Typography>

    /* <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography> */