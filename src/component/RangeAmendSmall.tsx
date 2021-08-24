import { Divider, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import RangeCreate from "./RangeCreate";

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
  tabHead: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
    marginLeft: theme.spacing(2),
  },
}));
function RangeAmendSmall() {
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
        {/* <Typography variant="body1" color="primary" className={classes.tabHead}>
          Tasklists {">"} Range Amendment
        </Typography> */}
        <RangeCreate />
      </div>
    </div>
  );
}

export default RangeAmendSmall;
