import React, { useState, useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Divider, Button, Chip } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import EditForm from "./EditForm";
import { fetchSingleMovie, deleteMovie } from "../actions/movie";
import noImage from "../images/none.svg";
import { CssBaseline } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(8),
    marginBottom: theme.spacing(8),
    marginTop: theme.spacing(4),
    marginRight: theme.spacing(1),
    //backgroundColor: "#ebf0e6",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  content: {
    marginTop: theme.spacing(3),
  },
  image: {
    width: "100%",
    borderRadius: 5,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(4),
  },
  chip: {
    marginTop: theme.spacing(1),
  },
  div1:{
    marginTop: theme.spacing(1),
  },
  div2:{
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2)
    
  },
}));

const MovieDetails = ({ history, location, match }) => {
  const { id } = match.params;
  const dispatch = useDispatch();

  const currentMovie = useSelector((state) => state.movies.currentMovie);

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    dispatch(fetchSingleMovie(id));
  }, [dispatch, id]);

  const convertRelativeTime = (date) => {
    return moment(date).fromNow();
  };

  const removeMovie = () => {
    dispatch(deleteMovie(currentMovie._id));
    history.push("/");
  };

  const openEditMode = () => {
    setEditMode(true);
  };

  const closeEditMode = () => {
    setEditMode(false);
  };

  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    
    
    <Paper className={classes.paper} elevation={0} >
      <CssBaseline/>

      {editMode ? (
        <EditForm movie={currentMovie} closeEditMode={closeEditMode} />
      ) : (
        <div  >
          <div className={classes.header}>
            <Typography variant="h5" gutterBottom>
              {currentMovie?.title}
            </Typography>
            
            <div>
              <Button
                color="primary"
                variant="outlined"
                startIcon={<EditIcon />}
                onClick={openEditMode}
                style={!user ? { display: "none" } : { display: "" }}
              >
                Edit
              </Button>{" "}
              <Button
                color="secondary"
                variant="outlined"
                onClick={removeMovie}
                startIcon={<DeleteIcon />}
                style={!user ? { display: "none" } : { display: "" }}
              >
                Delete
              </Button>
            </div>
          </div>

          <Divider />
          <Typography variant="overline" gutterBottom>
            {currentMovie?.subtitle}
          </Typography>
          <Typography variant="caption" component="p" gutterBottom>
            {convertRelativeTime(currentMovie?.createdAt)} {/*`by ${user.nickname}`*/}
          </Typography>
          <Chip
            label={`# ${currentMovie?.tag}`}
            variant="outlined"
            className={classes.chip}
          />

          <div className={classes.content}> 
            <img
              src={currentMovie?.image || noImage}
              alt="Movie"
              className={classes.image}
            />
            <Typography variant="body1" gutterBottom>
              {currentMovie?.content}
            </Typography>
          </div>
        </div>
      )}
    </Paper>
  );
};

export default MovieDetails;
