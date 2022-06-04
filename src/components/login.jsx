import React, { useEffect, useState, useContext } from "react";
import { Box, Container, Grid, Button } from "@mui/material";
import { ReusableTextField } from "./reusablecomp";
import { UserContext, SnackbarContext } from "./context";
// import { usePreviousProps } from "@mui/utils";
import {useNavigate} from 'react-router-dom'
export const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const { setUserProfile } = useContext(UserContext);
  const { setSnack } = useContext(SnackbarContext);
  const [err, setErr] = useState(0);

let history=useNavigate()

  useEffect(() => {
    console.log(localStorage.getItem("UName"));

    setUserProfile({ user_name: localStorage.getItem("UName") });
  }, []);


  const Form = () => {
    if (localStorage.getItem("UName")) {
        console.log(localStorage.getItem("UName"));
  
        console.log("set user context");
        setUserProfile({ user_name: localStorage.getItem("UName") });
  
        setSnack({
          message: "User Exists In Session",
          type: "info",
          open: true,
          direction: "center",
        });
        history("/signout");
      } else {
        console.log("logging in");

    setErr(0);

    if (!user.email.includes("@")) {
      setErr(1);
      setSnack({
        message: "plese enter email id",
        type: "error",
        open: "true",
        direction: "center",
      });
    } else if (user.password.length < 6) {
      setErr(2);
      setSnack({
        message: "plese enter your password",
        type: "error",
        open: "true",
        direction: "center",
      });
    } else {
      // setUserProfile({ user_name: user.name });
      // setSnack({ message: "user logged in successfully", open: true });
      // console.log(user.name);

    localStorage.getItem("UName")
          ? console.log(localStorage.getItem("UName"))
          : console.log("No User Logged IN");

        localStorage.setItem("UName", user.email);
        localStorage.setItem("UPassword", user.password);


        history("/car");

        setUserProfile({ user_name: user.email });

        setSnack({ message: "user logged in successfully", open: true });
    }
  };
}
  const onChangeValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });

    console.log(e.target.name);
  };

  return (
    <div>
      <h1>Login</h1>
      {JSON.stringify(user)}
      <Container maxWidth="sm">
        <Box
          m={4}
          p={4}
          style={{
            border: "1px solid black",
            borderRadius: "5px",
            backgroundColor: "lightpink",
          }}
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="stretch"
            spacing={5}
          >
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <ReusableTextField
                label="Email"
                name="email"
                variant="outlined"
                value={user.email}
                error={err === 1 && true}
                change={onChangeValue}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <ReusableTextField
                label="Password"
                name="password"
                variant="outlined"
                value={user.password}
                error={err === 2 && true}
                change={onChangeValue}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Button variant="contained" onClick={Form}>
                Login
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};
