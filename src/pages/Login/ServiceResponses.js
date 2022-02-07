export const ServiceResponses = {
  login: {
    serviceUnavailable: 'Login failed. Service is not available.',
    userNotExist: 'Login failed. Employee does not exist.',
  },
  app: {
    loading: 'Loading...',
    accessDenied: 'Access Denied',
    noPermMsg: 'You do not have the permission to access this page',
    serviceError:
      'An error occured while connecting to service. Please try again later',
    serviceUnavailable: 'Service not available',
    usernotadded: 'Login failed. User not added to Commercial Web Application.',
  },
  dashboard: {
    task: (
      <div>
        <div>
          <div style={{ fontWeight: 'bold' }}>My Task:</div>
        </div>
        <div>
          <span style={{ fontWeight: 'bold' }}>&#8226; Pending:</span> User can
          see the list of task(s) which is not yet started.
        </div>{' '}
        <div>
          <span style={{ fontWeight: 'bold' }}>&#8226; In Progress:</span> User
          can see the list of task(s) which is started but incomplete.
        </div>{' '}
        <br />
        <div>
          <div style={{ fontWeight: 'bold' }}>Group Task:</div>
        </div>{' '}
        <div>
          <span style={{ fontWeight: 'bold' }}>&#8226; Pending:</span> User can
          see the list of task(s) which is pending by self and/or others from
          the same group.
        </div>{' '}
        <div>
          <span style={{ fontWeight: 'bold' }}>&#8226; Unassigned:</span> User
          can see the list of task(s) which is yet to be assigned.
        </div>
      </div>
    ),
  },
}
