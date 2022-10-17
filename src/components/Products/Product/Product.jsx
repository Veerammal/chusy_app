import React from "react";
// import {
//   Card,
//   CardMedia,
//   CardContent,
//   CardActions,
//   Typography,
//   IconButton,
//   CardActionArea,
// } from "@material-ui/core";
import{IconButton} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Product = ({ product, onAddToCart }) => {
  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <div
      style={{
        width: "95%",
        height: "400px",
        background: "rgba( 255, 255, 255, 0.25 )",
        boxShadow: "0 8px 32px 0 rgba( 196, 165, 195, 0.37 )",
        // backdropFilter: "blur( 4px )",
        // WebkitBackdropFilter: "blur( 4px )",
        borderRadius: "15px",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
        // backdropFilter:"blur(16px) saturate(180%)",
        // WebkitBackdropFilter:"blur(16px) saturate(180%)",
        // backgroundColor:"rgba(255, 255, 255, 0.75)",
        // borderRadius:"12px",
        // border:"1px solid rgba(209, 213, 219, 0.3)",
        margin: "10px",
        padding: "10px",
        // position: "relative",
        overflow: "hidden",
      }}
    >
      <Link to={`view/${product.id}`}>
        <div
          style={{
            height: "75%",
            width: "100%",
            background:
              "url(" + product.image.url + ") no-repeat center center",
            WebkitBackgroundSize: "100%",
            MozBackgroundSize: "100%",
            OBackgroundSize: "100%",
            backgroundSize: "100%",
          }}
        ></div>
      </Link>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            padding: "15px",
            float: "left",
            width: "85%",
            textDecoration: "none",
          }}
        >
          <h2
            style={{
              fontSize: "22px",
            }}
          >
            <p>
              {product.name} <br />
              {product.price.formatted_with_symbol}
            </p>
          </h2>
        </div>
        <div
          style={{
            float: "right",
            padding: "10px",
          }}
        
        >
          <IconButton onClick={handleAddToCart}>
            <AddShoppingCart  htmlColor="#D750DF" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Product;

