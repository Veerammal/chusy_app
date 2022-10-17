import React from "react";
import { AppBar, Toolbar, IconButton, Badge, Box } from "@material-ui/core";
import { Home, ShoppingCart, Store } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/chusy-logo.png";

const Navbar = ({ totalItems }) => {
  const location = useLocation();

  return (
    <>
      <AppBar
        position="fixed"
        style={{
          borderBottom: "1px solid rgba(0, 0, 0, 0.10)",
          width: "100%",
          overflow: "hidden",
          paddingRight: "4px",
        }}
        color="inherit"
      >
        <Toolbar>
          <Box component={Link} to="/">
            <img
              src={logo}
              alt="Chusy"
              style={{
                height: "35px",
                width: "95px",
              }}
            />
          </Box>
          <div
            style={{
              flexGrow: 1,
            }}
          />
          {location.pathname === "/" && (
            <div>
              <IconButton component={Link} to="/shop" aria-label="shopping">
                <Store htmlColor="#D750DF" />
              </IconButton>
            </div>
          )}
          {location.pathname !== "/" && (
            <div>
              <IconButton
                component={Link}
                to="/"
                aria-label="Home"
                >
                  <Home htmlColor="#D750DF"/>
                </IconButton>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
              >
                <Badge
                  badgeContent={totalItems}
                  overlap="rectangular"
                  color="primary"
                >
                  <ShoppingCart htmlColor="#D750DF" />
                </Badge>
              </IconButton>
              
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
