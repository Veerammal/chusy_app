import { Typography, Box, Card, CardContent } from "@material-ui/core";

import React from "react";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 10,
          m: 1,
          borderRadius: 1,
          backgroundImage: `url(${"https://static.vecteezy.com/system/resources/previews/005/424/342/original/floral-bouquet-decorative-composition-black-illustration-isolated-on-white-background-free-vector.jpg"})`,
          // backgroundSize: 'cover',
          // backgroundPosition: 'center',
          // width: `calc(100vw + 48px)`,
          // bgcolor: "background.paper",
        }}
      >
        {/* <Card >
          <CardContent>
            <Container > */}
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Mangai Matching
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Welcome to Mangai Matching&apos;s New Online Store for All Womens and
          Girls as Chusy!.
        </Typography>
        {/* <img src="https://static.vecteezy.com/system/resources/previews/005/424/342/original/floral-bouquet-decorative-composition-black-illustration-isolated-on-white-background-free-vector.jpg" alt="BgImage"></img> */}
        {/* </Container> */}
        <Typography gutterBottom variant="h5" component="h2">
          Chusy
        </Typography>
        {/* </CardContent>
        </Card> */}
      </Box>

      {/* -----------Product Category------------ */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Tops and Chudithar
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Tops and Chudithaar for All Girls
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Blouse
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Saree Blouses and Blouse materials are in stock
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Pants
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              All Types of Pants and pant materials are available
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Others
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              All Other Womens and Ladies clothings are available
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Home;
