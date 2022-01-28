import axios from 'axios'
import config from '../config/Config'
//import depotTable from "../serviceJson/depoTable.json";
import {
  serviceRequest,
  serviceRequestBasic,
  serviceRequestForProduct,
  serviceRequestForFileUpload,
} from './ServiceRequest'
const {
  BASE_URL,
  BASE_URL_SIT,
  API_KEY,
  GET_APP_MENU_ALL,
  GET_USER_DETAILS_ID,
  PUT_USER_DETAILS_ID,
  PUT_USER_DETAILS_ID_CAMUNDA,
  GET_USER_DETAILS_ALL,
  GET_ROLES_ALL,
  PUT_USER_GROUPS_ID,
  GET_USER_GROUPS_ALL,
  GET_TASKLIST_ID,
  GET_TASKLIST_ALL,
  GET_TASKLOG_ID,
  POST_TASKLOG_ID,
  GET_USER_INFO,
  GET_USER_INFO_OTHER,
  USER_V2,
  PUT_CLAIM_TASK_CAMUNDA,
  GET_DASHBOARD_STATUS_CAMUNDA,
  POST_ATTACHMENT,
  PUT_COMPLETE_TASK_CAMUNDA,
  PUT_REJECT_TASK_CAMUNDA,
} = config

export const userV2Login = (idToken) => {
  const data = new URLSearchParams()
  data.append('grant_type', 'password')
  data.append('id_token', idToken)
  return axios({
    method: 'POST',
    url: `${BASE_URL_SIT}${USER_V2}?apikey=${API_KEY}`,
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Cache-Control': 'no-cache',
    },
    data,
  })
}

// export const fetchProducts = (ids) => {
//   const url = `${PRODUCT_SEARCH_URL}`;
//   let reqBody = `{
//     "from": 0,
//     "size": 1000,
//     "_source" : ["itemNumber", "itemDescription", "commercialHierarchy", "packs.packNumber"],
//     "query": {
//       "bool": {
//         "must": [
//           { "match": { "productType": "ITEM" } },
//          { "terms": {"itemNumber": [${ids}] } }
//         ]
//       }
//     }
//   }`;

//   return serviceRequest(url, "POST", reqBody);
// };

export const postTaskLogsAPI = (req) => {
  const url = `${BASE_URL}${POST_TASKLOG_ID}`
  let reqBody = `${JSON.stringify(req)}`
  return serviceRequest(url, 'POST', reqBody)
}

export const postFileAttachmentAPI = (req, userId) => {
  let url = `${BASE_URL}${POST_ATTACHMENT}`
  url = url.replace('{userId}', userId)
  return serviceRequestForFileUpload(url, 'POST', req)
}
// export const getRangeResetAPI = (rangeResetId) => {
//   let url = `${RANGE_BASE_URL}${GET_RANGE_RESET}`;
//   url = url.replace("{rangeResetId}", rangeResetId);
//   return serviceRequest(url, "GET", undefined);
// };

// export const getRangeResetItemAPI = (rangeResetId, productMinCode) => {
//   let url = `${RANGE_BASE_URL}${GET_RANGE_RESET_ITEM}`;
//   url = url.replace("{rangeResetId}", rangeResetId);
//   url = url.replace("{min}", productMinCode);
//   return serviceRequest(url, "GET", undefined);
// };

// export const deleteRangeResetItemApi = (rangeResetId, MinCode) => {
//   let url = `${RANGE_BASE_URL}${DELETE_RANGE_RESET_ITEM}`;
//   url = url.replace("{rangeResetId}", rangeResetId);
//   url = url.replace("{MinCode}", MinCode);
//   return serviceRequest(url, "DELETE", undefined);
// };

// export const addRangeResetItemAPI = (rangeResetItem, rangeResetId) => {
//   let url = `${RANGE_BASE_URL}${ADD_RANGE_RESET_ITEM}`;
//   url = url.replace("{rangeResetId}", rangeResetId);
//   let reqBody = `${JSON.stringify(rangeResetItem)}`;
//   return serviceRequest(url, "POST", reqBody);
// };

export const putUserDetailsAPI = (req) => {
  let url = `${BASE_URL}${PUT_USER_DETAILS_ID}`
  url = url.replace('{userId}', req.user.employeeId)
  let reqBody = `${JSON.stringify(req)}`
  return serviceRequest(url, 'PUT', reqBody)
}

