import React from "react";
import { commerce } from "../../lib/commerce";
import { useState, useEffect } from "react";
import { Typography, Button, Grid, IconButton } from "@material-ui/core";
import Spinner from "../Spinner/Spinner";
import { ShoppingCart, ArrowBack } from "@material-ui/icons";

import { useHistory } from "react-router-dom";

function createMarkup(content) {
  return {
    __html: content,
  };
}

const View = ({ onAddToCart, onUpdateCartQty, onRemoveFromCart }) => {
  const handleUpdateCartQty = (lineItemId, newQuantity) => {
    setQuantity(newQuantity);
    onUpdateCartQty(lineItemId, newQuantity);
  };

  // const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [vgrpId, setVgrpId] = useState("");
  const [optnId, setOptnId] = useState("");
  const history = useHistory();

  const handleAddToCart = () => {
    if(vgrpId === "" || optnId === "")  onAddToCart(product.id, quantity)
    else onAddToVariantCart();
  };

  const onAddToVariantCart = async () => {
    const item = await commerce.cart.add(product.id, quantity, {
        [vgrpId]: optnId,
      });
      console.log(item);
  }

  const handleGetVarient = (index) => {
    
      setProduct({
        ...product,
        image: {
          url: product.assets[index].url,
        },
      });
      if (index !== 0) {
      // console.log("printing some item here...");
      // const vgrpId = product.variant_groups[0].id;
      setVgrpId(product.variant_groups[0].id);
      // const optnId = product.variant_groups[0].options[index - 1].id;
      setOptnId(product.variant_groups[0].options[index - 1].id);
      // const item = await commerce.cart.add(product.id, quantity, {
      //   [vgrpId]: optnId,
      // });
      // console.log(item);
      // console.log("item printed to console successfully");
    }
  };

  const fetchProduct = async (id) => {
    const response = await commerce.products.retrieve(id);
    console.log("inside view fetching product");
    console.log(response);
    setProduct(response);
  };

  useEffect(() => {
    const id = window.location.pathname.split("/");
    console.log("Going to Fetch Product");
    fetchProduct(id[2]);
  }, []);

  if (!product.active) return <Spinner />;

  return (
    <>
      <div
        style={{
          background: "#f3d9fa",
          padding: "20px",
          paddingTop: "70px",
          overflow: "hidden",
        }}
      >
        <IconButton onClick={() => history.goBack()}>
          <ArrowBack htmlColor="#D750DF" />
        </IconButton>
        <Grid
          container
          // justifyContent="center"
          style={{
            // width: "100%",
            // height: "100%",
            padding: "15px",
            background: "rgba( 255, 255, 255, 0.25 )",
            boxShadow: "0 8px 32px 0 rgba( 196, 165, 195, 0.37 )",
            // backdropFilter: "blur( 4px )",
            // WebkitBackdropFilter: "blur( 4px )",
            borderRadius: "35px",
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
            // backdropFilter:"blur(16px) saturate(180%)",
            // WebkitBackdropFilter:"blur(16px) saturate(180%)",
            // backgroundColor:"rgba(255, 255, 255, 0.75)",
            // borderRadius:"12px",
            // border:"1px solid rgba(209, 213, 219, 0.3)",
            // position: "relative",
            // overflow: "hidden",
            zIndex: "5",
          }}
        >
          {/* Left side */}
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            xl={6}
            style={{
              justifyContent: "center",
              alignItems: "center",
              // padding: "20px",
            }}
          >
            <img
              src={product.image.url}
              alt="choosen product"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Grid>

          {/* Right side */}
          <Grid item xs={12} md={6} lg={6} xl={6}>
            <Typography
              variant="h3"
              dangerouslySetInnerHTML={createMarkup(product.name)}
            />
            <Typography
              variant="h6"
              dangerouslySetInnerHTML={createMarkup(product.description)}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: "20px",
              }}
            >
              <Button
                type="button"
                size="small"
                variant="outlined"
                onClick={() => handleUpdateCartQty(product.id, quantity - 1)}
                style={{
                  fontSize: "24px",
                }}
              >
                -
              </Button>
              <Typography variant="h4">&nbsp;{quantity}&nbsp;</Typography>
              <Button
                type="button"
                size="small"
                variant="outlined"
                onClick={() => handleUpdateCartQty(product.id, quantity + 1)}
                style={{
                  fontSize: "24px",
                }}
              >
                +
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "10px",
              }}
            >
              <Button
                variant="contained"
                type="button"
                color="secondary"
                onClick={handleAddToCart}
              >
                <ShoppingCart />
              </Button>
            </div>
            {product.assets.length > 1 ? (
              <Typography variant="h5">Other variants</Typography>
            ) : null}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {product.assets.length > 1
                ? product.assets.map((asset, index) => {
                    return (
                      <div>
                        <IconButton
                          index={index}
                          onClick={() => handleGetVarient(index)}
                        >
                          
                            <img
                              src={asset.url}
                              alt="asset"
                              height="50px"
                              width="50px"
                            />
                          
                          <Typography variant="h5">
                            {index !== 0
                              ? product.variant_groups[0].options[index - 1]
                                  .name
                              : null}
                          </Typography>
                        </IconButton>
                      </div>
                    );
                  })
                : null}
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default View;

/*
  <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "space-around",
          background: "grey",
          flexWrap: "wrap",
          padding: "50px",
        }}
      >
        <div style={{
          height: "75%",
          width: "100%",
          backgroundImage:
            "url(" + product.image.url + ") no-repeat center center",
        }}></div>
        <div
          style={{
            display: "flex", 
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
          >
            {product.name}
            <Typography
            variant="body1"
            dangerouslySetInnerHTML={createMarkup(product.description)}
          />
          </div>

      </div>
*/

/**
 * 
 * 
 * 
 *
 * 
 * 
 *  // useEffect(() => {
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

  // const imgDiv = useRef();

//   const handleMouseMove = e =>{
//     const {left, top, width, height} = e.target.getBoundingClientRect();
//     const x = (e.pageX - left) / width * 100
//     const y = (e.pageY - top) / height * 100
//     imgDiv.current.style.backgroundPosition = `${x}% ${y}%`
// }



<>
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
