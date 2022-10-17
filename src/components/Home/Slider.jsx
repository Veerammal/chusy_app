import React from "react";
// import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import Carousel from "react-material-ui-carousel";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/slide2.png";
import slide3 from "../../assets/slide3.png";

const Slider = () => {
  const sliderItems = [
    {
      id: 1,
      img: slide1,
      title: "DIWALI SALE",
      desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
      bg: "#f5fafd",
    },
    {
      id: 2,
      img: slide2,
      title: "AUTUMN COLLECTION",
      desc: "DON'T COMPROMISE ON STYLE! GET FLAT 20% OFF FOR NEW ARRIVALS.",
      bg: "#fcf1ed",
    },
    {
      id: 3,
      img: slide3,
      title: "LOUNGEWEAR LOVE",
      desc: "DON'T COMPROMISE ON STYLE! GET FLAT 20% OFF FOR NEW ARRIVALS.",
      bg: "#fbf0f4",
    },
  ];

  return (
    <Carousel>
      
      {sliderItems.map((item) => (
      
      <Container
          key={item.id}
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: item.bg,
            paddingTop: "70px",
          }}
        >
          <Grid 
          container
          spacing={4}
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
          >
            {/* Left side */}
            <Grid
              item
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
              }}
              xs={12}
              sm={6}
              md={6}
              lg={6}
            >
              <Typography
                style={{
                  fontSize: "32px",
                  marginBottom: "20px",
                }}
                variant="h1"
              >
                {item.desc}
              </Typography>

              <Button
                component={Link}
                to="/shop"
                style={{
                  textDecoration: "none",
                  color: "#000000",
                  backgroundColor: "#03dac5",
                }}
              >
                Shop Now
              </Button>
            </Grid>
          {/*  Right side  */}
            <Grid
              item
              style={{
                // display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
              }}
              xs={12}
              sm={6}
              md={6}
              lg={6}
            >
              <img
                style={{
                  objectFit: "contain",
                }}
                src={item.img}
                alt={item.title}
              />
            </Grid>
          </Grid>
        </Container>
      ))}
    </Carousel>
  );
};

export default Slider;

// <div
//   style={{
//     width: "100vw",
//     height: "100vh",
//     backgroundColor: "#" + item.bg,
//   }}
//   key={item.id}
// >
//   {/* Left side Image */}
//   <div
//     style={{
//       paddingTop: "35px",

//       flex: "1",
//     }}
//   >
//     <img src={item.img} alt="slider" />
//   </div>
//   {/* Right side Description */}

//   <div >
//     <h1 style={{ fontSize: "70px" }}>{item.title}</h1>
//     <p
//       style={{
//         margin: "50px 0px",
//         fontSize: "20px",
//         fontWeight: "500",
//         letterSpacing: "3px",
//       }}
//     >
//       {item.desc}
//     </p>
//   </div>
// </div>

// const [slideIndex, setSlideIndex] = useState(0);
// const handleClick = (direction) => {
//   console.log(direction);
//   console.log(slideIndex);
//   if (direction === "left") {
//     console.log("inside left");
//     setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
//   } else {
//     setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
//   }
//   console.log(slideIndex);
// };

// return (
//   <div style={{width: "100%",
//     height: "100vh",
//     display: "flex",
//     position: "relative",
//     overflow: "hidden",
// }}>
//     <button
//       style={{
//         width: "50px",
//         height: "50px",
//         backgroundColor: "#fff7f7",
//         borderRadius: "50%",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         position: "absolute",
//         top: 0,
//         bottom: 0,
//         left: "10px",
//         margin: "auto",
//         cursor: "pointer",
//         opacity: 0.5,
//         zIndex: 2,
//       }}
//       onClick={() => handleClick("left")}
//     >
//       <ArrowLeftOutlined />
//     </button>

//     <div
//       style={{
//         height: "100%",
//         display: "flex",
//         transition: "all 1.5s ease",
//         transform: "translateX(" + slideIndex + " * -100)vw",
//       }}
//     >
//       {sliderItems.map((item) => (
//         <div
//           style={{
//             width: "100vw",
//             height: "100vh",
//             display: "flex",
//             alignItems: "center",
//             backgroundColor: "#" + item.bg,
//           }}
//           key={item.id}
//         >
//           <div style={{ height: "100%", flex: "1" }}>
//             <img style={{ height: "80%" }} src={item.img} alt="slider" />
//           </div>

//           <div style={{ flex: "1", padding: "50px" }}>
//             <h1 style={{ fontSize: "70px" }}>{item.title}</h1>
//             <p
//               style={{
//                 margin: "50px 0px",
//                 fontSize: "20px",
//                 fontWeight: "500",
//                 letterSpacing: "3px",
//               }}
//             >
//               {item.desc}
//             </p>
//             <button
//               style={{
//                 padding: "10px",
//                 fontSize: "20px",
//                 backgroundColor: "transparent",
//                 cursor: "pointer",
//               }}
//             >
//               SHOW NOW
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>

//     <button
//       style={{
//         width: "50px",
//         height: "50px",
//         backgroundColor: "#fff7f7",
//         borderRadius: "50%",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         position: "absolute",
//         top: 0,
//         bottom: 0,
//         right: "10px",
//         margin: "auto",
//         cursor: "pointer",
//         opacity: 0.5,
//         zIndex: 2,
//       }}
//       onClick={() => handleClick("right")}
//     >
//       <ArrowRightOutlined />
//     </button>
//   </div>
// );