export const putUserDetailsCamundaAPI = (req) => {
  let url = `${BASE_URL}${PUT_USER_DETAILS_ID_CAMUNDA}`
  url = url.replace('{userId}', req.user.employeeId)
  let reqBody = `${JSON.stringify(req)}`
  return serviceRequest(url, 'PUT', reqBody)
}

// export const fetchMyRangeResets = () => {
//   const url = `${RANGE_BASE_URL}${GET_RANGE_RESETS}`;
//   const payload = undefined;
//   const params =
//     "fields=[range_reset_id,name,department,category,target_date,status,buyer,supply_chain_analyst]";
//   return serviceRequest(url, "GET", payload, params);
// };

// export const deleteMyRangeResets = (rangeResetId) => {
//   let url = `${RANGE_BASE_URL}${DELETE_RANGE_RESET}`;
//   url = url.replace("{rangeResetId}", rangeResetId);
//   const payload = undefined;
//   return serviceRequest(url, "DELETE", payload);
// };

// export const updateRangeResetItemAPI = (
//   rangeResetId,
//   productMinCode,
//   rangeResetItem
// ) => {
//   let url = `${RANGE_BASE_URL}${UPDATE_RANGE_RESET_ITEM}`;
//   url = url.replace("{rangeResetId}", rangeResetId);
//   url = url.replace("{productMinCode}", productMinCode);
//   let reqBody = `${JSON.stringify(rangeResetItem)}`;
//   return serviceRequest(url, "PATCH", reqBody);
// };

// export const getLocationsAPI = () => {
//   const url = `${RANGE_BASE_URL}${GET_LOCATIONS}`;
//   const params = "limit=1000";
//   return serviceRequest(url, "GET", undefined, params);
// };

// export const updateStopOrderDateAPI = (
//   payload,
//   rangeResetId,
//   productMinCode
// ) => {
//   let url = `${RANGE_BASE_URL}${UPDATE_STOP_ORDER_DATE}`;
//   url = url.replace("{rangeResetId}", rangeResetId);
//   url = url.replace("{productMinCode}", productMinCode);

//   let reqBody = `${JSON.stringify(payload)}`;
//   return serviceRequest(url, "PATCH", reqBody);
// };

// export const getUserAPI = (userId) => {
//   const url = `${RANGE_BASE_URL}${GET_USER}${userId}`;
//   return serviceRequest(url, "GET", undefined);
// };

export const getUserDetailsAPI = (userId) => {
  const url = `${BASE_URL_SIT}${GET_USER_INFO}`
  return serviceRequest(url, 'GET', undefined)
}

