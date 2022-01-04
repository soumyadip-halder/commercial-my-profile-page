import {
  Box,
  Grid,
  Typography,
  Button,
  Paper,
  Dialog,
  DialogTitle,
  useTheme,
  useMediaQuery,
  OutlinedInput,
  IconButton,
  InputAdornment,
} from '@material-ui/core'

import { styled } from '@material-ui/styles'
import React from 'react'
import { useHistory } from 'react-router-dom'
import Select from 'react-select'
import { useState, useEffect, useRef } from 'react'
import { components } from 'react-select'
import { Toast } from 'primereact/toast'
import { constants } from './DataConstants'
// import axios from "axios";
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
// import 'primeicons/primeicons.css';
// import 'primereact/resources/themes/fluent-light/theme.css';
import 'primereact/resources/themes/saga-green/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import { teal } from '@material-ui/core/colors'
import { SearchOutlined } from '@material-ui/icons'
import { useStyles, fieldWidth } from './Styles'
import { connect } from 'react-redux'
import {
  getColleagueAPI,
  getUserGroupAPI,
  postTaskLogsAPI,
  putUserDetailsAPI,
} from '../../api/Fetch'
import { UtilityFunctions } from '../../util/UtilityFunctions'

const Input = styled('input')({
  display: 'none',
})

