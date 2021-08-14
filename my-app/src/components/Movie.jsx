import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Chip,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";
import { Divider } from "@material-ui/core";
import noImage from "../images/none.svg";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 374,
    position: "relative",
    //paddingLeft: 40,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },

  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  chip: {
    marginTop: theme.spacing(2),
  },
  chip1: {
    marginTop: theme.spacing(1),
  }
}));
/*const getuser = async()=>{
const user = JSON.parse(localStorage.getItem("user"));
return(user.username)
}
const user = JSON.parse(localStorage.getItem("user"));*/
const Movie = ({ _id, title, subtitle, content, tag, image, user_name, createdAt }) => {

  const classes = useStyles();

  const convertRelativeTime = (date) => {
    return moment(date).fromNow();
  };
 

//--------------------loginWithRedirect, loginWithPopup, logout
  return (
    <Card className={classes.root}
    style={{borderRadius: "20px",}}
    >
      <CardMedia
        className={classes.media}
        image={image || noImage}
        title="Paella dish"
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{user_name}</Typography>
        <Typography variant="body2">
          {convertRelativeTime(createdAt)}
        </Typography>
      </div>
      <CardContent>
        <Typography variant="h6" component="p" gutterBottom>
          {title}
        </Typography>{" "}
        <Divider light />
        <Typography variant="overline" component="p" gutterBottom>
          {subtitle}
        </Typography>{" "}
        <Divider light className={classes.chip1} />
        <Typography variant="body2" component="p">
          {content?.substring(0, 250) + "..."}
        </Typography>
        <Divider light />
        <Chip label={`# ${tag}`} variant="outlined" className={classes.chip} />
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          <Link to={`/${_id}`}>See more</Link>
          
        </Button>
      </CardActions>
    </Card>
  );
};
// /movies/${_id}
export default Movie;
