export const allMessages = {
  error: {
    noRequestType: 'Please select request type',
    noEmployeeId: 'Provide employee id and search',
    noSearchPress: 'Press search icon after filling employee id first',
    noStatus: 'Please select a status',
    noRoles: 'Please select atleast one role',
    noGroups: 'Please select atleast one group',
    invalidEmployee: 'Invalid Employee ID',
    existingEmp: 'User already exists in webapp',
    modifyEmp: 'User does not exist in webapp',
    inprogressError:
      'Only New request can be raised for user status Inprogress. Either change Status or the Request Type',
    inactiveError:
      'Only Modify/Remove request can be raised for user status Inactive. Either change Status or the Request Type',
    deletedError:
      'Only Modify request can be raised for user status Deleted. Either change Status or the Request Type',
    logpostFailureSingle: 'Log posting failed due to service error',
    logpostFailureAttach: 'files failed to upload and log due to service error',
    logFailureAttach: 'files failed to upload due to service error',
    noGroupName: 'Please provide Group Name',
    invalidExtension:
      'Empty Files or FileSize > 5MB or Files with invalid extensions omitted.',
    errorAssign: 'tasks failed to assign due to service error',
    errorGroupDelInac:
      'Cannot Inactive/Delete groups which are already assigned to existing users',
    errorReassign:
      'Cannot reassign in case the status of requestor is Inactive/Deleted',
  },
  success: {
    successPost: 'Log posted successfully',
    successPostAttach: 'All attached files uploaded and logged successfully',
    successAttach: 'All attached files uploaded successfully',
    successAssign: 'All tasks assigned successfully',
    successCopy: 'RequestId has been autocopied to clipboard',
    successGroupCopy: 'GroupId has been autocopied to clipboard',
    promptMessage: 'Unsaved changes will be lost. Do you want to continue ?',
  },
}
