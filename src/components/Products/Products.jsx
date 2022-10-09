import React from 'react';
import { Grid, Container, Typography } from "@material-ui/core";

import Product from './Product/Product';
// import useStyles from './styles';
import Spinner from '../Spinner/Spinner';

const Products = ({ categories, onAddToCart }) => {
  // const classes = useStyles();

  if (!categories.length) return(<Spinner />);

  return (
    <>
    
    {/* <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4} >
        {categories.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main> */}

<div style={{
          paddingTop: "70px"
        }}>
        {categories.map((category, index) =>
          category.productsData.length ? (
            <div
              key={category.id}
              style={ {
                paddingBottom: "20px",
              }}
            >
              <Container>
                <Typography style={{
  paddingBottom: "20px",
  paddingTop: "20px",
}} variant="h3" component="h2">
                  {category.name}
                </Typography>
                <Grid container spacing={4}>
                  {category.productsData.map((product) => (
                    <Grid key={product.id} item xs={12} sm={6} md={4}>
                      <Product
                        product={product}
                        onAddToCart={onAddToCart}
                        
                      />
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </div>
          ) : null
        )}
      </div>

    </>
  );
};

export default Products;

