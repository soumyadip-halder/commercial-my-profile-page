import { routes } from '../../util/Constants'
const {
  DEFAULT,
  DASHBOARD_PENDINGACTION,
  DASHBOARD_UNASSIGNWORKFLOW,
  DASHBOARD_INPROGRESSTASK,
  DASHBOARD_MYGROUPPENDINGTASKS,
} = routes
export const userTaskDashboard = [
  {
    title: 'User Management',
    value: 'usermanagement',
    my: {
      pendingActions: 0,
      pendingActionURL: `${DEFAULT}${DASHBOARD_PENDINGACTION}`,
      inProgressTask: 0,
      inProgressTaskURL: `${DEFAULT}${DASHBOARD_INPROGRESSTASK}`,
    },
    myGroup: {
      pendingActions: 0,
      myGrouppendingActionURL: `${DEFAULT}${DASHBOARD_MYGROUPPENDINGTASKS}`,
      inProgressTask: 0,
      myGroupInprogressTaskURL: `${DEFAULT}${DASHBOARD_UNASSIGNWORKFLOW}`,
    },
  },
  {
    title: 'Range Change Management',
    value: 'rangechangemanagement',
    my: {
      pendingActions: 2,
      pendingActionURL: '#',
      inProgressTask: 3,
      inProgressTaskURL: '#',
    },
    myGroup: {
      pendingActions: 7,
      myGrouppendingActionURL: '#',
      inProgressTask: 15,
      myGroupInprogressTaskURL: '#',
    },
  },
  {
    title: 'Promotion & Funding',
    value: 'promotionandfunding',
    my: {
      pendingActions: 2,
      pendingActionURL: '#',
      inProgressTask: 3,
      inProgressTaskURL: '#',
    },
    myGroup: {
      pendingActions: 7,
      myGrouppendingActionURL: '#',
      inProgressTask: 15,
      myGroupInprogressTaskURL: '#',
    },
  },
  {
    title: 'Product Portal',
    value: 'productportal',
    my: {
      pendingActions: 2,
      pendingActionURL: '#',
      inProgressTask: 3,
      inProgressTaskURL: '#',
    },
    myGroup: {
      pendingActions: 0,
      myGrouppendingActionURL: '#',
      inProgressTask: 0,
      myGroupInprogressTaskURL: '#',
    },
  },
]

