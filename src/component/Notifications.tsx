import {
  makeStyles,
  Button,
  Divider,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  IconButton,
  Tabs,
  Tab,
} from "@material-ui/core";
import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { notifications, notifications2 } from "../Data/Data";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  activeTab: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
  default: {
    backgroundColor: theme.palette.background.paper,
  },
}));
interface NotificationProps {
  toggleModal: () => void;
}

function Notifications(props: NotificationProps) {
  const classes = useStyles();
  const [option, setOption] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setOption(newValue);
  };

  return (
    <div>
      <div className={classes.paper}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <IconButton onClick={props.toggleModal} edge="end">
              <CloseIcon />
            </IconButton>
          </div>
          <div>
            <Button
              variant="contained"
              color="primary"
              endIcon={<KeyboardArrowDownIcon />}
            >
              All Applications{" "}
            </Button>
          </div>
        </div>
        <br />
        <Tabs value={option} onChange={handleChange} indicatorColor="secondary">
          <Tab
            label="My Alerts"
            value={0}
            className={option === 0 ? classes.activeTab : classes.default}
          />
          <Tab
            label="Group Alerts"
            value={1}
            className={option === 1 ? classes.activeTab : classes.default}
          />
        </Tabs>
        <Divider />
        {console.log("value", option)}
        {option === 0 ? (
          <List>
            {notifications.map((notify, index) => (
              <ListItem key={index}>
                <ListItemIcon>{notify.icon}</ListItemIcon>
                <ListItemText>
                  <strong>{notify.title}</strong> {notify.description}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        ) : (
          <List>
            {notifications2.map((notify, index) => (
              <ListItem key={index}>
                <ListItemIcon>{notify.icon}</ListItemIcon>
                <ListItemText>
                  <strong>{notify.title}</strong> {notify.description}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        )}
      </div>
    </div>
  );
}

export default Notifications;
