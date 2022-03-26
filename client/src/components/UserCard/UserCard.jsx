import * as React from "react";
import { styled } from "@mui/material/styles";

import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import { makeStyles } from "@mui/styles";

import UCTop from "./UCTop";
import UCBottom from "./UCBottom";

const useStyles = makeStyles((theme) => ({
  CARD: {
    display: "flex",
    justifyContent: "center",
    border: "1px solid #D1D1D1",
    borderRadius: "4px",
    boxShadow: "2px 2px 5px #00000016",
    width: "70%",
    height: "80vh",
    padding: "10px"
  },
}));


const UserCard = (props) => {
 const classes = useStyles();

  return (
    <Grid container className={classes.CARD}>
      {/* top */}
      <UCTop />

      {/* bottom */}
      <UCBottom  />
    </Grid>
  );
};


export default UserCard;