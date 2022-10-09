import React from "react";
import { Grid, Button, Container, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { commerce } from "../../lib/commerce";
import { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";

const createMarkup = (text) => {
  return { __html: text };
};

const View = ({ onAddToCart }) => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchProduct = async (id) => {
    const response = await commerce.products.retrieve(id);
    const { name, price, image, quantity, description } = response;
    setProduct({
      id,
      name,
      quantity,
      description,
      src: image.url,
      price: price.formatted_with_symbol,
    });
  };

  useEffect(() => {
    const id = window.location.pathname.split("/");
    fetchProduct(id[2]);
  }, []);

  const handleQuantity = (param) => {
    if (param === "decries" && quantity > 1) {
      setQuantity(quantity - 1);
    }
    if (param === "increase" && quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <Container
      style={{
        height: "80vh",
        display: "flex",
        alignItems: "center",
        margin: "150px 0 100px 0",
      }}
    >
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          md={8}
          style={{
            width: "100%",
          }}
        >
          <img
            onLoad={() => {
              setLoading(false);
            }}
            src={product.src}
            alt={product.name}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{
            color: "#ffffff",
          }}
        >
          <Typography variant="h2">{product.name}</Typography>
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={createMarkup(product.description)}
          />
          <Typography variant="h3">Price: {product.price}</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Button
                size="small"
                variant="contained"
                style={{
                  backgroundColor: "#03dac5",
                  borderColor: "#03dac5",
                }}
                onClick={() => {
                  handleQuantity("increase");
                }}
              >
                +
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography
                style={{
                  marginbottom: "5px",
                }}
                variant="h3"
              >
                Quantity: {quantity}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                size="small"
                color="secondary"
                variant="contained"
                onClick={() => {
                  handleQuantity("decries");
                }}
              >
                -
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                size="large"
                style={{
                  marginRight: "10px",
                }}
                onClick={() => {
                  onAddToCart(product.id, quantity);
                }}
              >
                <ShoppingCart /> Add to basket
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {loading && <Spinner />}
    </Container>
  );
};

export default View;
