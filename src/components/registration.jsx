import React, { useState,useContext, useEffect } from 'react'
import { ThemeProvider,createTheme,Box, Container, Grid,  Button,FormControl,FormLabel,Radio,RadioGroup,FormControlLabel,Checkbox,FormGroup} from '@mui/material'
import {ReusableTextField} from './reusablecomp'
import { UserContext,SnackbarContext} from './context'
import {  red } from '@mui/material/colors';

export const Reg = () => {   
         const [user, setUser] = useState({ name: "",  mobile: "", email: "", password: "", confirm: "", gender:""});
        
        //  useEffect(()=>{
        //     localStorage.setItem('user',JSON.stringify(user))
        // },[user])


        const [err, setErr] = useState(0);
        const { setUserProfile } = useContext(UserContext);
        const { setSnack } = useContext(SnackbarContext);
        const Theme=createTheme({
            palette:{
                primary:{
                    main:red[500]
                }
            }
        })
        const Valid = () => {
            setErr(0)
            if (user.name === "") {
                setErr(1)
                // alert("please enter name");
                setSnack({
                    message:"plese enter your name",
                    type:"error",
                    open:"true",
                    direction:"center"
                  });
            }
            
            else if (user.mobile.length !== 10) {
                setErr(2)
                setSnack({
                    message:"plese enter 10 digit mobile number",
                    type:"error",
                    open:"true",
                    direction:"center"
                  });
                // alert("please enter 10 digit mobile number");
            }
            else if (!user.email.includes("@")) {
                setErr(3)
                setSnack({
                    message:"plese enter email id",
                    type:"error",
                    open:"true",
                    direction:"center"
                  });
                // alert("please enter valid email id");
            }
            else if (user.password.length < 6) {
                setErr(4)
                setSnack({
                    message:"plese enter your password",
                    type:"error",
                    open:"true",
                    direction:"center"
                  });
                // alert("please enter 6 digit password");
            }
            else if (user.confirm.length < 6) {
                setErr(5)
                setSnack({
                    message:"plese enter confirm password",
                    type:"error",
                    open:"true",
                    direction:"center"
                  });
                // alert("please enter confirm password");
            }
            else if (user.password !== user.confirm) {
                setSnack({
                    message:"plese enter correct password",
                    type:"error",
                    open:"true",
                    direction:"center"
                  });
                // alert("please confirm password")
            }
            else{
                setUserProfile({user_name : user.name })
                setSnack({ message: "user Registered successfully", open: true });
                console.log(user)
            }
        }
        const onChangeValue = (e) => {
            console.log(e.target.name)
            setUser({ ...user, [e.target.name]: e.target.value });
        
            
        
          }
        
    
    return (

        <div>
            <h1>Registration</h1>
              {/* {JSON.stringify(user)} */}
            <Container maxWidth="sm">
                <Box m={4} p={4} style={{ border: "1px solid black", borderRadius: "5px", backgroundColor: "lightpink" }}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="stretch"
                        spacing={5}                      
                    >
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <ReusableTextField label="Name" name="name" variant="outlined"  val={user.name} error={err === 1 && true} change={onChangeValue} />
                        </Grid>
                            
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <ReusableTextField label="Mobile" name='mobile' variant="outlined" value={user.mobile} type="number" error={err === 2 && true} change={onChangeValue}/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <ReusableTextField label="Email" name='email' variant="outlined" value={user.email} error={err === 3 && true} change={onChangeValue} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <ReusableTextField label="Password" name='password' variant="outlined" value={user.password} error={err === 4 && true} change={onChangeValue}/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <ReusableTextField label="Confirm Password" name='confirm' variant="outlined" value={user.confirm} error={err === 5 && true} change={onChangeValue}/>
                        </Grid>
                      
                                <Grid>
                                    <FormControl>
                                        <FormLabel >Gender</FormLabel>
                                        <RadioGroup
                                          row
                                          name='gender'
                                          onChange={onChangeValue}
                                          
                                        >
                                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                <FormControlLabel value="male" control={<Radio />} label="Male" />                                                                        
                                        </RadioGroup>
                                    </FormControl>
                               
                            </Grid>
                        <Grid>
                      
                        <FormControl component="fieldset">
                             <FormLabel component="legend">Languages Known</FormLabel>
                                <FormGroup aria-label="position" row >
                                          
                                    <ThemeProvider theme={Theme}>
                                    <FormControlLabel
                                    value="start"
                                    control={<Checkbox />}
                                    label="Telugu"
                                    labelPlacement="start"
                                    /></ThemeProvider>
                                    <FormControlLabel
                                    value="start"
                                    control={<Checkbox />}
                                    label="English"
                                    labelPlacement="start"
                                    />
                                    <FormControlLabel
                                    value="start"
                                    control={<Checkbox />}
                                    label="Hindi"
                                    labelPlacement="start"
                                    />
                                </FormGroup>
                        </FormControl>
                        </Grid>
                      

                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      
                            <Button variant="contained" onClick={Valid}>Submit</Button>
                            
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    )
}






