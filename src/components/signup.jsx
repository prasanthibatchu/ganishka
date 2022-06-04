import React,{useContext, useState} from 'react'
import {Container,Box,Button,Grid,TextField,FormControl,RadioGroup,FormControlLabel,Radio,Checkbox,FormGroup} from '@mui/material'
import { UserContext,SnackContext } from './context'


export const Signup=()=>{
    const [user,setUser]=useState({
        name:"",email:"",phone:"",address:"",gender:"",city:"",state:"",pass:"",cpass:"",checkbox:false
    })
    const {setUserProfile}=useContext(UserContext)
    const {setSnack}=useContext(SnackContext)
    const [err,setErr]=useState(0)
    const Valid=()=>{
        setErr(0)
        if(user.name === ""){
            setErr(1)
            // alert("please enter your name")
            setSnack({
                message:"please enter your name",
                type: "error",
                open: true,
                direction: "center",
            })
        }
        else if(!user.email.includes('@') ){
            setErr(2)
            // alert("please enter your email id")
            setSnack({
                message:"please enter your email id",
                type: "error",
                open: true,
                direction: "center",
            })
        }
        else if(user.phone.length !== 10){
            setErr(3)
            // alert("please enter 10 digits phone number")
            setSnack({
                message:"please enter 10 digits phone number",
                type: "error",
                open: true,
                direction: "center",
            })
        }
        else if(user.address === ""){
            setErr(4)
            // alert("please enter your address")
            setSnack({
                message:"please enter your address",
                type: "error",
                open: true,
                direction: "center",
            })
        }
        else if(user.gender === ""){
           
            // alert("please enter your address")
            setSnack({
                message:"please select gender",
                type: "error",
                open: true,
                direction: "center",
            })
        }
        else if(user.city === ""){
            setErr(5)
            // alert("please enter your city")
            setSnack({
                message:"please enter your city",
                type: "error",
                open: true,
                direction: "center",
            })
        }
        else if(user.state === ""){
            setErr(6)
            // alert("please enter your state")
            setSnack({
                message:"please enter your state",
                type: "error",
                open: true,
                direction: "center",
            })
        }
        else if(user.pass.length <6){
            setErr(6)
            // alert("please enter your password")
            setSnack({
                message:"please enter your password",
                type: "error",
                open: true,
                direction: "center",
            })
        }
        else if(user.cpass.length <6){
            setErr(6)
            // alert("please confirm password")
            setSnack({
                message:"please confirm password",
                type: "error",
                open: true,
                direction: "center",
            })
        }
        else if (user.pass !== user.cpass){
            setErr(6)
            // alert("mismatch password")
            setSnack({
                message:"password mismatch",
                type: "error",
                open: true,
                direction: "center",
            })
        }
        else if (user.checkbox === false){
            
            setSnack({
                message:"plese agree terms and conditions",
                type: "error",
                open: true,
                direction: "center",
            })
        }
        else{
            setUserProfile({ user_name: user.name });
            setSnack({ message: "user Registered in successfully", open: true });
        }
    }
    const onChangeValue=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
   
  
    return(
        <div>
        <h1>Registration Form</h1>
        <Container maxWidth="sm">
            <Box m={5} p={5} sx={{backgroundColor:"aliceblue"}}>
                <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="stretch"
                  mt={3}         
                >
                    <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField  label="Name" variant="outlined" name='name' value={user.name} error={err ===1 && true} onChange={onChangeValue}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField  label="Email" variant="outlined"  name='email' value={user.email} error={err ===2 && true} onChange={onChangeValue}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField  label="Phone" variant="outlined" name='phone' value={user.phone} error={err ===3 && true} onChange={onChangeValue} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField  label="Address" variant="outlined" maxRows={4}  multiline name='address' value={user.address} error={err ===4 && true} onChange={onChangeValue} />
                    </Grid>
                    <Grid item xs={12}>
                    <Grid>
                         <FormControl>
                                
                                <RadioGroup
                                     row
                                     name='gender'
                                     value={user.gender}
                                    onChange={onChangeValue}
                                  >
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />                                                                        
                                </RadioGroup>
                           </FormControl>
                               
                    </Grid>  
                        
                    <TextField label="city" variant="outlined" name='city' value={user.city} error={err ===5 && true} onChange={onChangeValue} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField  label="State" variant="outlined" name='state' value={user.state} error={err ===6 && true} onChange={onChangeValue} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField  label="password" variant="outlined" name='pass' value={user.pass} error={err ===7 && true} onChange={onChangeValue} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField  label="confirm password" variant="outlined" name='cpass' value={user.cpass} error={err ===8 && true} onChange={onChangeValue} />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl>
                            <FormGroup>
                            <FormControlLabel
                                control={
                                <Checkbox />
                                }
                                label="I agree terms and conditions"
                                value={user.checkbox}
                                name='checkbox'
                                onChange={onChangeValue}
                            />
                            </FormGroup>
                            </FormControl>
                        </Grid>

                    <Grid item xs={12}>
                    <Button variant='contained' onClick={Valid}>Submit</Button>
                    </Grid>
                </Grid></Grid>
            </Box>
        </Container>
        </div>
    )
}