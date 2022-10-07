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
} from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";
// import Bag from "../../assets/bag.png";

const Home = () => {
  return (
    <>
      <Box
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
              New Online Store for All Women and Girls as Chusy!
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Divider />
      {/* -----------Product Category------------ */}

      <div style={{ 
        padding: 10,
       }}>
        <Grid container justifyContent="center" spacing={4}>
          {/* Product 1 - Tops  */}
          <Grid item xs={6} sm={6} md={4} lg={3}>
            <IconButton component={Link} to="/">
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
        image=""
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
          </Grid>
          {/* Product 2 - Chudis */}
          <Grid item xs={6} sm={6} md={4} lg={3}>
            <IconButton component={Link} to="/">
              <Card
                elevation={5}
                style={{
                  borderRadius: 15,
                  // p: 5,
                  // m: 3,
                }}
              >
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
          </Grid>
          {/* Product 3 - Blouse */}
          <Grid item xs={6} sm={6} md={4} lg={3}>
            <IconButton component={Link} to="/">
              <Card
                elevation={5}
                style={{
                  borderRadius: 15,
                  // p: 5,
                  // m: 3,
                }}
              >
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
          </Grid>
          {/* Product 4 - Pants */}
          <Grid item xs={6} sm={6} md={4} lg={3}>
            <IconButton component={Link} to="/">
              <Card
                elevation={5}
                style={{
                  borderRadius: 15,
                  // p: 5,
                  // m: 3,
                }}
              >
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
          </Grid>
          {/* Product 5 - Others */}
          <Grid item xs={6} sm={6} md={4} lg={3}>
            <IconButton component={Link} to="/">
              <Card
                elevation={5}
                style={{
                  borderRadius: 15,
                  // p: 5,
                  // m: 3,
                }}
              >
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
          </Grid>
        </Grid>

        <Divider />
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
              <p>
                Our products are well known for the durability of colors used in
                yarn. Available in many different ranges and varieties.
              </p>
              <p>
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
              </p>
            </Typography>
          </Paper>
        </Box>
      </div>
    </>
  );
};

export default Home;
