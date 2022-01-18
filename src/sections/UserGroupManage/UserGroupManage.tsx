import {
  Typography,
  Box,
  Dialog,
  useMediaQuery,
  useTheme,
  Grid,
} from '@material-ui/core'
import React from 'react'
import { useEffect, useState } from 'react'
import { constants } from './DataConstants'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import 'primeicons/primeicons.css'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.css'
import { useHistory } from 'react-router-dom'
import { teal } from '@material-ui/core/colors'
import { connect } from 'react-redux'
import { getUserGroupAPI } from '../../api/Fetch'
import { useStyles, fieldWidth } from './Styles'
import { set_groupID } from '../../redux/Actions/ManageGroup'
import { routes } from '../../util/Constants'

function UserGroupManage(props: any) {
  const { set_groupID } = props
  const classes = useStyles()
  const theme = useTheme()
  const history = useHistory()
  const { DEFAULT, USERCONFIG_GROUPUPDATE, USERCONFIG_GROUPCREATE } = routes
  const active = useMediaQuery(theme.breakpoints.down(700))
  const width = useMediaQuery(theme.breakpoints.up('md'))
  const dialogwidth = width ? 600 : fieldWidth
  const [globalFilter, setGlobalFilter] = React.useState('')
  const [userGroupsData, setUserGroupsData] = useState<any>('')
  const [openProduct, setOpenProduct] = React.useState(false)
  const [productData, setProductData] = useState<any>('')
  const [openLocation, setOpenLocation] = React.useState(false)
  const [locationData, setLocationData] = useState<any>('')
  const [userGroupLoading, setUserGroupLoading] = React.useState(false)
  //start
  const handleNameClick = (e: any) => {
    console.log(e.target.value)
    const selectedRow = userGroupsData.filter(
      (row: any) => row.groupId === e.target.value
    )
    set_groupID(selectedRow)
    console.log(selectedRow)
    history.push(`${DEFAULT}${USERCONFIG_GROUPUPDATE}`)
  }

  useEffect(() => {
    getUserGroupAPI &&
      getUserGroupAPI()
        .then((res) => {
          const groupValues = res.data.usergroups.map((group: any) => {
            return {
              groupId: group.groupId,
              groupName: group.groupName,
              groupDesc: group.groupDesc,
              status: group.status,
              productHierarchy: group.productHierarchy,
              locationHierarchy: group.locationHierarchy,
            }
          })
          setUserGroupsData(groupValues)
        })
        .catch((err) => {
          console.log(err)
        })
    return () => {
      setUserGroupsData([])
    }
  }, [])
  useEffect(() => {
    if (userGroupsData) {
      setUserGroupLoading(false)
    } else {
      setUserGroupLoading(true)
    }
  }, [userGroupsData])

  const handleOpenProduct = (e: any) => {
    setProductData(e)
    setOpenProduct(true)
  }
  const handleCloseProduct = () => {
    setOpenProduct(false)
  }
  const handleOpenLocation = (e: any) => {
    setLocationData(e)
    setOpenLocation(true)
  }
  const handleCloseLocation = () => {
    setOpenLocation(false)
  }

  const locationTemplate = (rowData: any) => {
    return (
      <>
        {rowData.locationHierarchy.length > 0 ? (
          <button
            className={classes.exploreButton}
            onClick={() => handleOpenLocation(rowData.locationHierarchy)}
          >
            View
          </button>
        ) : (
          <button disabled className={classes.fontbutton}>
            View
          </button>
        )}
      </>
    )
  }
  const productTemplate = (rowData: any) => {
    return (
      <>
        {rowData.productHierarchy.length > 0 ? (
          <button
            className={classes.exploreButton}
            onClick={() => handleOpenProduct(rowData.productHierarchy)}
          >
            View
          </button>
        ) : (
          <button disabled className={classes.fontbutton}>
            View
          </button>
        )}
      </>
    )
  }
  const hierarchyLevelTemplate = (rowData: any) => {
    return rowData.hierarchyLevel === 'division'
      ? 'Division'
      : rowData.hierarchyLevel === 'group'
      ? 'Trading Group'
      : rowData.hierarchyLevel === 'category'
      ? 'Category'
      : rowData.hierarchyLevel === 'department'
      ? 'Product Group'
      : rowData.hierarchyLevel === 'class'
      ? 'Class'
      : rowData.hierarchyLevel === 'subclass'
      ? 'Sub Class'
      : ''
  }
  const viewProductHierarchyLog = (
    <Dialog open={openProduct} onClose={handleCloseProduct}>
      <Box
        sx={{
          // width: dialogwidth,
          // border: '3px solid green',
          borderRadius: 4,
          display: 'flex',
          flexDirection: 'column',
          p: 1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            height: 30,
            flexDirection: 'row',
          }}
          className={classes.viewLogTitle}
        >
          <Box
            sx={{
              display: 'flex',
              flexGrow: 1,
              justifyContent: 'center',
            }}
          >
            <Typography variant="subtitle1">Product Hierarchy</Typography>
          </Box>
          <Box
            sx={{
              paddingRight: 2,
            }}
          >
            <button
              style={{
                border: 0,
                padding: 0,
                height: 22,
                width: 22,
              }}
              className={classes.closeViewLog}
              onClick={handleCloseProduct}
            >
              <b>X</b>
            </button>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            p: 2,
          }}
        ></Box>
        <Box
          sx={{
            // justifyContent: "center",
            display: 'flex',

            // textAlign: "center"
          }}
        >
          <DataTable
            value={productData}
            paginator
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
            rows={5}
            style={{
              fontSize: '12px',
              //backgroundColor: "#f7f7f7",
              // width: fieldWidth,
              width: '100%',
            }}
            //className={`p-datatable-sm ${classes.viewlogTable}`}
            className={classes.viewlogTable}
            scrollable
            scrollHeight="flex"
          >
            {constants.viewHierarchy.map((column: any) => {
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
                  body={
                    column.field === 'hierarchyLevel' && hierarchyLevelTemplate
                    // ||
                    // (column.field === 'hierarchyId' && hierarchyIdTemplate)
                    // ||
                    // (column.field === 'locationHierarchy' && locationTemplate)
                  }
                ></Column>
              )
            })}
          </DataTable>
        </Box>
      </Box>
    </Dialog>
  )
  const viewLocationHierarchyLog = (
    <Dialog open={openLocation} onClose={handleCloseLocation}>
      <Box
        sx={{
          // width: dialogwidth,
          // border: '3px solid green',
          borderRadius: 4,
          display: 'flex',
          flexDirection: 'column',
          p: 1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            height: 30,
            flexDirection: 'row',
          }}
          className={classes.viewLogTitle}
        >
          <Box
            sx={{
              display: 'flex',
              flexGrow: 1,
              justifyContent: 'center',
            }}
          >
            <Typography variant="subtitle1">Location Hierarchy</Typography>
          </Box>
          <Box
            sx={{
              paddingRight: 2,
            }}
          >
            <button
              style={{
                border: 0,
                padding: 0,
                height: 22,
                width: 22,
              }}
              className={classes.closeViewLog}
              onClick={handleCloseLocation}
            >
              <b>X</b>
            </button>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            p: 2,
          }}
        ></Box>
        <Box
          sx={{
            // justifyContent: "center",
            display: 'flex',

            // textAlign: "center"
          }}
        >
          <DataTable
            value={locationData}
            paginator
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
            rows={5}
            style={{
              fontSize: '12px',
              //backgroundColor: "#f7f7f7",
              // width: fieldWidth,
              width: '100%',
            }}
            //className={`p-datatable-sm ${classes.viewlogTable}`}
            className={classes.viewlogTable}
            scrollable
            scrollHeight="flex"
          >
            {constants.viewHierarchy.map((column: any) => {
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
                ></Column>
              )
            })}
          </DataTable>
        </Box>
      </Box>
    </Dialog>
  )

  //integration changes stop
  const groupIDTemplate = (rowData: any) => {
    return (
      <button
        value={rowData.groupId}
        onClick={handleNameClick}
        className={classes.links}
      >
        {rowData.groupId}
      </button>
    )
  }

  //end

  return (
    <div className={classes.root}>
      <Grid container className={`${classes.container} ${classes.text}`}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          {!active ? (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                p: 3,
                paddingBottom: 1,
                paddingTop: '32px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexGrow: 1,
                }}
              >
                <Typography variant="h6">Manage Users Group</Typography>
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
                  placeholder={' Search User details '}
                  style={{
                    width: '300px',
                  }}
                />
              </Box>

              <Box
                sx={{
                  paddingLeft: 20,
                }}
              >
                <button
                  className={classes.exploreButton}
                  onClick={() =>
                    history.push(`${DEFAULT}${USERCONFIG_GROUPCREATE}`)
                  }
                >
                  Create Group
                </button>
              </Box>
            </Box>
          ) : (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                p: 3,
                paddingBottom: 1,
                paddingTop: '32px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    paddingRight: '10px',
                  }}
                >
                  <Typography variant="h6">Manage User Groups</Typography>
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
                    placeholder={' Search User details '}
                    style={{
                      width: '200px',
                    }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifySelf: 'end',
                }}
              >
                <button
                  className={classes.exploreButton}
                  onClick={() =>
                    history.push(`${DEFAULT}${USERCONFIG_GROUPCREATE}`)
                  }
                >
                  Create Group
                </button>
              </Box>
            </Box>
          )}
        </Grid>
      </Grid>
      <Box
        sx={{
          textAlign: 'center',
          p: 2,
        }}
      >
        <DataTable
          value={userGroupsData}
          paginator
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
          rows={6}
          style={{
            // fontSize: "10px",
            // backgroundColor: "#f7f7f7",
            width: '100%',
          }}
          scrollable
          scrollHeight="flex"
          //   className="p-datatable-sm"
          globalFilter={globalFilter}
          emptyMessage="No groups found."
          showGridlines
          loading={userGroupLoading}
        >
          {constants.userGroupTableHeaders.map((column: any) => {
            return (
              <Column
                key={column.field}
                field={column.field}
                header={column.headerName}
                bodyStyle={{
                  fontSize: '14px',
                  width: column.width,
                  overflowX: 'auto',
                }}
                headerStyle={{
                  fontSize: '14px',
                  width: column.width,
                  backgroundColor: teal[900],
                  color: 'white',
                }}
                body={
                  (column.field === 'groupId' && groupIDTemplate) ||
                  (column.field === 'productHierarchy' && productTemplate) ||
                  (column.field === 'locationHierarchy' && locationTemplate)
                }
                sortable
              />
            )
          })}
        </DataTable>
      </Box>
      {viewProductHierarchyLog}
      {viewLocationHierarchyLog}
    </div>
  )
}

const matchDispatchToProps = (dispatch: any) => {
  return {
    set_groupID: (groupid: any) => dispatch(set_groupID(groupid)),
  }
}
export default connect(null, matchDispatchToProps)(UserGroupManage)
