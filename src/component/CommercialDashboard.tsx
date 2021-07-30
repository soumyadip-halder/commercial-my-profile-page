import { Divider, Grid, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import Dashboard from "./Dashboard";
import Sidepanel from "./Sidepanel";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    height: "100%",
  },
  value: {
    flex: 1,
  },
  container: {
    height: "100%",
  },
}));
function CommercialDashboard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Typography variant="h6" color="primary" align="center">
          Morrisons Commercial Dashboard
        </Typography>
        <Divider />
      </div>
      <div className={classes.value}>
        <Grid container className={classes.container}>
          <Grid item lg={2} md={3} sm={3} xs={6}>
            <Sidepanel />
          </Grid>
          <Grid item lg={10} md={9} sm={9} xs={6}>
            <Dashboard />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default CommercialDashboard;
