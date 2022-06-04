import React, { useContext, useState } from 'react'
import {Box,AppBar,Toolbar,Button,Grid,Tabs,Tab} from '@mui/material'
import {Link} from 'react-router-dom'
import {UserContext} from './context'

export const Menu=()=>{
 
    return(
        <Box >
        <AppBar position="static" sx={{backgroundColor:"lightgoldenrodyellow"}}>
          <Toolbar>
            <a href='/'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROwtUHYyx_lG2nPXPehZZVYeo7FTcIYuOzBpGt87BG9jRhh-VwT3Yp0I6Imj4ElWPpCi4&usqp=CAU' alt="logo" height="50"/>
            </a>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="flex-end"
            >
            
              <Button variant="contained" component={Link} to="/reg">Form</Button>
             <Button variant="contained" component={Link} to="/log">Login</Button>
             <Button variant="contained" component={Link} to="/car">Cards</Button>
             <Button variant="contained" component={Link} to="/red">Reducer</Button>
             <Button variant="contained" component={Link} to="/signout">Signout</Button>
            


            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    )
}