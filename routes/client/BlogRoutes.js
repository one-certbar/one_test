const express = require('express');
const router = express.Router();
const BlogController = require('../../controller/client/BlogController');
const auth = require('../../middleware/auth');
router.route('/client/api/v1/Blog/create').post(auth(...[ 'createByAdminInClientPlatform' ]),BlogController.addBlog);
router.route('/client/api/v1/Blog/list').post(auth(...[ 'getAllByAdminInClientPlatform' ]),BlogController.findAllBlog);
router.route('/client/api/v1/Blog/:id').get(auth(...[ 'getByAdminInClientPlatform' ]),BlogController.getBlog);
router.route('/client/api/v1/Blog/count').post(auth(...[ 'getCountByAdminInClientPlatform' ]),BlogController.getBlogCount);
router.route('/client/api/v1/Blog/aggregate').post(auth(...[ 'aggregateByAdminInClientPlatform' ]),BlogController.getBlogByAggregate);
router.route('/client/api/v1/Blog/update/:id').put(auth(...[ 'updateByAdminInClientPlatform' ]),BlogController.updateBlog);    
router.route('/client/api/v1/Blog/partial-update/:id').put(auth(...[ 'partialUpdateByAdminInClientPlatform' ]),BlogController.partialUpdateBlog);
router.route('/client/api/v1/Blog/softDelete/:id').put(auth(...[ 'softDeleteByAdminInClientPlatform' ]),BlogController.softDeleteBlog);
router.route('/client/api/v1/Blog/softDeleteMany').put(auth(...[ 'softDeleteManyByAdminInClientPlatform' ]),BlogController.softDeleteManyBlog);
router.route('/client/api/v1/Blog/addBulk').post(auth(...[ 'addBulkByAdminInClientPlatform' ]),BlogController.bulkInsertBlog);
router.route('/client/api/v1/Blog/updateBulk').put(auth(...[ 'updateBulkByAdminInClientPlatform' ]),BlogController.bulkUpdateBlog);

module.exports = router;
