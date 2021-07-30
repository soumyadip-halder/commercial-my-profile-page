import {
  makeStyles,
  Button,
  IconButton,
  Grid,
  ButtonGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AttachFileIcon from "@material-ui/icons/AttachFile";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "50%",
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
  formControl: {
    margin: theme.spacing(1),
    borderColor: theme.palette.primary.main,
    minWidth: 180,
  },
  font: {
    color: theme.palette.primary.main,
    fontSize: "1rem",
  },
  selectRoot: {
    backgroundColor: "white",
  },
  space: {
    marginRight: theme.spacing(1),
  },
  table: {
    width: "100%",
    color: theme.palette.primary.main,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));
interface ApprovePageProps {
  toggleModal: () => void;
}

function ApprovePage(props: ApprovePageProps) {
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <IconButton onClick={props.toggleModal} edge="end">
        <CloseIcon />
      </IconButton>
      <Grid container>
        <Grid item lg={4}>
          <Typography variant="body1" color="primary">
            Action
          </Typography>
        </Grid>
        <Grid item lg={8}>
          <ButtonGroup>
            <Button
              variant="contained"
              endIcon={<ArrowDropDownIcon />}
              color="primary"
              className={classes.space}
            >
              Approve
            </Button>

            <Button
              variant="contained"
              color="primary"
              className={classes.space}
            >
              Submit
            </Button>
            <Button
              variant="contained"
              endIcon={<AttachFileIcon />}
              color="primary"
              className={classes.space}
            />
          </ButtonGroup>
        </Grid>
      </Grid>
      <br />
      <Typography variant="body1" color="primary">
        Remarks
      </Typography>
      <TextField
        id="outlined-basic"
        label="Remarks"
        variant="outlined"
        fullWidth
        maxRows={50}
      />
    </div>
  );
}

export default ApprovePage;
