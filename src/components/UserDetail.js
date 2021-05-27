import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 500,
  },
});
const UserDetail = (person) => {
  let { name, phone, email, dob, picture } = person.person;

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={picture && picture.large}
          title={name && name.first}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name && name.first}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {phone}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {email}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {dob && dob.age}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default UserDetail;
