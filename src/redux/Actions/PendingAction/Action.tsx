import {
  SET_PENDING_ACTION,
  RESET_PENDING_ACTION,
  SET_MYPENDING_ACTION,
  RESET_MYPENDING_ACTION,
  SET_MYINPROGRESS_TASKS,
  RESET_MYINPROGRESS_TASKS,
  SET_MYGROUPPENDING_ACTION,
  RESET_MYGROUPPENDING_ACTION,
  SET_MYGROUPUNASSIGN_TASKS,
  RESET_MYGROUPUNASSIGN_TASKS,
} from './Type'
export const set_pendingAction = (data: any) => {
  return {
    type: SET_PENDING_ACTION,
    payload: data,
  }
}
export const reset_pendingAction = () => {
  return {
    type: RESET_PENDING_ACTION,
  }
}

export const set_mypendingAction = (data: any) => {
  return {
    type: SET_MYPENDING_ACTION,
    payload: data,
  }
}
export const reset_mypendingAction = () => {
  return {
    type: RESET_MYPENDING_ACTION,
  }
}
export const set_myinprogressAction = (data: any) => {
  return {
    type: SET_MYINPROGRESS_TASKS,
    payload: data,
  }
}
export const reset_myinprogressAction = () => {
  return {
    type: RESET_MYINPROGRESS_TASKS,
  }
}
export const set_mygrouppendingAction = (data: any) => {
  return {
    type: SET_MYGROUPPENDING_ACTION,
    payload: data,
  }
}
export const reset_mygrouppendingAction = () => {
  return {
    type: RESET_MYGROUPPENDING_ACTION,
  }
}
export const set_mygroupunassignAction = (data: any) => {
  return {
    type: SET_MYGROUPUNASSIGN_TASKS,
    payload: data,
  }
}
export const reset_mygroupunassignAction = () => {
  return {
    type: RESET_MYGROUPUNASSIGN_TASKS,
  }
}
