import React from "react";
import { AppBar, Toolbar, Grid, Button, ButtonGroup } from "@mui/material";
import logo from "./images/prasanthi.jpeg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "rgb(90, 127, 34)" }}>
        <Toolbar>
          <a href="/">
            <img
              src={logo}
              height="70"
              width="70"
              style={{ borderRadius: "50%" }}
            />
          </a>

          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <ButtonGroup>
              <Button variant="contained" component={Link} to="/signup">
                Signup
              </Button>
              <Button variant="contained" component={Link} to="/signin">
                Signin
              </Button>
              <Button variant="contained" component={Link} to="/signout">
                Signout
              </Button>
            </ButtonGroup>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};
