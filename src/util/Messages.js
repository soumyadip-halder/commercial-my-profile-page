export const allMessages = {
  error: {
    noRequestType: 'Please select request type',
    noEmployeeId: 'Provide employee id and search',
    noSearchPress: 'Press search icon after filling employee id first',
    noStatus: 'Please select a status',
    noRoles: 'Please select atleast one role',
    noGroups: 'Please select atleast one group',
    invalidEmployee: 'Invalid Employee ID',
    existingEmp: 'Cannot create an already existing Employee',
    modifyEmp: 'Cannot modify for a non existing Employee',
    inprogressError:
      'Only New request can be raised for user status Inprogress. Either change Status or the Request Type',
    inactiveError:
      'Only Modify/Remove request can be raised for user status Inactive. Either change Status or the Request Type',
    deletedError:
      'Only Modify request can be raised for user status Deleted. Either change Status or the Request Type',
    logpostFailureSingle: 'Log posting failed due to service error',
    logpostFailureAttach: 'files failed to upload and log due to service error',
    noGroupName: 'Please provide Group Name',
    invalidExtension: 'Files with invalid extensions omitted.',
  },
  success: {
    successPost: 'Log posted successfully',
    successPostAttach: 'All attached files uploaded and logged successfully',
  },
}
