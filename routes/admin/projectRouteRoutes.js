const express = require('express');
const router = express.Router();
const projectRouteController = require('../../controller/admin/projectRouteController');
const auth = require('../../middleware/auth');
router.route('/admin/projectRoute/create').post(auth(...[ 'createByUserInAdminPlatform' ]),projectRouteController.addProjectRoute);
router.route('/admin/projectRoute/addBulk').post(auth(...[ 'addBulkByUserInAdminPlatform' ]),projectRouteController.bulkInsertProjectRoute);
router.route('/admin/projectRoute/list').post(auth(...[ 'getAllByUserInAdminPlatform' ]),projectRouteController.findAllProjectRoute);
router.route('/admin/projectRoute/:id').get(auth(...[ 'getByUserInAdminPlatform' ]),projectRouteController.getProjectRoute);
router.route('/admin/projectRoute/partial-update/:id').put(auth(...[ 'partialUpdateByUserInAdminPlatform' ]),projectRouteController.partialUpdateProjectRoute);
router.route('/admin/projectRoute/softDelete/:id').put(auth(...[ 'softDeleteByUserInAdminPlatform' ]),projectRouteController.softDeleteProjectRoute);
router.route('/admin/projectRoute/update/:id').put(auth(...[ 'updateByUserInAdminPlatform' ]),projectRouteController.updateProjectRoute);    
router.route('/admin/projectRoute/aggregate').post(auth(...[ 'aggregateByUserInAdminPlatform' ]),projectRouteController.getProjectRouteByAggregate);
router.route('/admin/projectRoute/count').post(auth(...[ 'getCountByUserInAdminPlatform' ]),projectRouteController.getProjectRouteCount);
router.route('/admin/projectRoute/upsert').post(auth(...[ 'upsertByUserInAdminPlatform' ]),projectRouteController.upsert);

module.exports = router;
