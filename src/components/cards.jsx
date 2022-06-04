import React, { useContext } from "react";
import {
  Grid,
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { UserContext } from "./context";

export const Cards = () => {
  const { userProfile, setUserProfile } = useContext(UserContext);
  // console.log(userProfile);

  // console.log(user_email);
  return (
    <div>
      <h1>Ganishka</h1>
      {userProfile ? (
        <React.Fragment>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={<Avatar sx={{ bgcolor: red[500] }}>P</Avatar>}
                title="Prasanthi"
              />
              <CardMedia
                component="img"
                height="194"
                img
                src="https://data.whicdn.com/images/322630283/original.gif"
                alt="Prasanthi"
              />
              <CardContent>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Typography>
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
                // img src="https://picsum.photos/200/300"
                img
                src="https://64.media.tumblr.com/242e3704caf40b059ddaf1b00e7d100f/tumblr_opkofrEJom1t0vqjwo1_500.gifv"
                alt="Prasanthi"
              />
              <CardContent>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Typography>
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
                img
                src="https://c.tenor.com/SRGRyaHMkyAAAAAC/whirlpool-spin.gif"
                alt="Prasanthi"
              />
              <CardContent>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={<Avatar sx={{ bgcolor: red[500] }}>P</Avatar>}
                title="Prasanthi"
              />
              <CardMedia
                component="img"
                height="194"
                img
                src="https://data.whicdn.com/images/234509267/original.gif"
                alt="Prasanthi"
              />
              <CardContent>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Typography>
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
                img
                src="https://c.tenor.com/uxjrhGxPecYAAAAC/k%C3%A9k-h%C3%A1tt%C3%A9r-blue-background.gif"
                alt="Prasanthi"
              />
              <CardContent>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Typography>
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
                img
                src="https://i.pinimg.com/originals/df/c5/20/dfc520197d2585f84799ff43ab5011a4.gif"
                alt="Prasanthi"
              />
              <CardContent>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </React.Fragment>
      ) : (
        <p>no user logged in</p>
      )}
    </div>
  );
};
