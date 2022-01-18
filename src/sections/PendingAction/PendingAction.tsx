import {
  Grid,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { teal } from '@material-ui/core/colors'
import { useStyles } from './Styles'
import { pendingActionDetails, pendingActionTableHeaders } from './tableHeader'
import { set_pendingAction } from '../../redux/Actions/PendingAction'
import { reset_mypendingAction } from '../../redux/Actions/PendingAction/Action'
import { routes } from '../../util/Constants'

function PendingAction(props: any) {
  const { set_pendingAction, mypendingAction, reset_mypendingAction } = props
  const { DEFAULT, DASHBOARD_PENDINGACTIONS_UPDATE, DASHBOARD } = routes
  const history = useHistory()
  const theme = useTheme()
  const classes = useStyles()
  const [globalFilter, setGlobalFilter] = useState('')
  const [pendingActionDetails, setPendingActionDetails] = useState([])
  const [pendingActionLoading, setPendingActionLoading] = useState(false)
  const active = useMediaQuery(theme.breakpoints.down('sm'))
  const handleNameClick = (e: any) => {
    console.log(e.target.value)
    const selectedRow = pendingActionDetails.filter(
      (row: any) => row.requestId === e.target.value
    )
    set_pendingAction(selectedRow)
    console.log(selectedRow)
    history.push(`${DEFAULT}${DASHBOARD_PENDINGACTIONS_UPDATE}`)
  }
  const goBack = () => {
    reset_mypendingAction()
    history.goBack()
  }
  useEffect(() => {
    return () => {
      reset_mypendingAction()
    }
  }, [])
  useEffect(() => {
    if (!mypendingAction) history.push(`${DEFAULT}${DASHBOARD}`)
  }, [mypendingAction, DASHBOARD, DEFAULT, history])

  useEffect(() => {
    if (mypendingAction) {
      setPendingActionDetails(mypendingAction[0].tasks)
    }
  }, [mypendingAction])

  const requestIdTemplate = (rowData: any) => {
    return (
      <button
        className={classes.exploreButtonforid}
        value={rowData.requestId}
        onClick={handleNameClick}
      >
        {rowData.requestId}
      </button>
    )
  }
  return (
    <div className={classes.root}>
      <div className={classes.value}>
        <Grid container className={classes.container}>
          <Grid item sm={12} xs={12}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                p: 2,
                width: '100%',
                flexWrap: 'wrap',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexGrow: 1,
                }}
              >
                <Typography variant="h6">Pending Actions</Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                }}
              >
                <input
                  type="text"
                  value={globalFilter}
                  onChange={(e) => setGlobalFilter(e.target.value)}
                  placeholder={' Search Pending Action details '}
                  style={{
                    width: '200px',
                  }}
                />
              </Box>
              <Box
                sx={{
                  paddingLeft: 20,
                }}
              >
                <button className={classes.exploreButton} onClick={goBack}>
                  Back
                </button>
              </Box>
            </Box>
            <Box
              sx={{
                textAlign: 'center',
                p: 2,
              }}
            >
              {!active ? (
                <DataTable
                  value={pendingActionDetails}
                  paginator
                  paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
                  rows={10}
                  style={{
                    width: '100%',
                  }}
                  scrollable
                  scrollHeight="flex"
                  globalFilter={globalFilter}
                  emptyMessage="No users found."
                  showGridlines
                  loading={pendingActionLoading}
                >
                  {pendingActionTableHeaders.map((column) => {
                    return (
                      <Column
                        key={column.field}
                        field={column.field}
                        header={column.headerName}
                        bodyStyle={{
                          fontSize: '12px',
                          width: column.width,
                          overflowX: 'auto',
                        }}
                        headerStyle={{
                          fontSize: '12px',
                          width: column.width,
                          backgroundColor: teal[900],
                          color: 'white',
                        }}
                        body={column.field === 'requestId' && requestIdTemplate}
                        sortable
                      />
                    )
                  })}
                </DataTable>
              ) : (
                <DataTable
                  value={pendingActionDetails}
                  paginator
                  paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
                  rows={10}
                  style={{
                    width: '100%',
                  }}
                  scrollable
                  scrollHeight="flex"
                  globalFilter={globalFilter}
                  emptyMessage="No users found."
                  showGridlines
                  loading={pendingActionLoading}
                >
                  {pendingActionTableHeaders.map((column) => {
                    return (
                      <Column
                        key={column.field}
                        field={column.field}
                        header={column.headerName}
                        bodyStyle={{
                          fontSize: '12px',
                          width: column.width,
                          overflowX: 'auto',
                        }}
                        headerStyle={{
                          fontSize: '12px',
                          width: column.width,
                          backgroundColor: teal[900],
                          color: 'white',
                        }}
                        body={column.field === 'requestId' && requestIdTemplate}
                        sortable
                      />
                    )
                  })}
                </DataTable>
              )}
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
const mapStateToProps = (state: any) => {
  return {
    mypendingAction: state.pendingActionReducer.mypendingAction,
    // myinprogressTasks: state.pendingActionReducer.myinprogressTasks,
    // mygroupPendingAction: state.pendingActionReducer.mygroupPendingAction,
    // mygroupUnassignTasks: state.pendingActionReducer.mygroupUnassignTasks,
  }
}
const matchDispatchToProps = (dispatch: any) => {
  return {
    set_pendingAction: (pendingAction: any) =>
      dispatch(set_pendingAction(pendingAction)),
    reset_mypendingAction: () => dispatch(reset_mypendingAction()),
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(PendingAction)
