import React from "react";
import { Typography } from "@material-ui/core";
const Footer = () => {
  const date = new Date();
  const fullYear = date.getFullYear();
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <footer
      style={{
        width: "100%",
        padding: "10px",
        height: "90px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "16px",
      }}
    >
      <Typography variant="h6" align="center" color="textSecondary" paragraph>
        All &copy; copyrights are reserved to  Chusy
        &nbsp;
        {fullYear}
      </Typography>
    </footer>
  );
};

export default Footer;
