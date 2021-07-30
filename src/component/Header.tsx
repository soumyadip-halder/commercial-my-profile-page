import {
  AppBar,
  IconButton,
  Toolbar,
  makeStyles,
  Grid,
  Badge,
  Avatar,
  Dialog,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useRef } from "react";
import { LogoMin } from "./Logos";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import DropDrawer from "./DropDrawer";
import Notifications from "./Notifications";

const useStyles = (drawWidth: number) =>
  makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(5),
    },
    menuIcon: {
      color: "white",
    },
    gridContainer: {
      alignItems: "center",
    },
    logo: {
      flex: 1,
    },
    avatar: {
      backgroundColor: theme.palette.secondary.dark,
    },
    modwidth: {
      flexGrow: 1,
      //padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: drawWidth,
    },
    fullwidth: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }));

interface HeaderProps {
  toggledraw: () => void;
  open: boolean;
  drawWidth: number;
}

function Header(props: HeaderProps) {
  const classes = useStyles(props.drawWidth)();
  const [open, setOpen] = useState(false);
  const [openMod, setOpenMod] = useState(false);
  const scroll = "paper";

  const handleClose = () => {
    setOpen(!open);
  };

  const toggleModal = () => {
    setOpenMod(!openMod);
  };

  const inputEl = useRef(null);

  return (
    <>
      <Dialog
        open={openMod}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <Notifications toggleModal={toggleModal} />
      </Dialog>
      <AppBar>
        <Toolbar>
          <Grid container className={classes.gridContainer}>
            <Grid item>
              <IconButton
                className={classes.menuButton}
                onClick={props.toggledraw}
              >
                <MenuIcon className={classes.menuIcon} />
              </IconButton>
            </Grid>
            <Grid item className={classes.logo}>
              <div
              //className={props.open ? classes.modwidth : classes.fullwidth}
              >
                {props.open ? null : <LogoMin />}
              </div>
            </Grid>
            {/* <Grid item>
            <Typography variant="h6">Morrisons Commercial Dashboard</Typography>
          </Grid> */}
            <Grid item>
              <IconButton color="inherit" onClick={toggleModal}>
                <Badge
                  badgeContent={4}
                  color="secondary"
                  anchorOrigin={{ horizontal: "left", vertical: "top" }}
                >
                  <NotificationImportantIcon />
                </Badge>
              </IconButton>

              <IconButton color="inherit">
                <HelpOutlineIcon />
              </IconButton>

              <IconButton color="inherit" onClick={handleClose} ref={inputEl}>
                <Avatar className={classes.avatar}>SH</Avatar>
                <DropDrawer
                  handleClose={handleClose}
                  open={open}
                  refer={inputEl}
                />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