/*


  const [isHover1, setIsHover1] = useState(false);

   const handleMouseEnter1 = () => {
      setIsHover1(true);
   };
   const handleMouseLeave1 = () => {
      setIsHover1(false);
   };

   const [isHover2 , setIsHover2] = useState(false);

   const handleMouseEnter2 = () => {
      setIsHover2(true);
   };
   const handleMouseLeave2 = () => {
      setIsHover2(false);
   };

   const [isHover3, setIsHover3] = useState(false);

   const handleMouseEnter3 = () => {
      setIsHover3(true);
   };
   const handleMouseLeave3 = () => {
      setIsHover3(false);
   };


   const [isHover4, setIsHover4] = useState(false);

   const handleMouseEnter4 = () => {
      setIsHover4(true);
   };
   const handleMouseLeave4 = () => {
      setIsHover4(false);
   };

   const [isHover5, setIsHover5] = useState(false);

   const handleMouseEnter5 = () => {
      setIsHover5(true);
   };
   const handleMouseLeave5 = () => {
      setIsHover5(false);
   };

   const [cartClicked, setCartClicked] = useState(false);

   const handlecartClicked = () => {
    setCartClicked(true);
   };
  


<div
      style={{
        width: "300px",
        height: "500px",
        background: isHover1 ? "white" : "blue",
        border: "2px dotted",
        margin: "auto",
        position: "relative",
        overflow: "hidden",
        borderRadius: "10px 10px 10px 10px",
        boxShadow: "0",
        transform: isHover1 ?  "scale(1)" : "scale(0.85)",
        transition: isHover1 ? "5px 20px 30px rgba(0,0,0,0.2)" : "box-shadow 0.5s, transform 0.5s",
      }}
      onMouseEnter={handleMouseEnter1}
      onMouseLeave={handleMouseLeave1}
    >
      <div style={{ width: "100%", height: "100%" }}>
        <div
          style={{
            height: "75%",
            width: "100%",
            background:
              "url(" + product.image.url + ") no-repeat center",
            backgroundSize: "100%",
            objectFit: "contain",
          }}
        >
        </div>
        <div
          style={{
            width: "100%",
            height: "25%",
            transition: cartClicked ?  "translateX(-50%)" : "transform 0.5s",
          }}
          onClick={handlecartClicked}
        >
          <div
            style={{
              height: "100%",
              width: "50%",
              background: "#f4f4f4",
              position: "relative",
              float: "left",
            }}
          >
            <div
              style={{
                padding: "20px",
                float: "left",
                width: "calc(70% - 40px)",
              }}
            >
              <h1
                style={{
                  margin: "0",
                  padding: "0",
                }}
              >
                { product.name }
              </h1>
              <p
                style={{
                  margin: "0",
                  padding: "0",
                }}
              >
                { product.price.formatted }
              </p>
            </div>
            <div
              style={{
                float: "right",
                width: "calc(30% - 2px)",
                height: "100%",
                background: isHover2 ? "#A6CDDE" :"#f1f1f1",
                transition: "background 0.5s",
                borderLeft: "solid thin rgba(0,0,0,0.1)",
              }}
              onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
            >
              <i
                style={{
                  fontSize: "30px",
                  padding: "30px",
                  color: isHover3 ? "#00394B" : "#254053",
                  transition: isHover3 ? "translateY(5px)" : "transform 0.5s",
                }}
                onMouseEnter={handleMouseEnter3}
            onMouseLeave={handleMouseLeave3}
              >
                <AddShoppingCart/>
              </i>
            </div>
          </div>

          <div
            style={{
              width: "50%",
              background: "#A6CDDE",
              color: "white",
              float: "right",
              height: "200%",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "calc(30% - 2px)",
                float: "left",
                transition: "transform 0.5s",
                borderRight: "solid thin rgba(255,255,255,0.3)",
                height: "50%",
              }}
            >
              <i
                style={{
                  fontSize: "30px",
                  padding: "30px",
                  color: "white",
                }}
              >
                done
              </i>
            </div>
            <div
              style={{
                padding: "20px",
                float: "right",
                width: "calc(70% - 40px)",
              }}
            >
              <h1>{ product.name }</h1>
              <p>Added to your cart</p>
            </div>
            <div
              style={{
                width: "calc(30% - 1px)",
                clear: "both",
                borderRight: "solid thin rgba(255,255,255,0.3)",
                height: "50%",
                background: isHover4 ? "#9B2847" : "#BC3B59",
                transition: "transform 0.5s, background 0.5s",
              }}
              onMouseEnter={handleMouseEnter4}
            onMouseLeave={handleMouseLeave4}
            >
              <i
                style={{
                  transition: isHover5 ?  "translateY(5px)" : "transform 0.5s",
                  fontSize: "30px",
                  padding: "30px",
                  color: "white",
                }}
                onMouseEnter={handleMouseEnter5}
            onMouseLeave={handleMouseLeave5}
              >
                clear
              </i>
            </div>
          </div>
        </div>

      </div>
    </div> 
  

// HTML


<div className="wrapper">
  <div className="container">
    <div className="top"></div>
    <div className="bottom">
      <div className="left">
        <div className="details">
          <h1>Chair</h1>
          <p>£250</p>
        </div>
        <div className="buy"><i className="material-icons">add_shopping_cart</i></div>
      </div>
      <div className="right">
        <div className="done"><i className="material-icons">done</i></div>
        <div className="details">
          <h1>Chair</h1>
          <p>Added to your cart</p>
        </div>
        <div className="remove"><i className="material-icons">clear</i></div>
      </div>
    </div>
  </div>
</div>


// (

     /*  <div
      style={{
        width: "300px",
        height: "500px",
        background: "white",
        margin: "auto",
        position: "relative",
        overflow: "hidden",
        borderRadius: "10px 10px 10px 10px",
        boxShadow: "0",
        transform: "scale(0.95)",
        transition: "box-shadow 0.5s, transform 0.5s",
        "&:hover": { //1
          transform: "scale(1)",
          boxShadow: "5px 20px 30px rgba(0,0,0,0.2)",
        },
      }}
    >
      <div style={{ width: "100%", height: "100%" }}>
        <div
          style={{
            height: "80%",
            width: "100%",
            background:
              "url(https://s-media-cache-ak0.pinimg.com/736x/49/80/6f/49806f3f1c7483093855ebca1b8ae2c4.jpg) no-repeat center center",
            backgroundSize: "100%",
          }}
        ></div>
        <div
          style={{
            width: "200%",
            height: "20%",
            transition: "transform 0.5s",
            "&.clicked": {
              transform: "translateX(-50%)",
            },
          }}
        >
          <div
            style={{
              height: "100%",
              width: "50%",
              background: "#f4f4f4",
              position: "relative",
              float: "left",
            }}
          >
            <div
              style={{
                padding: "20px",
                float: "left",
                width: "calc(70% - 40px)",
              }}
            >
              <h1
                style={{
                  margin: "0",
                  padding: "0",
                }}
              >
                Chair
              </h1>
              <p
                style={{
                  margin: "0",
                  padding: "0",
                }}
              >
                £250
              </p>
            </div>
            <div
              style={{
                float: "right",
                width: "calc(30% - 2px)",
                height: "100%",
                background: "#f1f1f1",
                transition: "background 0.5s",
                borderLeft: "solid thin rgba(0,0,0,0.1)",
                "&:hover": { //2
                  background: "#A6CDDE",
                },
              }}
            >
              <i
                style={{
                  fontSize: "30px",
                  padding: "30px",
                  color: "#254053",
                  transition: "transform 0.5s",
                  "&:hover": { // 3
                    transform: "translateY(5px)",
                    color: "#00394B",
                  },
                }}
              >
                <AddShoppingCart/>
              </i>
            </div>
          </div>

          <div
            style={{
              width: "50%",
              background: "#A6CDDE",
              color: "white",
              float: "right",
              height: "200%",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "calc(30% - 2px)",
                float: "left",
                transition: "transform 0.5s",
                borderRight: "solid thin rgba(255,255,255,0.3)",
                height: "50%",
              }}
            >
              <i
                style={{
                  fontSize: "30px",
                  padding: "30px",
                  color: "white",
                }}
              >
                done
              </i>
            </div>
            <div
              style={{
                padding: "20px",
                float: "right",
                width: "calc(70% - 40px)",
              }}
            >
              <h1>Chair</h1>
              <p>Added to your cart</p>
            </div>
            <div
              style={{
                width: "calc(30% - 1px)",
                clear: "both",
                borderRight: "solid thin rgba(255,255,255,0.3)",
                height: "50%",
                background: "#BC3B59",
                transition: "transform 0.5s, background 0.5s",
                "&:hover": { // 4
                  background: "#9B2847",
                },
              }}
            >
              <i
                style={{
                  transition: "transform 0.5s",
                  fontSize: "30px",
                  padding: "30px",
                  color: "white",
                  "&:hover": { // 5
                    transform: "translateY(5px)",
                  },
                }}
              >
                clear
              </i>
            </div>
          </div>
        </div>
      </div>
    </div> */
