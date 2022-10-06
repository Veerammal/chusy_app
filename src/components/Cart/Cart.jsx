import React, { useState } from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const [orderUrl, setOrderUrl] = useState("");

  const classes = useStyles();


  const handleEmptyCart = () => onEmptyCart();

  const showCartDetails = () => {
    console.log("Ordering product details are displaying here");
    console.log(cart);
    setOrderUrl("*CHUSY%20ONLINE%20ORDER*%0A____________________________%0A%0A%0A*Total%20Order%3A*%20" 
    + cart.total_items 
    + "%0A*Products%20Count%3A*%20" 
    + cart.total_unique_items 
    + "%0A*Total%20Amount%3A*%20" 
    + cart.subtotal.formatted_with_symbol 
    + "%0A%0A-----------------------------%0A*" + 
    "Product%20Name%3A*%20" + 
    "line_items%5Bi%5D.name%0A*Product%20Image%20URL%3A*%20line_items%5Bi%5D.image.url%0A*Product%20Quantity%3A*%20line_items%5Bi%5D.quantity%0A*Product%20Price%3A*%20line_items%5Bi%5D.price.formatted_with_symbol%0A*Total%20Price%3A*%20line_items%5Bi%5D.line_total.formatted_with_symbol%0A-----------------------------");
  };

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart,
      <Link className={classes.link} to="/">start adding some</Link>!
    </Typography>
  );

  const renderLoading = () => (
    <Typography variant="h1">
      Loading...
    </Typography>
  );

  console.log("We are inside cart");
  console.log(cart);
  if (cart ? !cart.line_items : false) return (<h1>Loading</h1>);

  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={4} key={lineItem.id}>
            <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
          {/* <Button class1Name={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button> */}
          <Button className={classes.checkoutButton}  href={"http://Wa.me/919360234777?text=" + orderUrl} size="large" type="button" variant="contained" color="primary" onClick={showCartDetails}>Place Order</Button>
          {/* href="http://Wa.me/919360234777?text=*CHUSY%20ONLINE%20ORDER*%0A____________________________%0A%0A%0A*Total%20Order%3A*%20total_items%0A*Products%20Count%3A*%20total_unique_items%0A*Total%20Amount%3A*%20subtotal.formatted_with_symbol%0A%0A-----------------------------%0A*Product%20Name%3A*%20line_items%5Bi%5D.name%0A*Product%20Image%20URL%3A*%20line_items%5Bi%5D.image.url%0A*Product%20Quantity%3A*%20line_items%5Bi%5D.quantity%0A*Product%20Price%3A*%20line_items%5Bi%5D.price.formatted_with_symbol%0A*Total%20Price%3A*%20line_items%5Bi%5D.line_total.formatted_with_symbol%0A-----------------------------" */}
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
      { cart ? (!cart.line_items.length ? renderEmptyCart() : renderCart()) : renderLoading()}
    </Container>
  );
};

export default Cart;
