import {
  Typography,
  Box,
  Card,
  CardContent,
  Divider,
  Container,
  Paper,
} from "@material-ui/core";

import React from "react";
import Bag from "../../assets/bag.png";

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
        }}
      >
        <Card>
          <CardContent>
            <Container>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Chusy
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Welcome to Our New Online Store for All Women and Girls as
                Chusy!.
              </Typography>
            </Container>
            <Typography gutterBottom variant="h5" component="h2" align="center">
              Chusy
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Divider />
      {/* -----------Product Category------------ */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          p: 1,
          m: 1,
          // bgcolor: "background.paper",
          // borderRadius: 1,
        }}
      >
        {/* <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Tops and Chudithar
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Tops and Chudithaar for All Girls
            </Typography>
          </CardContent>
        </Card> */}
        <Paper
          style={{
            backgroundImage: `url(${Bag})`,
          }}
        >
          Some text to fill the Paper Component
        </Paper>
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
      <Paper
          style={{
            backgroundImage: `url(${Bag})`,
            borderImageWidth: '80px',
            width: '100px',
            height: '100px',
            color: 'black',
          }}
        >
          Some text to fill the Paper Component
        </Paper>
        <img src="https://raw.githubusercontent.com/Veerammal/chusy_app/main/src/assets/bag.png" alt="Bag"/>
    </>
  );
};

export default Home;