export const pendingStatusDetails = {
  //   userId: '40011368',
  //   status: [
  //     {
  //       details: 'myCompletedTasks',
  //       count: '0',
  //     },
  //   ],

  userId: '40114362',
  status: [
    {
      details: 'myCompletedTasks',
      count: '5',
      tasks: [
        {
          requestId: 'string',
          assignedToUserId: 'string',
          assignedToGroupId: 'string',
          assignedTimeStamp: 'string',
          taskId: 'string',
          businessKey: '01234',
          taskName: 'string',
          requestorFullName: 'string',
          requestorRole: 'string',
          comments: 'string',
          userFirstName: 'string',
          userMiddleName: 'string',
          userLastName: 'string',
          userEmployeeId: 'string',
          userEmailId: 'string',
        },
      ],
    },
    {
      details: 'myPendingTasks',
      count: '2',
      tasks: [
        {
          requestId: '202201211201201_40011361_hbtwUserManagementWorkflow',
          assignedToUserId: '2345',
          assignedToGroupId: '1004',
          assignedTimeStamp: '2022-01-07',
          taskId: '01234',
          businessKey: '01234',
          taskName: 'pending',
          requestorFullName: 'Lobo',
          requestorRole: 'role 1',
          comments: 'reassign',
          userFirstName: 'Mark',
          userMiddleName: '',
          userLastName: 'mark',
          userEmployeeId: '3456',
          userEmailId: 'mark@morrisonsplc.co.uk',
        },
        {
          requestId: '202201210701740_40011361_hbtwUserManagementWorkflow',
          assignedToUserId: '2346',
          assignedToGroupId: '1004',
          assignedTimeStamp: '2022-01-07',
          taskId: '01235',
          businessKey: '01234',
          taskName: 'pending',
          requestorFullName: 'Lobo',
          requestorRole: 'role 1',
          comments: 'reassign',
          userFirstName: 'Mark',
          userMiddleName: '',
          userLastName: 'mark',
          userEmployeeId: '3456',
          userEmailId: 'mark@morrisonsplc.co.uk',
        },
      ],
    },
    {
      details: 'myInProgressTasks',
      count: '1',
      tasks: [
        {
          requestId: '202201211201201_40011361_hbtwUserManagementWorkflow',
          assignedToUserId: '2345',
          assignedToGroupId: '1004',
          assignedTimeStamp: '2022-01-07',
          taskId: '01234',
          businessKey: '01234',
          taskName: 'pending',
          requestorFullName: 'Lobo',
          requestorRole: 'role 1',
          comments: 'reassign',
          userFirstName: 'Mark',
          userMiddleName: '',
          userLastName: 'mark',
          userEmployeeId: '3456',
          userEmailId: 'mark@morrisonsplc.co.uk',
        },
      ],
    },
    {
      details: 'myGroupPendingTasks',
      count: '3',
      tasks: [
        {
          requestId: '202201150901913_40011361_hbtwUserManagementWorkflow',
          assignedToUserId: '2345',
          assignedToGroupId: '1004',
          assignedTimeStamp: '2022-01-07',
          taskId: '01234',
          businessKey: '01234',
          taskName: 'pending',
          requestorFullName: 'Lobo',
          requestorRole: 'role 1',
          comments: 'reassign',
          userFirstName: 'Mark',
          userMiddleName: '',
          userLastName: 'mark',
          userEmployeeId: '3456',
          userEmailId: 'mark@morrisonsplc.co.uk',
        },
        {
          requestId: '01235',
          assignedToUserId: '2345',
          assignedToGroupId: '1004',
          assignedTimeStamp: '2022-01-07',
          taskId: '01234',
          businessKey: '01234',
          taskName: 'pending',
          requestorFullName: 'Lobo',
          requestorRole: 'role 1',
          comments: 'reassign',
          userFirstName: 'Mark',
          userMiddleName: '',
          userLastName: 'mark',
          userEmployeeId: '3456',
          userEmailId: 'mark@morrisonsplc.co.uk',
        },
        {
          requestId: '202201150901131_40011361_hbtwUserManagementWorkflow',
          assignedToUserId: '2345',
          assignedToGroupId: '1004',
          assignedTimeStamp: '2022-01-07',
          taskId: '01234',
          businessKey: '01234',
          taskName: 'pending',
          requestorFullName: 'Lobo',
          requestorRole: 'role 1',
          comments: 'reassign',
          userFirstName: 'Mark',
          userMiddleName: '',
          userLastName: 'mark',
          userEmployeeId: '3456',
          userEmailId: 'mark@morrisonsplc.co.uk',
        },
      ],
    },
    {
      details: 'myGroupUnassignedWorkflows',
      count: '2',
      tasks: [
        {
          requestId: '20220115090119_40011361_hbtwUserManagementWorkflow',
          assignedToUserId: '2345',
          assignedToGroupId: '1004',
          assignedTimeStamp: '2022-01-07',
          taskId: '01234',
          businessKey: '01234',
          taskName: 'pending',
          requestorFullName: 'Lobo',
          requestorRole: 'role 1',
          comments: 'reassign',
          userFirstName: 'Mark',
          userMiddleName: '',
          userLastName: 'mark',
          userEmployeeId: '3456',
          userEmailId: 'mark@morrisonsplc.co.uk',
        },
        {
          requestId: '202201150401419_40011361_hbtwUserManagementWorkflow',
          assignedToUserId: '2345',
          assignedToGroupId: '1004',
          assignedTimeStamp: '2022-01-07',
          taskId: 'a49ec953-7212-11ec-bdf7-0a58a9feac0e',
          businessKey: '01234',
          taskName: 'pending',
          requestorFullName: 'Lobo',
          requestorRole: 'role 1',
          comments: 'reassign',
          userFirstName: 'Mark',
          userMiddleName: '',
          userLastName: 'mark',
          userEmployeeId: '3456',
          userEmailId: 'mark@morrisonsplc.co.uk',
        },
      ],
    },
  ],
}

export const viewLogTemp = [
  {
    requestId: '202201161301627_40011361_hbtwUserManagementWorkflow',
    timestamp: '2022-01-16 13:13:10',
    userId: '40011361',
    role: 'BUYER',
    actionTaken: 'VALIDATED',
    comments: 'VALIDATED',
    attachmentUrl: null,
    camundaRequestId:
      'validateUserRequest:0d1652e9-76ce-11ec-bdf7-0a58a9feac0e',
  },
  {
    requestId: '202201161301627_40011361_hbtwUserManagementWorkflow',
    timestamp: '2022-01-16 13:13:10',
    userId: '40011361',
    role: 'BUYER',
    actionTaken: 'VALIDATED',
    comments: 'VALIDATED',
    attachmentUrl: null,
    camundaRequestId:
      'implementAccessRequest:0d1baa2b-76ce-11ec-bdf7-0a58a9feac0e',
  },
  {
    requestId: '202201161301627_40011361_hbtwUserManagementWorkflow',
    timestamp: '2022-01-16 13:13:12',
    userId: '40011368',
    role: 'ADMIN',
    actionTaken: 'Approved',
    comments: 'twoattachmentshaha',
    attachmentUrl:
      'https://mdev.xxwmm.commercial.hbtw.oyewgmymzw.s3.eu-west-1.amazonaws.com/usermanagement/userattachments/40011361-20220116140935.pdf',
    camundaRequestId: '202201161301627_40011361_hbtwUserManagementWorkflow',
  },
  {
    requestId: '202201161301627_40011361_hbtwUserManagementWorkflow',
    timestamp: '2022-01-16 13:13:14',
    userId: '40011368',
    role: 'ADMIN',
    actionTaken: 'Approved',
    comments: 'twoattachmentshaha',
    attachmentUrl:
      'https://mdev.xxwmm.commercial.hbtw.oyewgmymzw.s3.eu-west-1.amazonaws.com/usermanagement/userattachments/40011361-20220116140935.pdf',
    camundaRequestId: '202201161301627_40011361_hbtwUserManagementWorkflow',
  },
]