// )

//  <Typography
// dangerouslySetInnerHTML={{ __html: product.description }}
// variant="body2"
// color="textSecondary"
// component="p"
// />

// (
// <Card
//   style={{
//     // maxWidth: 345, //original width style
//     width: "100%",
//     height: "450px",
//     // height: "100%",
//     borderRadius: 15,
//     padding: "10px",
//   }}
// >
//   <Link to={`view/${product.id}`}>
//     <CardActionArea>
//       <CardMedia
//         style={{
//           height: "250px",
//           //paddingTop: "56.25%", // 16:9
//           objectFit: "contain",
//         }}
//         component="img"
//         image={product.image.url}
//         alt={product.name}
//       />
//       <CardContent>
//         <div
//           style={{
//             height: "100px",
//           }}
//         >
//           <Typography gutterBottom variant="h6" component="h5">
//             {product.name}
//           </Typography>

//         </div>

//       </CardContent>
//     </CardActionArea>
//   </Link>
//   <CardActions

//     style={{
//       height: "100px",
//       display: "flex",
//       justifyContent: "space-between",
//       padding: "20px",
//     }}
//   >
//     <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
//       <AddShoppingCart htmlColor="#D750DF" />
//     </IconButton>
//     <Typography gutterBottom variant="h6" component="h5">
//             {"\u20B9" + product.price.formatted}
//     </Typography>

//   </CardActions>
// </Card>
// )
