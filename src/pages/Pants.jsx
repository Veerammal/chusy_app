import React from "react";
import { Grid } from "@material-ui/core";

import Product from "../components/Products/Product/Product";
// import useStyles from './styles';
import Spinner from "../components/Spinner/Spinner";

const Pants = ({ pants, onAddToCart }) => {
  // const classes = useStyles();
  

  console.log(pants.length);
  if (!pants.length) return <Spinner />;

  return (
    <>
    <div
      style={{ 
        overflow: "hidden",
        background: "#f3d9fa",
        paddingTop: "70px",
        width: "100%",
      }}
    >
      
              <Grid container justifyContent="center" spacing={4}>
                {pants.map((pant) => (
                  <Grid item key={pant.id} xs={12} sm={6} md={3} lg={3} 
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    m: 10,
                    p: 10,
                  }}>
                    <Product product={pant} onAddToCart={onAddToCart} />
                  </Grid>
                ))}
              </Grid>
          
          </div>
        
   
  </>

  );
};

export default Pants;
 

