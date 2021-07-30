import { Menu, MenuItem, makeStyles } from "@material-ui/core";
import React from "react";

interface DropDrawerProps {
  handleClose: () => void;
  open: boolean;
  refer: React.MutableRefObject<null>;
}

const useStyles = makeStyles((theme) => ({
  text: {
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));
function DropDrawer(props: DropDrawerProps) {
  const classes = useStyles();
  return (
    <Menu
      id="simple-menu"
      anchorEl={props.refer.current}
      keepMounted
      open={props.open}
      onClose={props.handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      getContentAnchorEl={null}
    >
      <MenuItem onClick={props.handleClose} className={classes.text}>
        My Profile
      </MenuItem>
      <MenuItem onClick={props.handleClose} className={classes.text}>
        My Usage Logs
      </MenuItem>
      <MenuItem onClick={props.handleClose} className={classes.text}>
        My Preference
      </MenuItem>
      <MenuItem onClick={props.handleClose} className={classes.text}>
        Sign Out
      </MenuItem>
    </Menu>
  );
}

export default DropDrawer;
