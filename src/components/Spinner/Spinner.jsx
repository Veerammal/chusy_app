import React from "react";
import { CircularProgress } from "@material-ui/core";
import logo  from "../../assets/chusy-favicon.png";

const Spinner = () => (
  <div
    style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "24px",
    }}
  >
    <img src={logo} alt="logo" width="30px" height="30px" />
    Loading &nbsp;
    <CircularProgress />
  </div>
);

export default Spinner;
