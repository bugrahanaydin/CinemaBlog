import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { Grid, Button } from "@material-ui/core";
import Movie from "./Movie";
import gridFour from "../images/grid_four.svg";
import gridThree from "../images/grid_three.svg";

const useStyles = makeStyles((theme) => ({
  layoutShifter: {
    float: "right",
    margin: theme.spacing(2),
  },
  gridthree: {
    marginLeft: theme.spacing(2),
  },

  gridfour: {
    marginRight: theme.spacing(4)
  },
}));

const MoviesList = () => {
  const movies = useSelector((state) => state.movies.movies);

  const [layout, setLayout] = useState("gridThree");



  const calculateMd = () => {
    return layout === "gridThree" ? 4 : 3;
  };

  const classes = useStyles();

  return (
    <>
      {/* Layout Shifter */}
      <div className={classes.layoutShifter}>
        <Button
        className={classes.gridthree}
          variant="text"
          size="small"
          onClick={() => setLayout("gridThree")}
        >
          <img
            src={gridThree}
            style={{ background: layout === "gridThree" ? "#ccc" : "" }}
            alt="Three Grid Icon"
          />
        </Button>
        <Button
        className={classes.gridfour}
          variant="text"
          size="small"
          onClick={() => setLayout("gridFour")}
        >
          <img
            src={gridFour}
            style={{ background: layout === "gridFour" ? "#ccc" : "" }}
            alt="Four Grid Icon"
          />
        </Button>
      </div>
      <Grid container spacing={2} alignContent="stretch"
      >
        {movies.length > 0 &&
          movies.map((movie) => (
            <Grid item key={movie?._id} xs={12} md={calculateMd()}>
              <Movie {...movie}/>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default MoviesList;
