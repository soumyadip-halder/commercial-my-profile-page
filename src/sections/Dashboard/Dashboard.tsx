import {
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
  CardHeader,
  IconButton,
  Divider,
  Tooltip,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
// import { pendingStatusDetails } from './DataConstant'
import { userTaskDashboard } from './DataConstant'
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent'

import {
  set_mygrouppendingAction,
  set_mygroupunassignAction,
  set_myinprogressAction,
  set_mypendingAction,
  reset_all,
} from '../../redux/Actions/PendingAction/Action'
import { getStatusCamundaAPI } from '../../api/Fetch'
import { ServiceResponse } from '../../pages/Login/Messages'

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2),
  },
  spacing: {
    margin: theme.spacing(2),
  },
  header: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
  wide: {
    [theme.breakpoints.up(900)]: {
      maxWidth: 600,
      fontSize: '14px',
    },
    [theme.breakpoints.down(900)]: {
      maxWidth: 400,
      fontSize: '14px',
    },
    [theme.breakpoints.down(750)]: {
      maxWidth: 400,
      fontSize: '14px',
    },
    [theme.breakpoints.down(500)]: {
      width: 300,
      fontSize: '12px',
    },
    [theme.breakpoints.down(400)]: {
      width: 200,
      fontSize: '12px',
    },
    [theme.breakpoints.down(300)]: {
      width: 200,
      fontSize: '12px',
    },
  },
  color90: {
    color: theme.palette.primary.main,
  },
  color80: {
    color: '#FFBF00',
  },
  color60: {
    color: 'red',
  },
  tool: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
  },
  tabHead: {
    color: theme.palette.primary.main,
    // fontWeight: 'bold',
    marginLeft: theme.spacing(2),
  },
}))
function Dashboard(props: any) {
  const [newMap, setNewMap] = useState<Array<any>>([])
  const theme = useTheme()
  const active = useMediaQuery(theme.breakpoints.down(700))
  const [isProgressLoader, setIsProgressLoader] = React.useState(false)
  // let newMap1: Array<any> = []

  const {
    mypendingAction,
    myinprogressTasks,
    mygroupPendingAction,
    mygroupUnassignTasks,
    set_mypendingAction,
    set_myinprogressAction,
    set_mygrouppendingAction,
    set_mygroupunassignAction,
    reset_all,
  } = props
  const classes = useStyles()

  useEffect(() => {
    setIsProgressLoader(true)
    let pendingTasks: Array<any> = []
    let inprogressTasks: Array<any> = []
    let mygroupPendingTasks: Array<any> = []
    let mygroupUnassignTasks: Array<any> = []
    setNewMap([...userTaskDashboard])
    getStatusCamundaAPI &&
      getStatusCamundaAPI()
        .then((res) => {
          const pendingStatusDetails = res.data

          setIsProgressLoader(false)
          if (pendingStatusDetails && pendingStatusDetails.status) {
            pendingTasks =
              pendingStatusDetails &&
              pendingStatusDetails.status &&
              pendingStatusDetails.status.filter(
                (item: any) => item.details.toLowerCase() === 'mypendingtasks'
              )

            inprogressTasks =
              pendingStatusDetails &&
              pendingStatusDetails.status &&
              pendingStatusDetails.status.filter(
                (item: any) =>
                  item.details.toLowerCase() === 'myinprogresstasks'
              )
            mygroupPendingTasks =
              pendingStatusDetails &&
              pendingStatusDetails.status &&
              pendingStatusDetails.status.filter(
                (item: any) =>
                  item.details.toLowerCase() === 'mygrouppendingtasks'
              )
            mygroupUnassignTasks =
              pendingStatusDetails &&
              pendingStatusDetails.status &&
              pendingStatusDetails.status.filter(
                (item: any) =>
                  item.details.toLowerCase() === 'mygroupunnassignedtasks'
              )

            // console.log(pendingTasks)
            // console.log(inprogressTasks)
            // console.log(mygroupPendingTasks)
            // console.log(mygroupUnassignTasks)
            set_mypendingAction(pendingTasks)
            set_myinprogressAction(inprogressTasks)
            set_mygrouppendingAction(mygroupPendingTasks)
            set_mygroupunassignAction(mygroupUnassignTasks)
          }
        })
        .catch((error) => {
          setIsProgressLoader(false)
          set_mypendingAction([])
          set_myinprogressAction([])
          set_mygrouppendingAction([])
          set_mygroupunassignAction([])
        })
    // }, [pendingStatusDetails])
    return reset_all()
  }, [])

  useEffect(() => {
    // console.log(mypendingAction)
    // console.log(myinprogressTasks)
    // console.log(mygroupPendingAction)
    // console.log(mygroupUnassignTasks)
    if (
      mypendingAction &&
      myinprogressTasks &&
      mygroupPendingAction &&
      mygroupUnassignTasks
    ) {
      const newMap1 = userTaskDashboard.map((item) => {
        if (item.value.toLowerCase() === 'usermanagement') {
          item.my.pendingActions =
            mypendingAction.length > 0 && mypendingAction[0].tasks.length > 0
              ? mypendingAction[0].tasks.length
              : 0
          item.my.inProgressTask =
            myinprogressTasks.length > 0 &&
            myinprogressTasks[0].tasks.length > 0
              ? myinprogressTasks[0].tasks.length
              : 0
          item.myGroup.pendingActions =
            mygroupPendingAction.length > 0 &&
            mygroupPendingAction[0].tasks.length > 0
              ? mygroupPendingAction[0].tasks.length
              : 0
          item.myGroup.inProgressTask =
            mygroupUnassignTasks.length > 0 &&
            mygroupUnassignTasks[0].tasks.length > 0
              ? mygroupUnassignTasks[0].tasks.length
              : 0
        }

        return item
      })

      setNewMap([...newMap1])
    }
  }, [
    mypendingAction,
    myinprogressTasks,
    mygroupPendingAction,
    mygroupUnassignTasks,
  ])

  return (
    <div style={{ padding: '20px' }}>
      <LoadingComponent showLoader={isProgressLoader} />
      <Typography variant="h6" color="primary" className={classes.tabHead}>
        Task Dashboard{' '}
        <Tooltip
          title={ServiceResponse.getMessage('dashboard', 'task')}
          classes={{ tooltip: classes.wide }}
          placement={!active ? 'right-start' : 'bottom'}
        >
          <IconButton>
            <InfoOutlinedIcon />
          </IconButton>
        </Tooltip>
      </Typography>
      <Grid container>
        {newMap &&
          newMap.length > 0 &&
          newMap.map((dash, index) => (
            <Grid item xl={6} lg={6} md={6} sm={6} xs={12} key={index}>
              <Card className={classes.card}>
                <CardHeader
                  title={dash.title}
                  className={classes.header}
                  titleTypographyProps={{ variant: 'body1' }}
                />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <table
                        cellSpacing={5}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                        }}
                      >
                        <tbody>
                          <tr>
                            <th>
                              <Typography variant="body1" color="primary">
                                My Task
                              </Typography>
                            </th>
                          </tr>
                          <tr>
                            <td>
                              <Typography variant="body2" color="primary">
                                &#8226; Pending
                              </Typography>
                            </td>

                            <td>
                              <Typography
                                variant="body2"
                                color={
                                  dash.my.pendingActions > 0
                                    ? 'primary'
                                    : 'secondary'
                                }
                              >
                                <Link
                                  to={
                                    dash.my.pendingActions > 0
                                      ? dash.my.pendingActionURL
                                      : '#'
                                  }
                                >
                                  {' '}
                                  {dash.my.pendingActions}
                                </Link>
                              </Typography>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Typography variant="body2" color="primary">
                                &#8226; In-progress
                              </Typography>
                            </td>

                            <td>
                              <Typography
                                variant="body2"
                                color={
                                  dash.my.inProgressTask > 0
                                    ? 'primary'
                                    : 'secondary'
                                }
                              >
                                <Link
                                  to={
                                    dash.my.inProgressTask > 0
                                      ? dash.my.inProgressTaskURL
                                      : '#'
                                  }
                                >
                                  {dash.my.inProgressTask}
                                </Link>
                              </Typography>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <Divider />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <Typography variant="body1" color="primary">
                                Group Task
                              </Typography>
                            </th>
                          </tr>

                          <tr>
                            <td>
                              <Typography variant="body2" color="primary">
                                &#8226; Pending
                              </Typography>
                            </td>

                            <td>
                              <Typography
                                variant="body2"
                                color={
                                  dash.myGroup.pendingActions > 0
                                    ? 'primary'
                                    : 'secondary'
                                }
                              >
                                <Link
                                  to={
                                    dash.myGroup.pendingActions > 0
                                      ? dash.myGroup.myGrouppendingActionURL
                                      : '#'
                                  }
                                >
                                  {dash.myGroup.pendingActions}
                                </Link>
                              </Typography>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Typography variant="body2" color="primary">
                                &#8226; Unassigned
                              </Typography>
                            </td>

                            <td>
                              <Typography
                                variant="body2"
                                color={
                                  dash.myGroup.inProgressTask > 0
                                    ? 'primary'
                                    : 'secondary'
                                }
                              >
                                <Link
                                  to={
                                    dash.myGroup.inProgressTask > 0
                                      ? dash.myGroup.myGroupInprogressTaskURL
                                      : '#'
                                  }
                                >
                                  {dash.myGroup.inProgressTask}
                                </Link>
                              </Typography>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    mypendingAction: state.pendingActionReducer.mypendingAction,
    myinprogressTasks: state.pendingActionReducer.myinprogressTasks,
    mygroupPendingAction: state.pendingActionReducer.mygroupPendingAction,
    mygroupUnassignTasks: state.pendingActionReducer.mygroupUnassignTasks,
  }
}

const matchDispatchToProps = (dispatch: any) => {
  return {
    set_mypendingAction: (pendingTasks: any) =>
      dispatch(set_mypendingAction(pendingTasks)),
    set_myinprogressAction: (inprogressTasks: any) =>
      dispatch(set_myinprogressAction(inprogressTasks)),
    set_mygrouppendingAction: (mygroupPendingTasks: any) =>
      dispatch(set_mygrouppendingAction(mygroupPendingTasks)),
    set_mygroupunassignAction: (mygroupUnassignTasks: any) =>
      dispatch(set_mygroupunassignAction(mygroupUnassignTasks)),
    reset_all: () => dispatch(reset_all()),
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Dashboard)
