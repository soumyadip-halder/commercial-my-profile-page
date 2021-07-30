import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  makeStyles,
  Button,
  Grid,
  Typography,
  ButtonGroup,
  Modal,
} from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { promotions } from "../Data/Data";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import FilterListIcon from "@material-ui/icons/FilterList";
import FilterPop from "./FilterPop";
import ApprovePage from "./ApprovePage";

const useStyles = makeStyles((theme) => ({
  table: {
    width: "100%",
    color: theme.palette.primary.main,
  },
  tab: {
    color: theme.palette.primary.main,
  },
  tabHead: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
    marginLeft: theme.spacing(2),
  },
  space: {
    marginRight: theme.spacing(1),
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "scroll",
  },
}));

function PromotionDetails() {
  const classes = useStyles();
  const [openMod, setOpenMod] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleModal = () => {
    setOpenMod(!openMod);
  };
  const toggleDialog = () => {
    setOpen(!open);
  };

  return (
    <>
      <Modal
        open={openMod}
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
      >
        <FilterPop toggleModal={toggleModal} />
      </Modal>
      <Modal
        open={open}
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
      >
        <ApprovePage toggleModal={toggleDialog} />
      </Modal>
      <Grid container>
        <Grid item lg={6}>
          <Typography
            variant="body1"
            color="primary"
            className={classes.tabHead}
          >
            Tasklist {">"} Promotions & Funding
          </Typography>
        </Grid>
        <Grid item lg={6}>
          <ButtonGroup>
            <Button
              variant="contained"
              endIcon={<ArrowDropDownIcon />}
              color="primary"
              className={classes.space}
            >
              Order By
            </Button>

            <Button
              variant="contained"
              endIcon={<ArrowDropDownIcon />}
              color="primary"
              className={classes.space}
            >
              Saved Searches
            </Button>

            <Button
              variant="contained"
              endIcon={<FilterListIcon />}
              color="primary"
              onClick={toggleModal}
            >
              Change Filter
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell className={classes.tabHead}>W/F ID</TableCell>
              <TableCell align="right" className={classes.tabHead}>
                Sub Process
              </TableCell>
              <TableCell align="right" className={classes.tabHead}>
                W/F Description
              </TableCell>
              <TableCell align="right" className={classes.tabHead}>
                Created on
              </TableCell>
              <TableCell align="right" className={classes.tabHead}>
                Last Updated on
              </TableCell>
              <TableCell align="right" className={classes.tabHead}>
                Status
              </TableCell>
              <TableCell align="right" className={classes.tabHead}>
                Detailed Logs
              </TableCell>
              <TableCell align="right" className={classes.tabHead}>
                Attachment
              </TableCell>
              <TableCell align="right" className={classes.tabHead}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {promotions.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  <Link href="#" to="#">
                    {row.id}
                  </Link>
                </TableCell>
                <TableCell align="right" className={classes.tab}>
                  {row.subprocess}
                </TableCell>
                <TableCell align="right" className={classes.tab}>
                  {row.decription}
                </TableCell>
                <TableCell align="right" className={classes.tab}>
                  {row.createdate}
                </TableCell>
                <TableCell align="right" className={classes.tab}>
                  {row.lastupdatedate}
                </TableCell>
                <TableCell align="right" className={classes.tab}>
                  {row.status}
                </TableCell>
                <TableCell align="right" className={classes.tab}>
                  <Button variant="contained" color="primary" size="small">
                    {row.logs}
                  </Button>
                </TableCell>
                <TableCell align="right" className={classes.tab}>
                  {row.attachments === "" ? null : row.attachments}
                </TableCell>
                <TableCell align="right" className={classes.tab}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={toggleDialog}
                  >
                    {row.action}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default PromotionDetails;
