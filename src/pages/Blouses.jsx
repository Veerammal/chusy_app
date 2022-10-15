import React from "react";
import { Grid } from "@material-ui/core";

import Product from "../components/Products/Product/Product";
// import useStyles from './styles';
import Spinner from "../components/Spinner/Spinner";

const Others = ({ blouses, onAddToCart }) => {
  // const classes = useStyles();
  

  console.log(blouses.length);
  if (!blouses.length) return <Spinner />;

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
                {blouses.map((blouse) => (
                  <Grid item key={blouse.id} xs={12} sm={6} md={3} lg={3} 
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    m: 10,
                    p: 10,
                  }}>
                    <Product product={blouse} onAddToCart={onAddToCart} />
                  </Grid>
                ))}
              </Grid>
          
          </div>
        
   
  </>

  );
};

export default Others;
 