export const colleagueV2Login = (accesToken) => {
  return axios({
    method: 'GET',
    url: `${BASE_URL}${GET_USER_INFO}?apikey=${API_KEY}`,
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${accesToken}`,
    },
  })
}

export const getRoleAPI = () => {
  const url = `${BASE_URL}${GET_ROLES_ALL}`
  const params = 'limit=1000'
  return serviceRequest(url, 'GET', undefined, params)
}

export const getStatusCamundaAPI = () => {
  let empId = ''
  const userV2Response = JSON.parse(
    localStorage && localStorage.getItem('_GresponseV2')
  )
  if (userV2Response) {
    empId = userV2Response && userV2Response.empId
  }
  let url = `${BASE_URL}${GET_DASHBOARD_STATUS_CAMUNDA}`
  const params = 'limit=1000'
  url = url.replace('{userId}', empId)
  return serviceRequest(url, 'GET', undefined, params)
}

export const getAppsAPI = () => {
  const url = `${BASE_URL}${GET_APP_MENU_ALL}`
  const params = 'limit=1000'
  return serviceRequest(url, 'GET', undefined, params)
}

export const getUserAPI = (userId) => {
  let url = `${BASE_URL}${GET_USER_DETAILS_ID}`
  url = url.replace('{userId}', userId)
  return serviceRequest(url, 'GET', undefined)
}

export const getUserGroupAPI = () => {
  const url = `${BASE_URL}${GET_USER_GROUPS_ALL}`
  const params = 'limit=1000'
  return serviceRequest(url, 'GET', undefined, params)
}

export const putUserGroupAPI = (req, groupId) => {
  let url = `${BASE_URL}${PUT_USER_GROUPS_ID}`
  url = url.replace('{groupId}', groupId)
  let reqBody = `${JSON.stringify(req)}`
  return serviceRequest(url, 'PUT', reqBody)
}

export const putClaimTaskAPI = (req, taskId) => {
  let url = `${BASE_URL}${PUT_CLAIM_TASK_CAMUNDA}`
  url = url.replace('{taskId}', taskId)
  let reqBody = `${JSON.stringify(req)}`
  return serviceRequest(url, 'PUT', reqBody)
}

export const putCompleteTaskAPI = (req, taskId) => {
  let url = `${BASE_URL}${PUT_COMPLETE_TASK_CAMUNDA}`
  url = url.replace('{taskId}', taskId)
  let reqBody = `${JSON.stringify(req)}`
  return serviceRequest(url, 'PUT', reqBody)
}

export const putRejectTaskAPI = (req, businessKey) => {
  let url = `${BASE_URL}${PUT_REJECT_TASK_CAMUNDA}`
  url = url.replace('{businessKey}', businessKey)
  let reqBody = `${JSON.stringify(req)}`
  return serviceRequest(url, 'PUT', reqBody)
}

export const getProductHierarchyAPI = (url) => {
  return serviceRequestForProduct(url, 'GET', undefined)
}

export const getAllUsersAPI = () => {
  const url = `${BASE_URL}${GET_USER_DETAILS_ALL}`
  const params = 'limit=1000'
  return serviceRequest(url, 'GET', undefined, params)
}

export const getColleagueAPI = (id) => {
  let url = `${BASE_URL_SIT}${GET_USER_INFO_OTHER}`
  url = url.replace('{userId}', id)
  return serviceRequestBasic(url, 'GET', undefined)
}

export const getTasklistsAllAPI = (userId) => {
  let url = `${BASE_URL}${GET_TASKLIST_ALL}`
  const params = `limit=1000&referenceNumberIn=${userId}&stateIn=Pending,New`
  return serviceRequest(url, 'GET', undefined, params)
}

export const getTasklistsAPI = (requestId) => {
  let url = `${BASE_URL}${GET_TASKLIST_ID}`
  url = url.replace('{requestId}', requestId)
  return serviceRequestBasic(url, 'GET', undefined)
}

export const getTasklogsAPI = (requestId) => {
  let url = `${BASE_URL}${GET_TASKLOG_ID}`
  url = url.replace('{requestId}', requestId)
  return serviceRequestBasic(url, 'GET', undefined)
}
// export const getItemWeekStoreViewForecastAPI = (
//   rangeResetId,
//   productMinCode,
//   productEndDate
// ) => {
//   let url = `${RANGE_BASE_URL}${GET_ITEM_WEEK_STORE_VIEW_FORECAST}${rangeResetId}/items/${productMinCode}/salesforecast`;
//   url = url.replace("{rangeResetId}", rangeResetId);
//   url = url.replace("{min}", productMinCode);
//   let params = undefined;
//   if (productEndDate) {
//     params = "targetDate=" + productEndDate;
//   }
//   return serviceRequest(url, "GET", undefined, params);
// };

// export const getDepotStockAPI = (rangeResetId, productMinCode, depotId) => {
//   let url = `${RANGE_BASE_URL}${GET_ITEM_STOCKS}${rangeResetId}/items/${productMinCode}/stock`;
//   url = url.replace("{rangeResetId}", rangeResetId);
//   url = url.replace("{min}", productMinCode);
//   //const params = `view=store&depot=${depotId}`
//   const params = "view=store";
//   return serviceRequest(url, "GET", undefined, params);
// };

// export const getStocksAPI = (rangeResetId, productMinCode) => {
//   let url = `${RANGE_BASE_URL}${GET_ITEM_STOCKS}${rangeResetId}/items/${productMinCode}/stock`;
//   url = url.replace("{rangeResetId}", rangeResetId);
//   url = url.replace("{min}", productMinCode);
//   const params = "view=store";
//   return serviceRequest(url, "GET", undefined, params);
// };

// export const getPrivillegesAPI = () => {
//   let url = `${RANGE_BASE_URL}${GET_PRIVILEGES}`;
//   return serviceRequest(url, "GET", undefined);
// };
