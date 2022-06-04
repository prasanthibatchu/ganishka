import React, { useState,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Menu } from "./components/menu";
import { Reg } from "./components/registration";
import { Login } from "./components/login";
import { Home } from "./components/home";
import { Footer } from "./components/footer";
import { Reducer } from "./components/reducer";
import { UserContext, SnackbarContext } from "./components/context";
import { Snackbar, Slide, Alert } from "@mui/material";
import { Cardss } from "./components/cards";
import { Signout } from "./components/signout";

function App() {
  const [userprofile, setUserProfile] = useState(null);
  const [snack, setSnack] = useState({
    message: "",
    color: "",
    open: false,
  });
  useEffect(()=>{
    var localdata=localStorage.getItem("UName");
    if(localdata!==null){
      setUserProfile({ user_name: localStorage.getItem("UName") });
    }
  },[])
  return (
    <div className="App">
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

          <UserContext.Provider value={{ userprofile, setUserProfile }}>
            <SnackbarContext.Provider value={{ snack, setSnack }}>
              <Router>
                <Menu />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/reg" element={<Reg />} />
                  <Route path="/log" element={<Login />} />
                  <Route path="/car" element={<Cardss />} />
                  <Route path="/red" element={<Reducer />} />
                  <Route path="/signout" element={<Signout />} />
                </Routes>
              </Router>
            </SnackbarContext.Provider>
          </UserContext.Provider>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
