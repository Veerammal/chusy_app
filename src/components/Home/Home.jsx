import {
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  Divider,
  Grid,
  Paper,
  IconButton,
  Container,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";
import logo from "../../assets/chusy-logo.png";
// import Bag from "../../assets/bag.png";

const Home = () => {
  return (
    <>
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 10,
        }}
      >
        <Card
          elevation={15}
          style={{
            borderRadius: 35,
          }}
        >
          <CardContent>
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Chusy
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              {/* https://reactjsexample.com/tag/carousel/ */}
      {/* New Online Store for All Women and Girls as Chusy!
            </Typography>
          </CardContent>
        </Card>
      </Box> */}

      <div
        style={{
          //paddingTop: "20px",
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#F9D8F9",
          backgroundImage: "linear-gradient(to bottom right, #FDF8FD, #C5E6F6)",
        }}
      >
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Typography
                style={{
                  fontSize: "45px",
                  marginBottom: "20px",
                  fontFamily: "Roboto",
                }}
                variant="h1"
              >
                Welcome to Chusy
              </Typography>
              <Link to="/shop">
                <Button
                  style={{
                    color: "#000000",
                    backgroundColor: "#03dac5",
                  }}
                >
                  Shop Now
                </Button>
              </Link>
            </Grid>
            <Grid
              style={{
                display: "flex",
                alignItems: "center",
              }}
              item
              sm={6}
            >
              <img
                style={{
                  width: "100%",
                }}
                src={logo}
                alt="logo"
              />
            </Grid>
          </Grid>
        </Container>
      </div>
      <Divider />
      {/* -----------Product Category------------ */}

      <div
        style={{
          padding: 10,
        }}
      >
        {/* <Grid container justifyContent="center" spacing={4}>
         */}
        <Grid container justifyContent="center">
          {/* Product 1 - Tops  */}
          <Grid item justifyContent="center" xs={6} sm={3} md={3} lg={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                m: 2,
              }}
            >
              <IconButton component={Link} to="/shop">
                <Card
                  elevation={5}
                  style={{
                    borderRadius: 15,
                    // p: 5,
                    // m: 3,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="194"
                    image="https://raw.githubusercontent.com/Veerammal/chusy_app/main/src/assets/tops.png"
                    alt="Tops"
                  />
                  <CardContent
                    sx={{
                      // padding: 10,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <Typography
                        variant="h5"
                        align="center"
                        color="textSecondary"
                        paragraph
                      >
                        Tops
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </IconButton>
            </Box>
          </Grid>
          {/* Product 2 - Chudis */}
          <Grid item justifyContent="center" xs={6} sm={3} md={3} lg={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                m: 2,
              }}
            >
              <IconButton component={Link} to="/shop">
                <Card
                  elevation={5}
                  style={{
                    borderRadius: 15,
                    // p: 5,
                    // m: 3,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="194"
                    image="https://raw.githubusercontent.com/Veerammal/chusy_app/main/src/assets/chudis.png"
                    alt="Chudis"
                  />
                  <CardContent
                    sx={{
                      // padding: 10,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <Typography
                        variant="h5"
                        align="center"
                        color="textSecondary"
                        paragraph
                      >
                        Chudis
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </IconButton>
            </Box>
          </Grid>
          {/* Product 3 - Blouse */}
          <Grid item justifyContent="center" xs={6} sm={3} md={3} lg={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                m: 2,
              }}
            >
              <IconButton component={Link} to="/shop">
                <Card
                  elevation={5}
                  style={{
                    borderRadius: 15,
                    // p: 5,
                    // m: 3,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="194"
                    image="https://raw.githubusercontent.com/Veerammal/chusy_app/main/src/assets/blouse.png"
                    alt="Blouse"
                  />
                  <CardContent
                    sx={{
                      // padding: 10,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h5"
                      align="center"
                      color="textSecondary"
                      paragraph
                    >
                      Blouse
                    </Typography>
                  </CardContent>
                </Card>
              </IconButton>
            </Box>
          </Grid>
          {/* Product 4 - Pants */}
          <Grid item justifyContent="center" xs={6} sm={3} md={3} lg={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",m: 2
              }}
            >
           
              <IconButton component={Link} to="/shop">
                <Card
                  elevation={5}
                  style={{
                    borderRadius: 15,
                    // p: 5,
                    // m: 3,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="194"
                    image="https://raw.githubusercontent.com/Veerammal/chusy_app/main/src/assets/pants.png"
                    alt="Pants"
                  />
                  <CardContent
                    sx={{
                      // padding: 10,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h5"
                      align="center"
                      color="textSecondary"
                      paragraph
                    >
                      Pants
                    </Typography>
                  </CardContent>
                </Card>
              </IconButton>
            </Box>
          </Grid>
          {/* Product 5 - Others */}
          {/* <Grid item justifyContent="center" xs={6} sm={3} md={3} lg={3}>
           */}
          <Grid item justifyContent="center">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",m: 2
              }}
            >
         
              <IconButton component={Link} to="/shop">
                <Card
                  elevation={5}
                  style={{
                    borderRadius: 15,
                    // p: 5,
                    // m: 3,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="194"
                    image="https://raw.githubusercontent.com/Veerammal/chusy_app/main/src/assets/other.png"
                    alt="Others"
                  />
                  <CardContent
                    sx={{
                      // padding: 10,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h5"
                      align="center"
                      color="textSecondary"
                      paragraph
                    >
                      Others
                    </Typography>
                  </CardContent>
                </Card>
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider />

        {/* About content  */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            p: 10,
          }}
        >
          <Paper
            elevation={15}
            style={{
              borderRadius: 35,
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              About Chusy
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              Our products are well known for the durability of colors used in
              yarn. Available in many different ranges and varieties.
              {/* <p>
                The demand for our materials is increasing rapidly owing to
                their new beautiful designs, finest quality and attractive
                colors. <br />
                We have a well qualified team of adroit professionals, who test
                the entire range of offered collections to make sure that the
                clients receive flawless supplies all the time.
              </p>
              <p>
                We offer you our skillful dresses in all colors and at a fair
                price per dress.
              </p> */}
            </Typography>
          </Paper>
        </Box>
      </div>
    </>
  );
};

export default Home;
