/*
 * constants
 */

const JWT = {
  CLIENT_SECRET:'myjwtclientsecret',
  EXPIRES_IN: 10000
};

const USER_ROLE = { Admin :1, };

const PLATFORM = { CLIENT:1, };

let LOGIN_ACCESS = { [USER_ROLE.Admin]:[PLATFORM.CLIENT], };

const DEFAULT_ROLE = 1;

const ROLE_RIGHTS = {
    
  [USER_ROLE.Admin] : [
    'getAllByAdminInClientPlatform',
    'getByAdminInClientPlatform',
    'aggregateByAdminInClientPlatform',
    'getCountByAdminInClientPlatform',
    'createByAdminInClientPlatform',
    'addBulkByAdminInClientPlatform',
    'updateByAdminInClientPlatform',
    'updateBulkByAdminInClientPlatform',
    'partialUpdateByAdminInClientPlatform',
    'deleteByAdminInClientPlatform',
    'softDeleteByAdminInClientPlatform',
    'upsertByAdminInClientPlatform',
    'fileUploadByAdminInClientPlatform',
    'logoutByAdminInClientPlatform',
    'softDeleteManyByAdminInClientPlatform',
    'deleteManyByAdminInClientPlatform',
    'changePasswordByAdminInClientPlatform',
    'updateProfileByAdminInClientPlatform'
  ],
    
};
const MAX_LOGIN_RETRY_LIMIT = 3;
const LOGIN_REACTIVE_TIME = 20;   

const FORGOT_PASSWORD_WITH = {
  LINK: {
    email: true,
    sms: false
  },
  EXPIRETIME: 20
};

module.exports = {
  JWT,
  USER_ROLE,
  DEFAULT_ROLE,
  ROLE_RIGHTS,
  PLATFORM,
  MAX_LOGIN_RETRY_LIMIT,
  LOGIN_REACTIVE_TIME,
  FORGOT_PASSWORD_WITH,
  LOGIN_ACCESS,
        
};