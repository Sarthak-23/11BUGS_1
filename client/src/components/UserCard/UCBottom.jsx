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

}));

const UCBottom = (props) => {
  const classes = useStyle();

  return (
      <Grid item container xs={12}>
        <CCCard />
        <CCCard />
        <CCCard />
        {/* <GHCard />
        <CFCard /> */}
    </Grid>
  );
};

export default UCBottom;
