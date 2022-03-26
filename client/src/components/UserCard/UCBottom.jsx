import React from "react";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { makeStyles } from "@mui/styles";
import CCCard from "./CCCard";
import CFCard from "./CFCard";
import GHCard from "./GHCard";

const useStyle = makeStyles((theme) => ({
  cpBox: {
    display: "flex",
    justifyContent: "center",
    border: "1px solid #D1D1D1",
    borderRadius: "4px",
    boxShadow: "2px 2px 5px #00000016",    
  },
}));

const UCBottom = (props) => {
  const classes = useStyle();

    return (
        <Grid item container xs={12}>
      <Grid item container xs={12} md={4} className={classes.cpBox}>
        <CCCard />
      </Grid>
      <Grid item container xs={12} md={4} className={classes.cpBox}>
        <CCCard />
      </Grid>
      <Grid item container xs={12} md={4} className={classes.cpBox}>
        <CFCard />
      </Grid>
    </Grid>
  );
};

export default UCBottom;
