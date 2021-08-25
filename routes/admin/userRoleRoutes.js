const express = require('express');
const router = express.Router();
const userRoleController = require('../../controller/admin/userRoleController');
const auth = require('../../middleware/auth');
router.route('/admin/userRole/create').post(auth(...[ 'createByUserInAdminPlatform' ]),userRoleController.addUserRole);
router.route('/admin/userRole/addBulk').post(auth(...[ 'addBulkByUserInAdminPlatform' ]),userRoleController.bulkInsertUserRole);
router.route('/admin/userRole/list').post(auth(...[ 'getAllByUserInAdminPlatform' ]),userRoleController.findAllUserRole);
router.route('/admin/userRole/:id').get(auth(...[ 'getByUserInAdminPlatform' ]),userRoleController.getUserRole);
router.route('/admin/userRole/partial-update/:id').put(auth(...[ 'partialUpdateByUserInAdminPlatform' ]),userRoleController.partialUpdateUserRole);
router.route('/admin/userRole/update/:id').put(auth(...[ 'updateByUserInAdminPlatform' ]),userRoleController.updateUserRole);    
router.route('/admin/userRole/softDelete/:id').put(auth(...[ 'softDeleteByUserInAdminPlatform' ]),userRoleController.softDeleteUserRole);
router.route('/admin/userRole/aggregate').post(auth(...[ 'aggregateByUserInAdminPlatform' ]),userRoleController.getUserRoleByAggregate);
router.route('/admin/userRole/count').post(auth(...[ 'getCountByUserInAdminPlatform' ]),userRoleController.getUserRoleCount);
router.route('/admin/userRole/upsert').post(auth(...[ 'upsertByUserInAdminPlatform' ]),userRoleController.upsert);

module.exports = router;
