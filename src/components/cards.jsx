import React from 'react'
import logo from './images/image.jpg'; // with import
import { Card, CardHeader, Avatar, CardMedia, CardContent,Typography,Grid } from '@mui/material'

import { red } from '@mui/material/colors'
export const Cardss = () => {
    return (
        <div>
            <h1>Cards</h1>
            <br />
            <Grid container spacing={3}>
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="flex-start"
                >

            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={<Avatar sx={{ bgcolor: red[500] }}>P</Avatar>}
                    title="Prasanthi"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={logo}
                    alt="Prasanthi"                    
                />
                <CardContent>
               
                <Typography>The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </Typography>
                </CardContent> 
            </Card>
           
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={<Avatar sx={{ bgcolor: red[800] }}>P</Avatar>}              
                    title="Prasanthi"
                />
                 <CardMedia
                    component='iframe'
                    height="194"
                    src={"https://www.youtube.com/embed/Dmbknpc5mdY" } 
                    allow="autoPlay"/>
               
                <CardContent>
                <Typography>The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </Typography>
                </CardContent> 
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={<Avatar sx={{ bgcolor: red[500] }}>P</Avatar>}
                    title="Prasanthi"
                />
                <CardMedia
                
               
                component="img"
               
                height="194"
                image=
                    "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2020/07/solar_orbiter_s_first_views_of_the_sun5/22136942-2-eng-GB/Solar_Orbiter_s_first_views_of_the_Sun_pillars.gif"
               alt="Prasanthi"                
                />
                <CardContent>
                <Typography>The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </Typography>
                </CardContent> 
            </Card>
            </Grid>
            </Grid>

        </div>
    )
}