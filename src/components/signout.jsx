import  React,{useEffect,useContext} from 'react'
import {Button} from '@mui/material'
import {UserContext,SnackbarContext} from './context'

export const Signout=()=>{
    const {userProfile,setUserProfile}=useContext(UserContext);
            useEffect(() => {
                console.log(userProfile);
            },[])
    return(
        <div>
            <h1>Logout page</h1>
            {JSON.stringify(userProfile)}
            {userProfile ? (
                <h3>user details are {"" + userProfile && userProfile.user_name}</h3>
            ):(<p>no user logged in</p>)}
           <a href='/log'>
            <Button variant='contained' onClick={()=>{
                setUserProfile(null);
                localStorage.removeItem("UName");
                localStorage.removeItem("UPassword");
                
            }}
            type="submit"
            >Signout</Button>
           </a>
        </div>
    )
}