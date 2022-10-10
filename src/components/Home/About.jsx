import React from "react";
import { Box, Paper, Typography } from "@material-ui/core";
const About = () => {
  return (
    <>
    
    <Box
    
    sx = {{
      display: "flex",
      justifyContent: "center",
      p: 10
    }}
  >
    <Paper
      elevation={15}
      style={{
        borderRadius: 35,
        padding: "20px",
      }}
    >
      <Typography
        variant="h4"
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
  </Box></>
  );
}

export default About;
