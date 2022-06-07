import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cards } from "./components/cards";
import { Signup } from "./components/signup";
import { Signin } from "./components/signin";
import { UserContext, SnackContext } from "./components/context";
import { Snackbar, Slide, Alert } from "@mui/material";
import { Signout } from "./components/signout";
import {Home} from './components/home'

function App() {
  const [userProfile, setUserProfile] = useState(null);
  const [snack, setSnack] = useState({
    message: "",
    color: "",
    open: false,
  });
  useEffect(() => {
    var localdata = localStorage.getItem("Email");
    if (localdata != null) {
      setUserProfile({ user_email: localStorage.getItem("Email") });
    }
  }, []);
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Snackbar
          autoHideDuration={3000}
          open={snack.open}
          onClose={() => {
            setSnack((prevdata) => {
              return {
                ...prevdata,
                open: false,
              };
            });
          }}
          TransitionComponent={Slide}
        >
          <Alert
            variant="filled"
            onClose={() => {
              setSnack((prevdata) => {
                return {
                  ...prevdata,
                  open: false,
                };
              });
            }}
            severity={snack.type}
          >
            {snack.message}
          </Alert>
        </Snackbar>
       
        <UserContext.Provider value={{ userProfile, setUserProfile }}>
          <SnackContext.Provider value={{ snack, setSnack }}>
            <Router>
              <Header />
              
              <Routes>
              <Route path="/" element={<Home />} />
                <Route path="/cards" element={<Cards />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signout" element={<Signout />} />
              </Routes>
            </Router>
          </SnackContext.Provider>
        </UserContext.Provider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
