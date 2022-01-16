import { makeStyles } from '@material-ui/core'
import { teal } from '@material-ui/core/colors'

export const useStyles = makeStyles((theme) => ({
  table: {
    width: '100%',
    color: theme.palette.primary.main,
  },
  tab: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.6em',
    },
  },
  inputFields: {
    // [theme.breakpoints.up("sm")]: {
    //   width: 392,
    // },
    // [theme.breakpoints.down("sm")]: {
    //   width: fieldWidth,
    // },
    width: 400,
    [theme.breakpoints.down(750)]: {
      width: 400,
    },
    [theme.breakpoints.down(450)]: {
      width: 350,
    },
    [theme.breakpoints.down(400)]: {
      width: 250,
    },
    [theme.breakpoints.down(300)]: {
      width: 200,
    },
    height: 32,
  },
  tabHead: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.6em',
    },
  },
  multiSelect: {
    '&:hover': {
      borderColor: 'green',
    },
  },
  button: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.6em',
    },
  },
  whiteButton: {
    borderColor: theme.palette.primary.main,
    border: '2px solid',
    backgroundColor: 'white',
    color: theme.palette.primary.main,
    '&:hover': {
      color: 'white',
    },
  },
  viewLogTitle: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    alignItems: 'baseline',
  },
  header: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(2),
    },
  },
  closeViewLog: {
    color: 'white',
    backgroundColor: theme.palette.primary.main,
    fontSize: '18px',
    '&:hover': {
      color: 'yellow',
      backgroundColor: 'green',
      cursor: 'pointer',
    },
  },
  space: {
    marginRight: theme.spacing(1),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'auto',
    position: 'absolute',
    top: '0px',
    left: '0px',
  },
  spacing: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  backButton: {
    border: 0,
    color: 'blue',
    // backgroundColor: "white",
    cursor: 'pointer',
    fontSize: '16px',
  },
  eachRow: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down(750)]: {
      flexDirection: 'column',
    },
    paddingTop: '20px',
    alignItems: 'baseline',
  },
  inputLabel: {
    width: 250,
    [theme.breakpoints.down(750)]: {
      width: 250,
    },
    [theme.breakpoints.down(500)]: {
      width: 200,
    },
  },
  inputFieldBox: {
    width: 400,
    [theme.breakpoints.down(750)]: {
      width: 400,
    },
    [theme.breakpoints.down(450)]: {
      width: 350,
    },
    [theme.breakpoints.down(400)]: {
      width: 250,
    },
    [theme.breakpoints.down(300)]: {
      width: 200,
    },
  },
  textArea: {
    width: 400,
    [theme.breakpoints.down(750)]: {
      width: 400,
    },
    [theme.breakpoints.down(500)]: {
      width: 200,
    },
    border: '1px solid black',
  },

  selectField: {
    width: '100%',
    height: 38,
    color: teal[900],
  },
  selectOptions: {
    '&:hover': {
      background: teal[900],
    },
  },
  underlineRemove: {
    textDecoration: 'none',
    color: '#0000ff',
  },
  submitButton: {
    marginTop: '20px',
    marginLeft: 0,
    [theme.breakpoints.down(750)]: {
      marginLeft: 0,
    },
    width: 100,
    height: 40,
    fontSize: 'bi',
    color: teal[900],
    borderColor: teal[900],
    display: 'inline',
    '&:hover': {
      fontSize: 'large',
    },
  },
  buttons: {
    marginTop: '20px',
    marginLeft: 0,
    [theme.breakpoints.down(750)]: {
      marginLeft: 0,
    },
    width: 100,
    height: 40,
    '&:hover': {
      fontSize: 'large',
    },
  },
  root: {
    padding: theme.spacing(2),
    height: '100%',
  },
  text: {
    color: theme.palette.primary.main,
  },
  //   paper: { minWidth: "500px" },
}))
