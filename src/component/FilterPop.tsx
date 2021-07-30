import {
  makeStyles,
  Button,
  IconButton,
  Grid,
  ButtonGroup,
  TableContainer,
  Table,
  Paper,
  TableBody,
  TableRow,
  TableCell,
  TextField,
} from "@material-ui/core";
import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import { green } from "@material-ui/core/colors";

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
interface FilterPopProps {
  toggleModal: () => void;
}

function FilterPop(props: FilterPopProps) {
  const classes = useStyles();

  // const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
  //   setOption(newValue);
  // };

  // const [state, setState] = useState<{
  //   age: string | number;
  //   name: string;
  // }>({
  //   age: "",
  //   name: "hai",
  // });

  // const handleChange1 = (
  //   event: React.ChangeEvent<{ name?: string; value: unknown }>
  // ) => {
  //   const name = event.target.name as keyof typeof state;
  //   setState({
  //     ...state,
  //     [name]: event.target.value,
  //   });
  // };
  return (
    <div className={classes.paper}>
      <Grid container>
        <Grid item lg={4}>
          <IconButton onClick={props.toggleModal} edge="end">
            <CloseIcon />
          </IconButton>
        </Grid>
        <Grid item lg={8}>
          {/* <FormControl
            variant="outlined"
            className={classes.formControl}
            size="small"
          >
            <InputLabel
              id="demo-simple-select-outlined-label"
              className={classes.font}
            >
              Saved Searches
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={state.age}
              onChange={handleChange1}
              label="Age"
              className={classes.font}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl> */}
          {/* </Grid>
        <Grid item> */}
          <ButtonGroup>
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
              endIcon={<ArrowDropDownIcon />}
              color="primary"
              className={classes.space}
            >
              Saved Search
            </Button>
            <Button
              variant="contained"
              endIcon={<ArrowDropDownIcon />}
              color="primary"
              className={classes.space}
            >
              Apply Search
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <br />
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableBody>
            <TableRow>
              <TableCell>ID or Description</TableCell>
              <TableCell>
                <TextField
                  id="outlined-basic"
                  label=""
                  variant="outlined"
                  size="small"
                />
                <IconButton color="inherit">
                  <SearchIcon />
                </IconButton>
              </TableCell>
              <TableCell />
              <TableCell>Sub Process</TableCell>
              <TableCell>
                <TextField
                  id="outlined-basic"
                  label="Any"
                  variant="outlined"
                  size="small"
                />
                <IconButton color="inherit">
                  <ArrowDropDownCircleIcon style={{ color: green[900] }} />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Requested By</TableCell>
              <TableCell>
                <TextField
                  id="outlined-basic"
                  label="Any"
                  variant="outlined"
                  size="small"
                />
                <IconButton color="inherit">
                  <ArrowDropDownCircleIcon style={{ color: green[900] }} />
                </IconButton>
              </TableCell>
              <TableCell />
              <TableCell>Assigned to</TableCell>
              <TableCell>
                <TextField
                  id="outlined-basic"
                  label="Use Name"
                  variant="outlined"
                  size="small"
                />
                <IconButton color="inherit">
                  <ArrowDropDownCircleIcon style={{ color: green[900] }} />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Last Actioned By</TableCell>
              <TableCell>
                <TextField
                  id="outlined-basic"
                  label="Any"
                  variant="outlined"
                  size="small"
                />
                <IconButton color="inherit">
                  <ArrowDropDownCircleIcon style={{ color: green[900] }} />
                </IconButton>
              </TableCell>
              <TableCell />
              <TableCell>Workflow Status</TableCell>
              <TableCell>
                <TextField
                  id="outlined-basic"
                  label="In Progress"
                  variant="outlined"
                  size="small"
                />
                <IconButton color="inherit">
                  <ArrowDropDownCircleIcon style={{ color: green[900] }} />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Created Between</TableCell>
              <TableCell>
                <TextField
                  id="datetime-local"
                  label="Created Between"
                  type="datetime-local"
                  defaultValue="2017-05-24T10:30"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </TableCell>
              <TableCell />
              <TableCell>Last Actioned Between</TableCell>
              <TableCell>
                <TextField
                  id="datetime-local"
                  label="Last Actioned Date"
                  type="datetime-local"
                  defaultValue="2017-05-24T10:30"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default FilterPop;
