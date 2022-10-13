import { Divider } from "@material-ui/core";
import Categories from "./Categories";
import About from "./About";
import Slider from "./Slider";
import React from "react";
const Home = () => {
  return (
    <>
     {/* Carousel Slider  */}
      <Slider />

      <Divider />
      {/* -----------Product Category------------ */}
      <Categories />
      <Divider />
      {/* About content  */}
      <About />
    </>
  );
};

export default Home;

//  {/* "linear-gradient(to bottom right, #FDF8FD, #C5E6F6)" */}

//       {/* <Container style={{
//           //paddingTop: "20px",
//           width: "100%",
//           height: "100vh",
//           display: "flex",
//           alignItems: "center",
//           backgroundImage: "linear-gradient(to top left, #FDF, #C5E)",
//         }}>

         

//           <Grid container spacing={4}>
//             <Grid item xs={12} sm={6}>
//               <Typography
//                 style={{
//                   fontSize: "38px",
//                   marginBottom: "20px",
//                 }}
//                 variant="h1"
//               >
//                 Welcome to Chusy
//               </Typography>
              
//                 <Button
//                 component = {Link}
//                 to = "/shop"
//                   style={{
//                     textDecoration: "none",
//                     color: "#000000",
//                     backgroundColor: "#03dac5",
//                   }}
//                 >
//                   Shop Now
//                 </Button>
              
//             </Grid>
//             <Grid
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//               }}
//               item
//               sm={6}
//             >
//               <img
//                 style={{
//                   width: "100%",
//                 }}
//                 src={logo}
//                 alt="logo"
//               />
//             </Grid>
//           </Grid>
//         </Container> */}