function UserCreate({ rolesArray, appFuncList }: any) {
  const classes = useStyles()
  const history = useHistory()
  const theme = useTheme()
  const active = useMediaQuery(theme.breakpoints.down(750))
  const forbutton = useMediaQuery(theme.breakpoints.down(400))
  const width = useMediaQuery(theme.breakpoints.up('md'))
  const dialogwidth = width ? 600 : fieldWidth
  const [roleNames, setRoleNames] = React.useState<any>('')
  // const [anchorEl, setAnchorEl] = React.useState(null);
  const [empIdInput, setEmpIdInput] = React.useState('')
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [middleName, setMiddleName] = React.useState('')
  const [requestType, setRequestType] = React.useState('')
  // const [selectEmployeeID, setSelectEmployeeID] = React.useState<any>();
  const [referenceDocData, setReferenceDocData] = React.useState<any>('')
  const [employeeID, setEmployeeID] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [designation, setDesignation] = React.useState('')
  const [status, setStatus] = React.useState('')
  const [comments, setComments] = React.useState('')
  const [additionalInfo, setAdditionalInfo] = React.useState('')
  const [colleagueData, setColleagueData] = React.useState('')
  const [submitFlag, setSubmitFlag] = React.useState('')
  const [referenceDoc, setReferenceDoc] = React.useState<any>('')
  const [viewLogEl, setViewLogEl] = React.useState(null)
  const viewLogOpen = Boolean(viewLogEl)

  const [groups, setGroups] = React.useState<any>('')
  const [groupInput, setGroupInput] = React.useState<any>()
  const [groupOpen, setGroupOpen] = React.useState(false)
  const [openAdditional, setOpenAdditional] = useState(false)
  //integration changes start
  const [roles, setRoles] = useState([])
  const [groupsData, setGroupsData] = useState([])
  const toast = useRef<any>(null)
  //integration changes start
  useEffect(() => {
    setGroupInput(groups)
  }, [groups])

  const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      borderColor: teal[900],
      backgroundColor: state.isSelected ? teal[900] : 'white',
      color: state.isSelected ? 'white' : teal[900],
    }),
    // menu:(provided: any, state: any)=>({
    //   ...provided,
    //   height:"300px"
    // })
  }
  //integration changes start

  useEffect(() => {
    getUserGroupAPI &&
      getUserGroupAPI()
        .then((res) => {
          console.log(res.data)
          const groupValues = res.data.usergroups.map((group: any) => {
            return {
              label: group.groupName,
              value: group.groupId,
              groupId: group.groupId,
              groupName: group.groupName,
              groupDesc: group.groupDesc,
              status: group.status,
              locationHierarchy: group.locationHierarchy,
              productHierarchy: group.productHierarchy,
            }
          })
          setGroupsData(groupValues)
          console.log(groupValues)
        })
        .catch((err) => {
          console.log(err)
        })
  }, [])

  useEffect(() => {
    if (rolesArray) {
      const rolesArrayCopy = JSON.parse(JSON.stringify(rolesArray))
      const rolesValues =
        rolesArrayCopy &&
        rolesArrayCopy.roles.map((role: any) => {
          return {
            label: role.roleName,
            value: role.roleId,
            roleId: role.roleId,
            roleName: role.roleName,
            roleDesc: role.roleDesc,
          }
        })
      setRoles(rolesValues)
      console.log(rolesValues)
    }
  }, [rolesArray])

  const Option = (props: any) => {
    return (
      <div>
        <components.Option {...props}>
          <input
            type="checkbox"
            checked={props.isSelected}
            onChange={() => {}}
          />{' '}
          <label>{props.label}</label>
        </components.Option>
      </div>
    )
  }
  const roleSelectStyle = {
    option: (provided: any, state: any) => ({
      ...provided,
      borderColor: teal[900],
      backgroundColor: state.isSelected ? teal[900] : 'white',
      color: state.isSelected ? 'white' : teal[900],
    }),
  }

  const handleReset = () => {
    setEmpIdInput('')
  }

  const handleFileUpload = (event: any) => {
    setReferenceDoc(event.target.files[0])
    if (event.target.files[0]) {
      // let reader = new FileReader();
      // reader.readAsDataURL(event.target.files[0]);

      // reader.onload = (e: any) => {
      //   console.log(e.target.result);
      setReferenceDocData(event.target.files[0])
      // };
    }
  }
  const onstatusChange = (e: any) => {
    setStatus(e.target.value)
  }
  const onrequestTypeChange = (e: any) => {
    setRequestType(e.target.value)
  }
  useEffect(() => {
    console.log(requestType)
  }, [requestType])

  const handleRoleChange1 = (selected: any) => {
    console.log(selected)
    setRoleNames(selected)
    console.log(selected.length)
  }

  const roleSelect1 = (
    <>
      <Select
        options={roles}
        isMulti
        onChange={handleRoleChange1}
        components={{
          Option,
        }}
        value={roleNames}
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        className={classes.multiSelect}
        styles={roleSelectStyle}
        isDisabled={
          UtilityFunctions.isHidden(
            '8',
            appFuncList ? appFuncList : [],
            'new_role'
          )
            ? true
            : false
        }
        //required
      />
      <input
        tabIndex={-1}
        autoComplete="off"
        style={{ opacity: 0, height: 0 }}
        value={roleNames}
        onChange={() => {}}
        required
      />
    </>
  )

  const handleOpenGroups = (e: any) => {
    e.preventDefault()
    setGroupOpen(true)
  }
  const handleCloseGroups = (e: any) => {
    e.preventDefault()
    setGroupOpen(false)
  }
  const updateGroups = () => {
    setGroups(groupInput)
    setGroupOpen(false)
  }

  const handleGroupsInput = (selected: any) => {
    console.log(selected)
    setGroupInput(selected)
  }

  const viewGroups = (
    <Dialog onClose={handleCloseGroups} open={groupOpen}>
      <Box
        sx={{
          height: 400,
          // width: dialogwidth,
          width: 'auto',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box
          className={classes.inputFieldBox}
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* <Box> */}
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
                alignItems: 'center',
              }}
            >
              <Typography variant="subtitle1">Add Groups</Typography>
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
                onClick={handleCloseGroups}
              >
                <b>X</b>
              </button>
            </Box>
          </Box>
          <Box
            sx={{
              alignItems: 'flex-start',
              marginTop: '50px',
            }}
          >
            <Select
              // options={groupTypes}
              options={groupsData}
              isMulti
              onChange={handleGroupsInput}
              components={{
                Option,
              }}
              value={groupInput}
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              className={classes.multiSelect}
              styles={customStyles}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end',
          }}
          className={classes.inputFieldBox}
        >
          <Button
            type="button"
            className={classes.whiteButton}
            onClick={updateGroups}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Dialog>
  )

  const viewAdditionalInfo = (
    <Dialog
      open={openAdditional}
      onClose={() => {
        setOpenAdditional((prevState) => !prevState)
      }}
      fullWidth={true}
      // maxWidth={'lg'}
    >
      <Box
        sx={{
          // width: fieldWidth,
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
            flexGrow: 1,
            // width: fieldWidth,
            justifyContent: 'center',
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
            <Typography variant="subtitle1">Additional Data</Typography>
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
              onClick={() => {
                setOpenAdditional((prevState) => !prevState)
              }}
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
            // width: fieldWidth,
            // textAlign: "center"
          }}
        >
          <DataTable
            value={
              colleagueData ? constants.getColleagueDetails(colleagueData) : []
            }
            // paginator
            // paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
            rows={1}
            style={{
              fontSize: '12px',
              //backgroundColor: "#f7f7f7",
              width: '100%',
            }}
            showGridlines
            className={`p-datatable-sm ${classes.viewlogTable}`}
            // className={classes.viewlogTable}
            scrollable
            // scrollHeight="400px"
          >
            {constants.getAdditionalInfoHeader.map((column: any) => {
              return (
                <Column
                  key={column.field}
                  field={column.field}
                  header={column.headerName}
                  bodyStyle={{
                    fontSize: '12px',
                    width: column.width,
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

  // useEffect(() => {
  //   if (selectEmployeeID) {
  //     setEmployeeID(selectEmployeeID.user.userId);
  //     setFirstName(selectEmployeeID.user.firstName);
  //     setMiddleName(selectEmployeeID.user.middleName);
  //     setLastName(selectEmployeeID.user.lastName);
  //     setEmail(selectEmployeeID.user.emailId);
  //     setDesignation(selectEmployeeID.user.designation);
  //     setStatus(selectEmployeeID.user.status);
  //     setRoleNames(
  //       selectEmployeeID.roles.map((role: any) => {
  //         return {
  //           label: role.roleId,
  //           value: role.roleId,
  //         };
  //       })
  //     );

  //     setGroupInput(
  //       selectEmployeeID.usergroups.map((group: any) => {
  //         return {
  //           label: group.groupId,
  //           value: group.groupId,
  //           status: group.status,
  //         };
  //       })
  //     );
  //     setGroups(
  //       selectEmployeeID.usergroups.map((group: any) => {
  //         return {
  //           label: group.groupId,
  //           value: group.groupId,
  //           status: group.status,
  //         };
  //       })
  //     );
  //   } else {
  //     setEmployeeID("");
  //     setFirstName("");
  //     setMiddleName("");
  //     setLastName("");
  //     setEmail("");
  //     setDesignation("");
  //     setStatus("");
  //   }
  // }, [selectEmployeeID]);

  const handleOpenViewLog = (e: any) => {
    setViewLogEl(e.currentTarget)
  }
  const handleCloseViewLog = () => {
    setViewLogEl(null)
  }

  const viewLog = (
    <Dialog open={viewLogOpen} onClose={handleCloseViewLog}>
      <Box
        sx={{
          width: dialogwidth,
          border: '3px solid green',
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
            <Typography variant="subtitle1">Logs</Typography>
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
              onClick={handleCloseViewLog}
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
        >
          <Typography variant="body2">
            Request ID:
            <b>0112233</b>
          </Typography>
        </Box>
        <Box
          sx={{
            // justifyContent: "center",
            display: 'flex',

            // textAlign: "center"
          }}
        >
          <DataTable
            value={constants.viewLogRows}
            paginator
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
            rows={5}
            style={{
              fontSize: '12px',
              backgroundColor: '#f7f7f7',
              // width: fieldWidth,
            }}
            className={`p-datatable-sm ${classes.viewlogTable}`}
            scrollable
            scrollHeight="400px"
          >
            {constants.viewLogColumns.map((column) => {
              return (
                <Column
                  key={column.field}
                  field={column.field}
                  header={column.headerName}
                  bodyStyle={{
                    fontSize: '12px',
                    width: column.width,
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

  const goBack = () => {
    history.goBack()
  }

  const handleSearchEmployee = () => {
    // let selectedEmp = userData.filter((user: any) => {
    //   return user.user.userId === empIdInput
    // })

    // axios({
    //   method: "GET",
    //   url: `https://sit-api.morrisons.com/colleague/v1/colleagues/${empIdInput}?apikey=vqaiDRZzSQhA6CPAy0rSotsQAkRepprX`,
    //   headers: {
    //     "content-type": "application/json",
    //     Authorization: `Basic dnFhaURSWnpTUWhBNkNQQXkwclNvdHNRQWtSZXBwclg6THhhVk01SllpckJya1FRdQ==`,
    //   },
    // })
    getColleagueAPI(empIdInput)
      .then((response: any) => {
        //console.log(response);
        if (response.status === 200) {
          let userData = response.data
          setEmployeeID(empIdInput)
          setFirstName(userData.FirstName)
          setLastName(userData.LastName)
          setEmail(userData.email)
          setDesignation(userData.jobRole.jobTitle)
          setColleagueData(userData)

          //setStatus(userData.employee_status);
        }
      })
      .catch((err) => {
        //console.log(err);
        handleReset()
        toast.current.show({
          severity: 'error',
          summary: 'Error!',
          detail: 'Invalid Employee ID',
          life: 6000,
          className: 'login-toast',
        })
      })
  }
  React.useEffect(() => {
    let employeedetails
    if (localStorage && localStorage.getItem('_GresponseV2')) {
      employeedetails = JSON.parse(
        (localStorage && localStorage.getItem('_GresponseV2')) || '{}'
      )
    }
    let empid = employeedetails.empId
    console.log(empid)
    if (empid === '40011368') {
      setSubmitFlag('ADMIN')
    } else {
      setSubmitFlag('USER')
    }
  }, [])

  const handleCreateRequest = (e: any) => {
    e.preventDefault()
    const colleague: any =
      colleagueData && constants.getColleagueDetails(colleagueData)
    const colleaguestring = `${colleague[0].managerId}#!#${colleague[0].managerName}#!#${colleague[0].managersManagerId}#!#${colleague[0].hiringmanager}#!#${colleague[0].leavingDate}#!#${colleague[0].businessUnit}#!#${colleague[0].locationName}#!#${colleague[0].division}`

    const formData = {
      requestType: requestType,
      user: {
        EmployeeId: employeeID,
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        emailId: email,
        additionalInfo: colleagueData && colleaguestring,
        status: status,
        designation: designation.toUpperCase(),
      },
      roles: roleNames.map((role: any) => {
        return {
          roleId: role.value,
        }
      }),
      usergroups: groups.map((group: any) => {
        return {
          groupId: group.value,
          status: group.status,
        }
      }),
      submitFlag: submitFlag,
    }
    console.log(formData)

    // axios
    //   .put(
    //     `https://dev-api.morrisons.com/commercial-workflow/v1/users/userdetails/${employeeID}?apikey=vqaiDRZzSQhA6CPAy0rSotsQAkRepprX`,
    //     formData,
    //     {
    //       headers: {
    //         "Cache-Control": "no-cache",
    //         Authorization: `Bearer ${accessToken.access_token}`,
    //       },
    //     }
    //   )
    putUserDetailsAPI(formData)
      .then((res) => {
        console.log(res)
        let statusCode = res.status
        console.log(statusCode)
        //console.log(res.data.message);
        //    if (statusCode === 200) {
        //   toast.current.show({
        //     severity: "success",
        //     summary: "",
        //     detail: res.data.message,
        //     life: 6000,
        //   });
        //   // alert(res)
        //   setEmployeeID("");
        //   setFirstName("");
        //   setMiddleName("");
        //   setLastName("");
        //   setEmail("");
        //   setDesignation("");
        //   setStatus("");
        //   setGroups([]);
        //   setRoleNames([]);
        // }
        if (statusCode >= 200 && statusCode <= 299) {
          toast.current.show({
            severity: 'success',
            summary: '',
            detail: res.data.message,
            life: 6000,
            className: 'login-toast',
          })
        }
      })
      .catch((err) => {
        console.log(err)
        // let statusCode = err.response.status
        //console.log(statusCode)
        alert(err)
        toast.current.show({
          severity: 'error',
          summary: 'Error!',
          detail: err.response.data.errorMessage,
          life: 6000,
          className: 'login-toast',
        })
      })

    const formDataforAttachment: any = {
      requestId: 'SYSTCS109',
      timestamp: '2021-12-12',
      userId: employeeID,
      role: 'ADMIN',
      camundaRequestId: 'C1234567',
      actionTaken: 'New',
      comments: comments,
    }

    const formdata = new FormData()
    formdata.append('fileIn', referenceDocData)
    formdata.append(
      'postData',
      new Blob([JSON.stringify(formDataforAttachment)], {
        type: 'application/json',
      })
    )

    //start
    postTaskLogsAPI(formData)
      .then((res) => {
        console.log(res)
        let statusCode = res.status
        if (statusCode === 200) {
          toast.current.show({
            severity: 'success',
            summary: '',
            detail: res.data.message,
            life: 6000,
            className: 'login-toast',
          })
        }
      })
      .catch((err) => {
        console.log(err.response)
        // let statusCode = err.response.status
        // console.log(statusCode)
        // alert(err)
        toast.current.show({
          severity: 'error',
          summary: 'Error!',
          detail: err.response.data.errorMessage,
          life: 6000,
          className: 'login-toast',
        })
      })
  }

  const createForm = (
    <Box
      sx={{
        flexDirection: 'column',
        display: 'flex',
        p: 2,
        paddingLeft: '40px',
        paddingRight: '30px',
        textAlign: 'left',
        // width:"100%"
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          // [theme.breakpoints.up("sm")]: {
          //   flexDirection: "row",
          // },
          // [theme.breakpoints.down("sm")]: {
          //   flexDirection: "column",
          // },
          paddingBottom: '20px',
          paddingTop: '10px',
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <Typography variant="h6">Create Request</Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: !active ? 'row' : 'column',
          }}
        >
          {/* <Box
            sx={{
              paddingLeft: 5,
            }}
          >
            <button className={classes.backButton} onClick={handleOpenViewLog}>
              View Log
            </button>
          </Box>
          <Box
            sx={{
              paddingLeft: 5,
            }}
          >
            |
          </Box> */}
          <Box
            sx={{
              paddingLeft: 5,
            }}
          >
            <button className={classes.backButton} onClick={goBack}>
              Back
            </button>
          </Box>
        </Box>
      </Box>
      <form>
        <Box
          sx={{
            display: 'flex',
            flexDirection: !active ? 'row' : 'column',
            // [theme.breakpoints.up("sm")]: {
            //   flexDirection: "row",
            // },
            // [theme.breakpoints.down("sm")]: {
            //   flexDirection: "column",
            // },
            // alignItems: "baseline",
          }}
          className={classes.eachRow}
        >
          <Box className={classes.inputLabel}>
            <Typography variant="subtitle2">Request Type</Typography>
          </Box>

          <Box className={classes.inputFieldBox}>
            <Typography variant="subtitle2">
              <select
                name="requesttype"
                id="requesttype"
                className={classes.selectField}
                defaultValue=""
                onChange={onrequestTypeChange}
                required
                disabled
              >
                {/* <option disabled value="">
                  --- Select Request Type ---
                </option> */}
                {constants.requestTypes.map((type) => {
                  return (
                    <option value={type.name} key={type.name}>
                      {type.text}
                    </option>
                  )
                })}
              </select>
            </Typography>
          </Box>
        </Box>
        <Box className={classes.eachRow}>
          <Box className={classes.inputLabel}>
            <Typography variant="subtitle2">
              Employee ID &nbsp;
              <span
                style={{
                  color: '#ff0000',
                }}
              >
                *
              </span>
            </Typography>
          </Box>

          <Box className={classes.inputFieldBox}>
            <Typography variant="subtitle2">
              {/* {typeAheadSearch} */}
              <OutlinedInput
                value={empIdInput}
                onChange={(e) => setEmpIdInput(e.target.value)}
                className={classes.inputFields}
                style={{ backgroundColor: 'white' }}
                placeholder="Search Employee ID"
                required
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handleSearchEmployee} edge="end">
                      <SearchOutlined />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Typography>
          </Box>
        </Box>

        <Box className={classes.eachRow}>
          <Box className={classes.inputLabel}>
            <Typography variant="subtitle2">First Name</Typography>
          </Box>

          <Box className={classes.inputFieldBox}>
            <Typography variant="subtitle2">
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="eg. Mike"
                className={classes.inputFields}
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
                value={firstName}
                disabled
              />
            </Typography>
          </Box>
        </Box>
        <Box className={classes.eachRow}>
          <Box className={classes.inputLabel}>
            <Typography variant="subtitle2">Middle Name</Typography>
          </Box>

          <Box className={classes.inputFieldBox}>
            <Typography variant="subtitle2">
              <input
                type="text"
                name="middlename"
                id="middlename"
                placeholder="eg. Dallas"
                className={classes.inputFields}
                onChange={(e) => {
                  setMiddleName(e.target.value)
                }}
                value={middleName}
                disabled
              />
            </Typography>
          </Box>
        </Box>
        <Box className={classes.eachRow}>
          <Box className={classes.inputLabel}>
            <Typography variant="subtitle2">Last Name</Typography>
          </Box>

          <Box className={classes.inputFieldBox}>
            <Typography variant="subtitle2">
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="eg. Black"
                className={classes.inputFields}
                onChange={(e) => {
                  setLastName(e.target.value)
                }}
                value={lastName}
                disabled
              />
            </Typography>
          </Box>
        </Box>

        <Box className={classes.eachRow}>
          <Box className={classes.inputLabel}>
            <Typography variant="subtitle2">Email ID</Typography>
          </Box>

          <Box className={classes.inputFieldBox}>
            <Typography variant="subtitle2">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="eg. abc.xyz@morrisonsplc.co.uk"
                className={classes.inputFields}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                value={email}
                disabled
              />
            </Typography>
          </Box>
        </Box>
        <Box className={classes.eachRow}>
          <Box className={classes.inputLabel}>
            <Typography variant="subtitle2">Designation</Typography>
          </Box>

          <Box
            className={classes.inputFieldBox}
            sx={{
              // [theme.breakpoints.up("sm")]: {
              //   flexDirection: "row",
              //   width: 400,
              // },
              // [theme.breakpoints.down("sm")]: {
              //   flexDirection: "column",
              //   width: fieldWidth,
              // },
              flexDirection: !active ? 'row' : 'column',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                // flexGrow: 1,
                display: 'flex',
              }}
            >
              <Typography variant="subtitle2">
                <input
                  type="text"
                  placeholder="designation"
                  disabled
                  className={classes.designationField}
                  onChange={(e) => {
                    setDesignation(e.target.value)
                  }}
                  value={designation}
                />
              </Typography>
            </Box>

            <Box
              sx={{
                paddingLeft: 5,
                paddingRight: 5,
                fontSize: 'x-large',
                display: 'flex',
              }}
            >
              {width && <>|</>}
            </Box>

            <Box
              sx={{
                display: 'flex',
              }}
            >
              <button
                className={
                  UtilityFunctions.isHidden(
                    '8',
                    appFuncList ? appFuncList : [],
                    'addl_data'
                  )
                    ? classes.hideit
                    : classes.backButton
                }
                disabled={colleagueData ? false : true}
                onClick={(e) => {
                  e.preventDefault()
                  setOpenAdditional((prevState) => !prevState)
                }}
              >
                Additional Data
              </button>
            </Box>
          </Box>
        </Box>
        <Box className={classes.eachRow}>
          <Box className={classes.inputLabel}>
            <Typography variant="subtitle2">
              Status &nbsp;
              <span
                style={{
                  color: '#ff0000',
                }}
              >
                *
              </span>
            </Typography>
          </Box>

          <Box className={classes.inputFieldBox}>
            <Typography variant="subtitle2">
              <select
                name="status"
                id="status"
                className={classes.selectField}
                defaultValue=""
                onChange={onstatusChange}
                required
              >
                <option disabled value="" className={classes.selectOptions}>
                  None
                </option>
                {constants.statuses.map((type) => {
                  return (
                    <option value={type.statusID} key={type.statusID}>
                      {type.text}
                    </option>
                  )
                })}
              </select>
            </Typography>
          </Box>
        </Box>

        <Box className={classes.eachRow}>
          <Box className={classes.inputLabel}>
            <Typography variant="subtitle2">
              Role &nbsp;
              <span
                style={{
                  color: '#ff0000',
                }}
              >
                *
              </span>
            </Typography>
          </Box>

          <Box className={classes.inputFieldBox}>{roleSelect1}</Box>
        </Box>
        <Box className={classes.eachRow}>
          <Box className={classes.inputLabel}>
            <Typography variant="subtitle2">
              User Group &nbsp;
              <span
                style={{
                  color: '#ff0000',
                }}
              >
                *
              </span>
            </Typography>
          </Box>

          <Box className={classes.inputFieldBox}>
            <Typography variant="subtitle1">
              {groups ? (
                groups.length > 0 ? (
                  <button
                    className={classes.backButton}
                    onClick={handleOpenGroups}
                  >
                    Groups ( {groups.length} )
                  </button>
                ) : (
                  <button
                    className={
                      UtilityFunctions.isHidden(
                        '8',
                        appFuncList ? appFuncList : [],
                        'new_group'
                      )
                        ? classes.hideit
                        : classes.backButton
                    }
                    onClick={handleOpenGroups}
                  >
                    Add
                  </button>
                )
              ) : (
                <button
                  className={classes.backButton}
                  onClick={handleOpenGroups}
                >
                  Add
                </button>
              )}
              <input
                tabIndex={-1}
                autoComplete="off"
                style={{ opacity: 0, height: 0 }}
                value={groups}
                onChange={() => {}}
                required
              />
            </Typography>
          </Box>
        </Box>

        <Box className={classes.eachRow}>
          <Box className={classes.inputLabel}>
            <Typography variant="subtitle2">Reference Document</Typography>
          </Box>

          <Box
            // className={classes.inputFieldBox}
            sx={{
              // [theme.breakpoints.up("sm")]: {
              //   flexDirection: "row",
              // },
              // [theme.breakpoints.down("sm")]: {
              //   flexDirection: "column",
              // },
              flexDirection: !active ? 'row' : 'column',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                // flexGrow: 1,
                display: 'flex',
              }}
            >
              <Typography variant="subtitle2">
                {
                  <input
                    type="text"
                    value={referenceDoc ? referenceDoc.name : ''}
                    onClick={() =>
                      document.getElementById('selectedFile')!.click()
                    }
                    className={classes.uploadTextfield}
                    placeholder="No file selected"
                    readOnly
                  />
                }
                <Input
                  type="file"
                  id="selectedFile"
                  onChange={handleFileUpload}
                />
                <button
                  type="button"
                  onClick={() =>
                    document.getElementById('selectedFile')!.click()
                  }
                  className={classes.uploadButton}
                >
                  Browse...
                </button>
              </Typography>
            </Box>
            <Box
              sx={{
                paddingLeft: 5,
                paddingRight: 5,
                fontSize: 'x-large',
                display: 'flex',
              }}
            >
              {width && <>|</>}
            </Box>
            <Box
              sx={{
                display: 'flex',
              }}
            >
              <button className={classes.backButton}>view(3)</button>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            // [theme.breakpoints.up("sm")]: {
            //   flexDirection: "row",
            // },
            // [theme.breakpoints.down("sm")]: {
            //   flexDirection: "column",
            // },
            flexDirection: !active ? 'row' : 'column',
            paddingTop: '20px',
          }}
        >
          <Box className={classes.inputLabel}>
            <Typography variant="subtitle2">Comments</Typography>
          </Box>

          <Box className={classes.inputFieldBox}>
            <Typography variant="body2">
              <textarea
                cols={10}
                rows={5}
                className={classes.textArea}
                placeholder="Some Comments....."
                onChange={(e) => {
                  setComments(e.target.value)
                }}
              />
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: !active ? 'row' : 'column',
            alignItems: !active ? 'center' : 'center',
            paddingTop: '30px',
            justifyContent: !active ? 'space-between' : 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: !forbutton ? 'row' : 'column',
              alignItems: !forbutton ? 'center' : 'center',
              justifyContent: !forbutton ? 'space-between' : 'center',
            }}
          >
            <Button
              type="reset"
              variant="contained"
              color="primary"
              className={
                UtilityFunctions.isHidden(
                  '8',
                  appFuncList ? appFuncList : [],
                  'cancel'
                )
                  ? classes.hideit
                  : classes.whiteButton
              }
              size="small"
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              color="primary"
              className={
                UtilityFunctions.isHidden(
                  '8',
                  appFuncList ? appFuncList : [],
                  'reject'
                )
                  ? classes.hideit
                  : classes.whiteButton
              }
              size="small"
            >
              Reject
            </Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: !forbutton ? 'row' : 'column',
              alignItems: !forbutton ? 'center' : 'center',
              justifyContent: !forbutton ? 'space-between' : 'center',
            }}
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={
                UtilityFunctions.isHidden(
                  '8',
                  appFuncList ? appFuncList : [],
                  'submit'
                )
                  ? classes.hideit
                  : classes.submitButton
              }
              size="small"
            >
              Submit
            </Button>

            <Button
              variant="contained"
              color="primary"
              className={
                UtilityFunctions.isHidden(
                  '8',
                  appFuncList ? appFuncList : [],
                  'reassign'
                )
                  ? classes.hideit
                  : classes.buttons
              }
              size="small"
            >
              Reassign
            </Button>

            <Button
              variant="contained"
              color="primary"
              className={
                UtilityFunctions.isHidden(
                  '8',
                  appFuncList ? appFuncList : [],
                  'approve'
                )
                  ? classes.hideit
                  : classes.buttons
              }
              size="small"
              onClick={handleCreateRequest}
            >
              Approve
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  )

  return (
    <>
      <Toast ref={toast} position="bottom-left" />
      <Paper className={classes.root} elevation={0}>
        <Box sx={{ flexGrow: 1, p: 1, display: 'flex' }}>
          {/* <Grid container spacing={1}> */}
          <Grid
            container
            item
            xs={12}
            className={classes.text}
            alignItems="center"
            justifyContent="center"
          >
            {createForm}
            {viewLog}
            {viewGroups}
            {viewAdditionalInfo}
          </Grid>
          {/* </Grid> */}
        </Box>
      </Paper>
    </>
  )
}

const mapStateToProps = (state: any) => {
  return {
    rolesArray: state.loginReducer.rolesArray,
    appFuncList: state.loginReducer.appFuncList,
  }
}
export default connect(mapStateToProps, null)(UserCreate)
