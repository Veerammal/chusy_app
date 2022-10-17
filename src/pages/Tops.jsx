import React from "react";
import { Grid, IconButton } from "@material-ui/core";

import Product from "../components/Products/Product/Product";
// import useStyles from './styles';
import Spinner from "../components/Spinner/Spinner";
import { ArrowBack } from "@material-ui/icons";
import { useHistory } from "react-router";

const Tops = ({ tops, onAddToCart }) => {
  // const classes = useStyles();
  
  const history = useHistory();

  console.log(tops);
  
  if (!tops.length) return <Spinner />;

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
        <IconButton onClick={() => history.goBack()}>
          <ArrowBack htmlColor="#D750DF" />
        </IconButton>
                <Grid container justifyContent="center" spacing={4}>
                  {tops.map((top) => (
                    <Grid item key={top.id} xs={12} sm={6} md={3} lg={3} 
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
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
 

