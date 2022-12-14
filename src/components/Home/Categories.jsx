import React from "react";
import {
  Typography,
  Grid,
  CardContent,
  Card,
  CardMedia,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import tops from "../../assets/tops.png";
import chudis from "../../assets/chudis.png";
import blouse from "../../assets/blouse.png";
import pants from "../../assets/pants.png";
import other from "../../assets/other.png";

const Categories = () => {
  const categoriesObject = [
    {
      id: "1",
      name: "Tops",
      image: tops,
      url: "/tops",
    },
    {
      id: "2",
      name: "Chudis",
      image: chudis,
      url: "/chudis",
    },
    {
      id: "3",
      name: "Blouses",
      image: blouse,
      url: "/blouses",
    },
    {
      id: "4",
      name: "Pants",
      image: pants,
      url: "/pants",
    },
    {
      id: "5",
      name: "Other",
      image: other,
      url: "/others",
    },
  ];

  return (
    <div
      style={{
        padding: 10,
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          style={{
            align: "center",
            fontSize: "28px",
            margin: "10px",
            color: "textSecondary",
          }}
          variant="h1"
        >
          <u>Catagories</u>
        </Typography>
      </div>

      {/* Categories  */}

      <Grid container justifyContent="center">
        {/* Product 1 - Tops  */}
        {categoriesObject.map((category) => (
          <Grid
            key={category.id}
            item
            xs={6}
            sm={3}
            md={3}
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              m: 10,
              p: 10,
            }}
          >
            <Link to={category.url} style={{ textDecoration: "none" }}>
              <Card
                elevation={5}
                style={{
                  margin: 15,
                  width: "80%",
                  height: "275px",
                  borderRadius: 15,
                }}
              >
                <CardMedia
                  style={{
                    height: "80%",
                    objectFit: "contain",
                  }}
                  component="img"
                  image={category.image}
                  alt="Tops"
                />

                <CardContent style={{ height: "20%" }}>
                  <Typography variant="h5" align="center" color="textSecondary">
                    {category.name}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Categories;
