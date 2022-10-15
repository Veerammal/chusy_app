import React, { useRef } from "react";
import { Grid, Button, Container, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { commerce } from "../../lib/commerce";
import { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";

import {Link, useParams} from 'react-router-dom'


const View = ({ onAddToCart }) => {
  const {id} = useParams();
  const [product, setProduct] = useState({});
  // const [quantity, setQuantity] = useState(1);
  // const [loading, setLoading] = useState(true);

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

  // useEffect(() => {
  //   const id = window.location.pathname.split("/");
  //   fetchProduct(id[2]);
  // }, []);

  // const handleQuantity = (param) => {
  //   if (param === "decries" && quantity > 1) {
  //     setQuantity(quantity - 1);
  //   }
  //   if (param === "increase" && quantity < 10) {
  //     setQuantity(quantity + 1);
  //   }
  // };

  const imgDiv = useRef();

  const handleMouseMove = e =>{
    const {left, top, width, height} = e.target.getBoundingClientRect();
    const x = (e.pageX - left) / width * 100
    const y = (e.pageY - top) / height * 100
    imgDiv.current.style.backgroundPosition = `${x}% ${y}%`
}


  return (
    <>
      <div style={ {
    width: "100%", 
    display: "flex", 
    justifyContent: "space-around", 
    flexWrap: "wrap", 
    padding: "50px"
  }}>
        <div
          className="img-container"
          onMouseMove={handleMouseMove}
          style={{ backgroundImage: `url(${product.src})`,
          
            maxWidth: "400px", 
            width: "100%", 
            margin: "20px", 
            height: "450px", 
            backgroundPosition: "center", 
            backgroundSize: "cover", 
            backgroundRepeat: "no-repeat",
           }}
          ref={imgDiv}
          onMouseLeave={() =>
            (imgDiv.current.style.backgroundPosition = `center`)
          }
        />

        <div className="box-details">
          <h2 title={product.name}>{product.name}</h2>
          <h3>${product.price}</h3>
          {/* <Colors colors={product.colors} /> */}
          {/* <Sizes sizes={product.sizes} /> */}
          <p>{product.description}</p>
          {/* <p>{product.content}</p> */}
          {/* <DetailsThumb images={product.images} setIndex={setIndex} /> */}
          <Link
            to="/cart"
            className="cart"
            onClick={() => onAddToCart()}
          >
            Add to cart <ShoppingCart/>
          </Link>
        </div>
      </div>
    </>
  );
};

export default View;

/**
 * 
 * 
 * 
 *  <>
    <div style={{
    display: "flex", 
    justifyContent: "space-around", 
    flexWrap: "wrap", 
    padding: "30px 0"
  }}>
              <div style={{
    maxWidth: "500px", 
    minWidth: "290px", 
    overflow: "hidden", 
    margin: "25px"
  }}>
                <img style={{
    width: "100%", 
    height: "100%", 
    maxHeight: "400px", 
    display: "block", 
    objectFit: "cover"
  }} src={product.src} alt="Product"/>
              </div>

              <div style={{
    maxWidth: "500px", 
    minWidth: "290px", 
    margin: "25px"
  }}>
                <div style={{
    display: "flex", 
    justifyContent: "space-between", 
    marginBottom: "15px"
  }}>
                  <h2 style={{
    textTransform: "uppercase", 
    letterSpacing: "2px"
  }}>{product.name}</h2>
                  <span>{product.price}</span>
                </div>
                {/* <Colors colors={item.colors} /> */

//                 <Typography
//             variant="body1"
//             dangerouslySetInnerHTML={createMarkup(product.description)}
//           />

//                 {/* <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} /> */}
//                 <button
//                 onClick={onAddToCart}
//                 style={{
//     background: "#333",
//     color: "white",
//     outline: "none",
//     border: "none",
//     cursor: "pointer",
//     padding: "10px 25px",
//     marginTop: "15px",
//     fontSize: "20px",
//   }}>Add to cart &nbsp; <ShoppingCart/> </button>

//               </div>
//             </div>
//     </>

// <Container
//       style={{
//         height: "80vh",
//         display: "flex",
//         alignItems: "center",
//         margin: "150px 0 100px 0",
//       }}
//     >
//       <Grid container spacing={4}>
//         <Grid
//           item
//           xs={12}
//           md={8}
//           style={{
//             width: "100%",
//           }}
//         >
//           <img
//             onLoad={() => {
//               setLoading(false);
//             }}
//             src={product.src}
//             alt={product.name}
//           />
//         </Grid>
//         <Grid
//           item
//           xs={12}
//           md={4}
//           style={{
//             color: "black",
//           }}
//         >
//           <Typography variant="h2">{product.name}</Typography>
//           <Typography
//             variant="body1"
//             dangerouslySetInnerHTML={createMarkup(product.description)}
//           />
//           <Typography variant="h3">Price: {product.price}</Typography>
//           <Grid container spacing={4}>
//             <Grid item xs={12}>
//               <Button
//                 size="small"
//                 variant="contained"
//                 style={{
//                   backgroundColor: "#03dac5",
//                   borderColor: "#03dac5",
//                 }}
//                 onClick={() => {
//                   handleQuantity("increase");
//                 }}
//               >
//                 +
//               </Button>
//             </Grid>
//             <Grid item xs={12}>
//               <Typography
//                 style={{
//                   marginbottom: "5px",
//                 }}
//                 variant="h3"
//               >
//                 Quantity: {quantity}
//               </Typography>
//             </Grid>
//             <Grid item xs={12}>
//               <Button
//                 size="small"
//                 color="secondary"
//                 variant="contained"
//                 onClick={() => {
//                   handleQuantity("decries");
//                 }}
//               >
//                 -
//               </Button>
//             </Grid>
//             <Grid item xs={12}>
//               <Button
//                 size="large"
//                 style={{
//                   marginRight: "10px",
//                 }}
//                 onClick={() => {
//                   onAddToCart(product.id, quantity);
//                 }}
//               >
//                 <ShoppingCart /> Add to basket
//               </Button>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//       {loading && <Spinner />}
//     </Container>

//  */
