const express = require('express');
const router = express.Router();
const routeRoleController = require('../../controller/admin/routeRoleController');
const auth = require('../../middleware/auth');
router.route('/admin/routeRole/create').post(auth(...[ 'createByUserInAdminPlatform' ]),routeRoleController.addRouteRole);
router.route('/admin/routeRole/addBulk').post(auth(...[ 'addBulkByUserInAdminPlatform' ]),routeRoleController.bulkInsertRouteRole);
router.route('/admin/routeRole/list').post(auth(...[ 'getAllByUserInAdminPlatform' ]),routeRoleController.findAllRouteRole);
router.route('/admin/routeRole/:id').get(auth(...[ 'getByUserInAdminPlatform' ]),routeRoleController.getRouteRole);
router.route('/admin/routeRole/partial-update/:id').put(auth(...[ 'partialUpdateByUserInAdminPlatform' ]),routeRoleController.partialUpdateRouteRole);
router.route('/admin/routeRole/update/:id').put(auth(...[ 'updateByUserInAdminPlatform' ]),routeRoleController.updateRouteRole);    
router.route('/admin/routeRole/softDelete/:id').put(auth(...[ 'softDeleteByUserInAdminPlatform' ]),routeRoleController.softDeleteRouteRole);
router.route('/admin/routeRole/aggregate').post(auth(...[ 'aggregateByUserInAdminPlatform' ]),routeRoleController.getRouteRoleByAggregate);
router.route('/admin/routeRole/count').post(auth(...[ 'getCountByUserInAdminPlatform' ]),routeRoleController.getRouteRoleCount);
router.route('/admin/routeRole/upsert').post(auth(...[ 'upsertByUserInAdminPlatform' ]),routeRoleController.upsert);

module.exports = router;
