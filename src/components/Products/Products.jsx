import React from "react";
import { Divider, Grid, Typography } from "@material-ui/core";

import Product from "./Product/Product";
// import useStyles from './styles';
import Spinner from "../Spinner/Spinner";

const Products = ({ categories, onAddToCart }) => {
  // const classes = useStyles();

  console.log(categories);
  if (!categories.length) 
    return <Spinner />;

  return (
    <>
      <div
        style={{
          paddingTop: "70px",
          background: "#f3d9fa",
          width: "100%",
          overflow: "hidden",
        }}
      >

        {categories.map((category) => (
          <div
            key={category.id}
            style={{
              paddingBottom: "20px",
              width: "100%",
            }}
          >

            {/* Category Name */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                style={{
                  align: "center",
                  paddingBottom: "20px",
                  paddingTop: "20px",
                  fontSize: "28px",
                }}
              >
                {category.name}
              </Typography>
            </div>
          {/* Category name ends */}

            <Grid 
            container 
            justifyContent="center" 
            spacing={1}
            style={{
              width: '100%',
              overflow: "hidden",
            }}>
              {category.productsData.map((product) => (
                <Grid
                  item
                  key={product.id}
                  xs={6}
                  sm={6}
                  md={3}
                  lg={3}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    m: 10,
                    p: 10,
                  }}
                >
                  <Product product={product} onAddToCart={onAddToCart} />
                </Grid>
              ))}
            </Grid>
            <Divider/>
          </div>          
        ))}
      </div>
    </>
  );
};

export default Products;

/* <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4} >
        {categories.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main> */
