import {
  Menu,
  MenuItem,
  makeStyles,
  Typography,
  Divider,
  IconButton,
  Badge,
} from "@material-ui/core";
import React from "react";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

interface DropDrawerProps {
  handleClose: () => void;
  toggleModal: () => void;
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
function DropDrawerSmall(props: DropDrawerProps) {
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
        <IconButton color="inherit" onClick={props.toggleModal}>
          <Badge
            badgeContent={4}
            color="secondary"
            anchorOrigin={{ horizontal: "left", vertical: "top" }}
          >
            <NotificationImportantIcon />
            <Typography variant="body1">Notifications</Typography>
          </Badge>
        </IconButton>
      </MenuItem>
      <MenuItem onClick={props.handleClose} className={classes.text}>
        <IconButton color="inherit">
          <HelpOutlineIcon />
          <Typography variant="body1">Questions</Typography>
        </IconButton>
      </MenuItem>
      <Divider />
      <MenuItem onClick={props.handleClose} className={classes.text}>
        <Typography variant="body1">My Profile</Typography>
      </MenuItem>
      <MenuItem onClick={props.handleClose} className={classes.text}>
        <Typography variant="body1">My Usage Logs</Typography>
      </MenuItem>
      <MenuItem onClick={props.handleClose} className={classes.text}>
        <Typography variant="body1">My Preference</Typography>
      </MenuItem>
      <Divider />
      <MenuItem onClick={props.handleClose} className={classes.text}>
        <Typography variant="body1">Sign Out</Typography>
      </MenuItem>
    </Menu>
  );
}

export default DropDrawerSmall;
