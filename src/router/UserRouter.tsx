import { Switch } from 'react-router-dom'
import React from 'react'
import DashboardMain from '../pages/DashboardMain/DashboardMain'
import ProductPortal from '../pages/ProductPortal/ProductPortal'
import PromotionFunding from '../pages/PromotionFunding/PromotionFunding'
import RangeAmend from '../pages/RangeAmend/RangeAmend'
import RetailPrice from '../pages/RetailPrice/RetailPrice'
import SupplierPortal from '../pages/SupplierPortal/SupplierPortal'
import AuthRoute from './AuthRoute'
import PageNotFound from '../pages/PageNotFound/PageNotFound'
import UserManageCreate from '../pages/UserManageCreate/UserManageCreate'
import UserManageManage from '../pages/UserManageManage/UserManageManage'
import UserManageUpdate from '../pages/UserManageUpdate/UserManageUpdate'
import UserManageGroup from '../pages/UserManageGroup/UserManageGroup'
import UserManageGroupCreate from '../pages/UserManageGroupCreate/UserManageGroupCreate'
import UserManageGroupUpdate from '../pages/UserManageGroupUpdate/UserManagerGroupUpdate'
import UserPendingAction from '../pages/UserPendingAction/UserPendingAction'
import UserPendingActionUpdate from '../pages/UserPendingActionUpdate/UserPendingActionUpdate'
import UserUnassignWorkflow from '../pages/UserUnassignWorkflow/UserUnassignWorkflow'
import UserInprogressTask from '../pages/UserInprogressTask/UserInprogressTask'
import UserGroupPendingAction from '../pages/UserGroupPendingAction/UserGroupPendingAction'
import { routes } from '../util/Constants'

const UserRouter = ({
  path,
  serviceError,
  userDetail,
}: {
  path: string
  serviceError: boolean
  userDetail: any
}) => {
  const {
    DASHBOARD,
    DASHBOARD_PENDINGACTION,
    DASHBOARD_PENDINGACTIONS_UPDATE,
    DASHBOARD_UNASSIGNWORKFLOW,
    DASHBOARD_INPROGRESSTASK,
    DASHBOARD_MYGROUPPENDINGTASKS,
    RANGEAMEND,
    PROMOFUNDNG,
    RETAILPRICE,
    SUPPLIERPORT,
    PRODUCTPORT,
    USERCONFIG_USERCREATE,
    USERCONFIG_USERMANAGE,
    USERCONFIG_USERGROUP,
    USERCONFIG_GROUPCREATE,
    USERCONFIG_GROUPUPDATE,
    USERCONFIG_USERUPDATE,
  } = routes
  const getPermission = (url: string) => {
    if (userDetail[0].user.status.toLowerCase() === 'a') {
      const value = userDetail[0].appmenu.findIndex(
        (item: any) => item.url === url
      )
      if (
        value > -1 &&
        userDetail[0].appmenu[value].accessType.toLowerCase() !== 'h'
      ) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }
  return (
    <Switch>
      <AuthRoute
        path={`${path}${DASHBOARD}`}
        component={DashboardMain}
        isAuthorized={userDetail && getPermission(DASHBOARD)}
        serviceError={serviceError}
        arb={false}
      />
      <AuthRoute
        path={`${path}${DASHBOARD_PENDINGACTION}`}
        component={UserPendingAction}
        isAuthorized={userDetail && getPermission(DASHBOARD)}
        serviceError={serviceError}
        arb={false}
      />
      <AuthRoute
        path={`${path}${DASHBOARD_PENDINGACTIONS_UPDATE}`}
        component={UserPendingActionUpdate}
        isAuthorized={userDetail && getPermission(DASHBOARD)}
        serviceError={serviceError}
        arb={false}
      />
      <AuthRoute
        path={`${path}${DASHBOARD_UNASSIGNWORKFLOW}`}
        component={UserUnassignWorkflow}
        isAuthorized={userDetail && getPermission(DASHBOARD)}
        serviceError={serviceError}
        arb={false}
      />
      <AuthRoute
        path={`${path}${DASHBOARD_INPROGRESSTASK}`}
        component={UserInprogressTask}
        isAuthorized={userDetail && getPermission(DASHBOARD)}
        serviceError={serviceError}
        arb={false}
      />
      <AuthRoute
        path={`${path}${DASHBOARD_MYGROUPPENDINGTASKS}`}
        component={UserGroupPendingAction}
        isAuthorized={userDetail && getPermission(DASHBOARD)}
        serviceError={serviceError}
        arb={false}
      />
      <AuthRoute
        path={`${path}${RANGEAMEND}`}
        component={RangeAmend}
        isAuthorized={userDetail && getPermission(RANGEAMEND)}
        serviceError={serviceError}
        arb={false}
      />
      <AuthRoute
        path={`${path}${PROMOFUNDNG}`}
        component={PromotionFunding}
        isAuthorized={userDetail && getPermission(PROMOFUNDNG)}
        serviceError={serviceError}
        arb={false}
      />
      <AuthRoute
        path={`${path}${RETAILPRICE}`}
        component={RetailPrice}
        isAuthorized={userDetail && getPermission(RETAILPRICE)}
        serviceError={serviceError}
        arb={false}
      />
      <AuthRoute
        path={`${path}${SUPPLIERPORT}`}
        component={SupplierPortal}
        isAuthorized={userDetail && getPermission(SUPPLIERPORT)}
        serviceError={serviceError}
        arb={false}
      />
      <AuthRoute
        path={`${path}${PRODUCTPORT}`}
        component={ProductPortal}
        isAuthorized={userDetail && getPermission(PRODUCTPORT)}
        serviceError={serviceError}
        arb={false}
      />
      <AuthRoute
        path={`${path}${USERCONFIG_USERCREATE}`}
        component={UserManageCreate}
        isAuthorized={userDetail && getPermission(USERCONFIG_USERCREATE)}
        serviceError={serviceError}
        arb={false}
      />
      <AuthRoute
        path={`${path}${USERCONFIG_USERMANAGE}`}
        component={UserManageManage}
        isAuthorized={userDetail && getPermission(USERCONFIG_USERMANAGE)}
        serviceError={serviceError}
        arb={false}
      />
      <AuthRoute
        path={`${path}${USERCONFIG_USERGROUP}`}
        component={UserManageGroup}
        isAuthorized={userDetail && getPermission(USERCONFIG_USERGROUP)}
        serviceError={serviceError}
        arb={false}
      />
      <AuthRoute
        path={`${path}${USERCONFIG_GROUPCREATE}`}
        component={UserManageGroupCreate}
        isAuthorized={userDetail && getPermission(USERCONFIG_USERGROUP)}
        serviceError={serviceError}
        arb={false}
      />
      <AuthRoute
        path={`${path}${USERCONFIG_GROUPUPDATE}`}
        component={UserManageGroupUpdate}
        isAuthorized={userDetail && getPermission(USERCONFIG_USERGROUP)}
        serviceError={serviceError}
        arb={false}
      />
      <AuthRoute
        path={`${path}${USERCONFIG_USERUPDATE}`}
        component={UserManageUpdate}
        isAuthorized={userDetail && getPermission(USERCONFIG_USERMANAGE)}
        serviceError={serviceError}
        arb={false}
      />
      <AuthRoute
        path={`${path}/*`}
        component={PageNotFound}
        isAuthorized={false}
        serviceError={serviceError}
        arb={true}
      />
    </Switch>
  )
}

export default UserRouter
