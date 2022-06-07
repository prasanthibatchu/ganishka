import React from 'react'
import {Grid,Card,CardHeader,CardMedia,CardContent,Typography,Avatar} from '@mui/material'
import {blue} from '@mui/material/colors'
 import {Caro} from './carousel'
export const Home=()=>{
    return(
        <div>
          <Caro />
          <br />
          <br />
          <br />
        <h1>Hello Ganishka</h1>
        <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: blue[500] }}>P</Avatar>}
            title="Prasanthi"
          />
          <CardMedia
            component='iframe'
            height="194"
            src="https://www.youtube.com/embed/Q2VqCG13ejA"
            allow="autoPlay"
            alt="Prasanthi"
          />
          <CardContent>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Typography>
          </CardContent>
        </Card>
        </Grid>
        </div>
    )
}