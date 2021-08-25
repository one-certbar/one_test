/*
 * constants
 */

const JWT = {
  ADMIN_SECRET:'myjwtadminsecret',
  EXPIRES_IN: 10000
};

const USER_ROLE = { User:1, };

const PLATFORM = { ADMIN:1, };

let LOGIN_ACCESS = { [USER_ROLE.User]:[PLATFORM.ADMIN], };

const DEFAULT_ROLE = 1;

const ROLE_RIGHTS = {
    
  [USER_ROLE.User] : [
    'getAllByUserInAdminPlatform',
    'getByUserInAdminPlatform',
    'aggregateByUserInAdminPlatform',
    'getCountByUserInAdminPlatform',
    'createByUserInAdminPlatform',
    'addBulkByUserInAdminPlatform',
    'updateByUserInAdminPlatform',
    'updateBulkByUserInAdminPlatform',
    'partialUpdateByUserInAdminPlatform',
    'deleteByUserInAdminPlatform',
    'softDeleteByUserInAdminPlatform',
    'upsertByUserInAdminPlatform',
    'fileUploadByUserInAdminPlatform',
    'logoutByUserInAdminPlatform',
    'softDeleteManyByUserInAdminPlatform',
    'deleteManyByUserInAdminPlatform',
    'changePasswordByUserInAdminPlatform',
    'updateProfileByUserInAdminPlatform'
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