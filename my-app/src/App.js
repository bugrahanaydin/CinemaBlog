import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "./actions/movie";
import { makeStyles } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {
  //Link,
  //Box,
  CssBaseline,
  Container,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import LoginOutButton from "./components/LoginOutButton";

import black from "@babel/core";

import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import PenIcon from "@material-ui/icons/Create";
import MoviesList from "./components/MoviesList";
import AddForm from "./components/AddForm";
import MovieDetails from "./components/MovieDetails";
import Login from "./components/Login";
import RegisterButton from "./components/RegisterButton";
import Register from "./components/Register";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "white",
  },
  container: {
    marginTop: theme.spacing(3),
  },
  grid: {
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(),
  },
  aa: {
    color: black,
  },
  asuser: {
    marginLeft: theme.spacing(1),
    fontSize: 12,
  },
}));
const App = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const [open, setOpen] = useState(false);
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppBar position="static" color="inherit" elevation={0}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <LocalMoviesIcon />
            </IconButton>

            <Typography variant="h6" color="primary" className={classes.title}>
              <a href="http://localhost:3000/">CinemaBlog</a>
            </Typography>
            <Typography variant="h6" className={classes.asuser}>
              {user ? "logged as " + user.username : "not logged in"}
            </Typography>
            <div>
              <Button
                color="primary"
                variant="outlined"
                startIcon={<PenIcon />}
                onClick={handleOpen}
                style={!user ? { display: "none" } : { display: "" }}
              >
                New Movie
              </Button>
              {"   "}
              <RegisterButton />
              <LoginOutButton />
            </div>
          </Toolbar>
        </AppBar>

        <Grid container className={classes.container}>
          <Grid item xs={12} className={classes.grid}>
            <Router>
              <Switch>
                <Route path="/login">
                  {
                    user ? <Redirect to="/" /> : <Login />
                    /*if user already logged in redirect to main page */
                  }
                </Route>
                <Route exact path="/register" component={Register} />
                <Route exact path="/" component={MoviesList} />
                <Route exact path="/:id" component={MovieDetails} />
              </Switch>
            </Router>
          </Grid>
        </Grid>

        <AddForm open={open} handleClose={handleClose} />
      </Container>
    </>
  );
};

export default App;
