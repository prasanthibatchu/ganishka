import React, { useState, useContext, useEffect } from "react";
import { Container, Box, Button, Grid, TextField } from "@mui/material";
import { UserContext, SnackContext } from "./context";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const [user, setUser] = useState({
    email: "",
    pass: "",
  });

  const { setUserProfile } = useContext(UserContext);
  const { setSnack } = useContext(SnackContext);
  
  let history = useNavigate();
  
  useEffect(() => {
    console.log(localStorage.getItem("Email"));
    setUserProfile({ user_email: localStorage.getItem("Email") });
  }, []);
  
  const [err, setErr] = useState(0);
  const Valid = () => {
    if (localStorage.getItem("Email")) {
      console.log(localStorage.getItem("Email"));
      setUserProfile({ user_email: localStorage.getItem("Email") });
      setSnack({
        message: "user exist in system",
        type: "info",
        open: "true",
        direction: "center",
      });
      history("/signout");
    } else {
      console.log("sign in");

      setErr(0);

      if (!user.email.includes("@")) {
        setErr(1);
        // alert("please enter your email id")
        setSnack({
          message: "please enter your email id",
          type: "error",
          open: true,
          direction: "center",
        });
      } else if (user.pass.length < 6) {
        setErr(2);
        // alert("please enter your password")
        setSnack({
          message: "please enter your password",
          type: "error",
          open: true,
          direction: "center",
        });
      } else {
        localStorage.getItem("Email")
          ? console.log(localStorage.getItem("Email"))
          : console.log("no user login");
        localStorage.setItem("Email", user.email);
        localStorage.setItem("Password", user.pass);

        setUserProfile({ user_email: user.email });
        // console.log(user_email);
        setSnack({ message: "user Login successfully", open: true });
        history("/cards");
      }
    }
  };
  const onChangeValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Login Form</h1>
      <Container maxWidth="sm">
        <Box m={5} p={5} sx={{ backgroundColor: "aliceblue" }}>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="stretch"
            mt={3}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  variant="outlined"
                  name="email"
                  value={user.email}
                  error={err === 1 && true}
                  onChange={onChangeValue}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="password"
                  variant="outlined"
                  name="pass"
                  type="password"
                  value={user.pass}
                  error={err === 2 && true}
                  onChange={onChangeValue}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" onClick={Valid}>
                  Login
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};
