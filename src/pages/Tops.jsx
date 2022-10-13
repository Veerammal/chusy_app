import React from "react";
import { Grid } from "@material-ui/core";

import Product from "../components/Products/Product/Product";
// import useStyles from './styles';
// import Spinner from "../components/Spinner/Spinner";

const Tops = ({ tops, onAddToCart }) => {
  // const classes = useStyles();
  
  console.log(tops);
  
//   if (!categories) return <Spinner />;

  return (
    <>
      <div
        style={{ 
          background: "#E3E3D8",
          paddingTop: "70px",
        }}
      >
        
                <Grid container justifyContent="center" spacing={4}>
                  {tops.map((top) => (
                    <Grid item key={top.id} xs={6} sm={3} md={3} lg={3} 
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      m: 10,
                      p: 10,
                    }}>
                      <Product product={top} onAddToCart={onAddToCart} />
                    </Grid>
                  ))}
                </Grid>
            
            </div>
          
     
    </>
  );
};

export default Tops;
 

