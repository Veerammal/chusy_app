import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";



const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {

  const handleUpdateCartQty = (lineItemId, newQuantity) =>
    onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    <Card style={{

      width: "95%",
      height: "100%",
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
    }}>
      <CardMedia
        image={item.image.url}
        alt={item.name}
        style={{
          height: "280px",
          width: "100%",
          objectFit: "contain",
        }}
      />
      <CardContent 
      style={ {
        height: "20%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      >
        <Typography variant="h5">{item.name}</Typography>
        <Typography variant="h6">{item.price.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions 
      style={{
        height: "20%",
        width: "100%",
        justifyContent: "space-between",
      }}
      >
        <div 
        style={{
          display: "flex",
          width: "60%",
          margin: "5px",
        }}
        >
          <Button
            type="button"
            size="small"
            onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
          >
            -
          </Button>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button
            type="button"
            size="small"
            onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </div>
        <Button
          variant="contained"
          type="button"
          color="secondary"
          onClick={() => handleRemoveFromCart(item.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
