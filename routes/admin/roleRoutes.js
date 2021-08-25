const express = require('express');
const router = express.Router();
const roleController = require('../../controller/admin/roleController');
const auth = require('../../middleware/auth');
router.route('/admin/role/create').post(auth(...[ 'createByUserInAdminPlatform' ]),roleController.addRole);
router.route('/admin/role/addBulk').post(auth(...[ 'addBulkByUserInAdminPlatform' ]),roleController.bulkInsertRole);
router.route('/admin/role/list').post(auth(...[ 'getAllByUserInAdminPlatform' ]),roleController.findAllRole);
router.route('/admin/role/:id').get(auth(...[ 'getByUserInAdminPlatform' ]),roleController.getRole);
router.route('/admin/role/partial-update/:id').put(auth(...[ 'partialUpdateByUserInAdminPlatform' ]),roleController.partialUpdateRole);
router.route('/admin/role/softDelete/:id').put(auth(...[ 'softDeleteByUserInAdminPlatform' ]),roleController.softDeleteRole);
router.route('/admin/role/update/:id').put(auth(...[ 'updateByUserInAdminPlatform' ]),roleController.updateRole);    
router.route('/admin/role/aggregate').post(auth(...[ 'aggregateByUserInAdminPlatform' ]),roleController.getRoleByAggregate);
router.route('/admin/role/count').post(auth(...[ 'getCountByUserInAdminPlatform' ]),roleController.getRoleCount);
router.route('/admin/role/upsert').post(auth(...[ 'upsertByUserInAdminPlatform' ]),roleController.upsert);

module.exports = router;
