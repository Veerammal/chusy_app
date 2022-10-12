import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  CardActionArea,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Product = ({ product, onAddToCart }) => {
  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <Card
      style={{
        // maxWidth: 345, //original width style
        width: "100%",
        height: "450px",
        // height: "100%",
        borderRadius: 15,
        padding: "10px",
      }}
    >
      <Link to={`view/${product.id}`}>
        <CardActionArea>
          <CardMedia
            style={{
              height: "250px",
              //paddingTop: "56.25%", // 16:9
              objectFit: "contain",
            }}
            component="img"
            image={product.image.url}
            alt={product.name}
          />
          <CardContent>
            <div
              style={{
                height: "100px",
              }}
            >
              <Typography gutterBottom variant="h6" component="h5">
                {product.name}
              </Typography>
              
            </div>
           
            
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions
        
        style={{
          height: "100px",
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
          <AddShoppingCart htmlColor="#D750DF" />
        </IconButton>
        <Typography gutterBottom variant="h6" component="h5">
                {"\u20B9" + product.price.formatted}
        </Typography>
            
      </CardActions>
    </Card>
  );
};

export default Product;

//  <Typography
// dangerouslySetInnerHTML={{ __html: product.description }}
// variant="body2"
// color="textSecondary"
// component="p"
// />
