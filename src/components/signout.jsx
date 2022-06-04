import React,{ useContext, useEffect } from 'react'
import {Button} from '@mui/material'
import {UserContext} from './context'

export const Signout=()=>{
    const {userProfile,setUserProfile}=useContext(UserContext)
    useEffect(()=>{
        console.log(userProfile)
    },[])
    return(
        <div>
            <h1>Logout page</h1>
            {userProfile ? (
        <h3>user details are {"  " + userProfile && userProfile.user_email} </h3>
      ) : (
        <p>no user logged in</p>
      )}    
      <a href='/signin'>
            <Button variant='contained' type='submit' onClick={()=>{
                setUserProfile(null)
                localStorage.removeItem("Email")
                localStorage.removeItem("Password")
            }} >Logout</Button>
            </a>
        </div>
    )
}