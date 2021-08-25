
const User = require('../model/user');
const Role = require('../model/role');
const ProjectRoute = require('../model/projectRoute');
const RouteRole = require('../model/routeRole');
const UserRole = require('../model/userRole');
const { replaceAll } = require('../utils/common');

async function seedRole () {
  const roles = [ 'User', 'Admin', 'SYSTEM_USER' ];
  for (let i = 0; i < roles.length; i++) {
    let result = await Role.findOne({
      name: roles[i],
      isActive: true,
      isDeleted: false 
    });
    if (!result) {
      await Role.create({
        name: roles[i],
        code: roles[i].toUpperCase(),
        weight: 1
      });
    }
  };
  console.info('Role model seeded 🍺');
}
async function seedProjectRoutes (routes) {
  if (routes && routes.length) {
    for (let i = 0; i < routes.length; i++) {
      const routeMethods = routes[i].methods;
      for (let j = 0; j < routeMethods.length; j++) {
        const routeObj = {
          uri: routes[i].path.toLowerCase(),
          method: routeMethods[j],
          route_name: `${replaceAll((routes[i].path).toLowerCase().substring(1), '/', '_')}`,
          isActive: true, 
          isDeleted: false
        };
        let result = await ProjectRoute.findOne(routeObj);
        if (!result) {
          await ProjectRoute.create(routeObj);
        }
      }
    }
    console.info('ProjectRoute model seeded 🍺');
  }
}
async function seedRouteRole () {
  const routeRoles = [ 
    {
      route: '/client/api/v1/user/create',
      role: 'User',
      method: 'POST' 
    },
    {
      route: '/client/api/v1/user/create',
      role: 'Admin',
      method: 'POST' 
    },
    {
      route: '/client/api/v1/user/create',
      role: 'SYSTEM_USER',
      method: 'POST'
    },
    {
      route: '/client/api/v1/user/list',
      role: 'User',
      method: 'POST' 
    },
    {
      route: '/client/api/v1/user/list',
      role: 'Admin',
      method: 'POST' 
    },
    {
      route: '/client/api/v1/user/list',
      role: 'SYSTEM_USER',
      method: 'POST'
    },
    {
      route: '/client/api/v1/user/aggregate',
      role: 'User',
      method: 'POST'
    },
    {
      route: '/client/api/v1/user/aggregate',
      role: 'Admin',
      method: 'POST'
    },
    {
      route: '/client/api/v1/user/aggregate',
      role: 'SYSTEM_USER',
      method: 'POST'
    },
    {
      route: '/client/api/v1/user/:id',
      role: 'User',
      method: 'GET' 
    },
    {
      route: '/client/api/v1/user/:id',
      role: 'Admin',
      method: 'GET' 
    },
    {
      route: '/client/api/v1/user/:id',
      role: 'SYSTEM_USER',
      method: 'GET'
    },
    {
      route: '/client/api/v1/user/count',
      role: 'User',
      method: 'POST' 
    },
    {
      route: '/client/api/v1/user/count',
      role: 'Admin',
      method: 'POST' 
    },
    {
      route: '/client/api/v1/user/count',
      role: 'SYSTEM_USER',
      method: 'POST'
    },
    {
      route: '/client/api/v1/user/update/:id',
      role: 'User',
      method: 'PUT'
    },
    {
      route: '/client/api/v1/user/update/:id',
      role: 'Admin',
      method: 'PUT'
    },
    {
      route: '/client/api/v1/user/update/:id',
      role: 'SYSTEM_USER',
      method: 'PUT'
    },
    {
      route: '/client/api/v1/user/partial-update/:id',
      role: 'User',
      method: 'PUT'
    },
    {
      route: '/client/api/v1/user/partial-update/:id',
      role: 'Admin',
      method: 'PUT'
    },
    {
      route: '/client/api/v1/user/partial-update/:id',
      role: 'SYSTEM_USER',
      method: 'PUT'
    },
    {
      route: '/client/api/v1/user/softdelete/:id',
      role: 'User',
      method: 'PUT'
    },
    {
      route: '/client/api/v1/user/softdelete/:id',
      role: 'Admin',
      method: 'PUT'
    },
    {
      route: '/client/api/v1/user/softdelete/:id',
      role: 'SYSTEM_USER',
      method: 'PUT'
    },
    {
      route: '/client/api/v1/user/softdeletemany',
      role: 'User',
      method: 'PUT'
    },
    {
      route: '/client/api/v1/user/softdeletemany',
      role: 'Admin',
      method: 'PUT'
    },
    {
      route: '/client/api/v1/user/softdeletemany',
      role: 'SYSTEM_USER',
      method: 'PUT'
    },
    {
      route: '/client/api/v1/user/delete/:id',
      role: 'SYSTEM_USER',
      method: 'DELETE'
    },
    {
      route: '/client/api/v1/user/deletemany',
      role: 'SYSTEM_USER',
      method: 'DELETE'
    },
    {
      route: '/client/api/v1/user/addbulk',
      role: 'SYSTEM_USER',
      method: 'POST'
    },
    {
      route: '/client/api/v1/user/updatebulk',
      role: 'SYSTEM_USER',
      method: 'PUT'
    },

  ];
  if (routeRoles && routeRoles.length) {
    for (let i = 0; i < routeRoles.length; i++) {
      let route = await ProjectRoute.findOne({
        uri: routeRoles[i].route.toLowerCase(),
        method: routeRoles[i].method,
        isActive: true,
        isDeleted: false 
      }, { id: 1 });
      let role = await Role.findOne({
        code: (routeRoles[i].role).toUpperCase(),
        isActive: true,
        isDeleted: false 
      }, { id: 1 });
      if (route && route.id && role && role.id) {
        let routeRoleObj = await RouteRole.findOne({
          roleId: role.id,
          routeId: route.id,
          isActive: true, 
          isDeleted: false
        });
        if (!routeRoleObj) {
          await RouteRole.create({
            roleId: role.id,
            routeId: route.id
          });
        }
      }
    };
    console.info('RouteRole model seeded 🍺');
  }
    
}
async function seedUserRole (){
  let admin = await User.findOne({
    'email':'Kailyn.Beer22@yahoo.com',
    'isActive':true,
    'isDeleted':false
  });
  let adminRole = await Role.findOne({ code: 'SYSTEM_USER' }, { id: 1 });
  if (admin && admin.isPasswordMatch('eCtsw_VamUWoSqg') && adminRole){
    let count = await UserRole.countDocuments({
      userId: admin.id,
      roleId: adminRole.id,
      isActive: true, 
      isDeleted: false
    });
    if (count == 0) {
      await UserRole.create({
        userId: admin.id,
        roleId: adminRole.id 
      });
      console.info('admin seeded 🍺');
    }   
  }
}
async function seedUser () {
  let admin = await User.findOne({
    'email':'Kailyn.Beer22@yahoo.com',
    'isActive':true,
    'isDeleted':false
  });
  if (!admin || !admin.isPasswordMatch('eCtsw_VamUWoSqg') ) {
    let admin = new User({
      'password':'eCtsw_VamUWoSqg',
      'email':'Kailyn.Beer22@yahoo.com',
      'role':1
    });
    await User.create(admin);
  }
  console.info('Users seeded 🍺');
}
async function seedData (allRegisterRoutes){
  await seedUser();
  await seedRole();
  await seedProjectRoutes(allRegisterRoutes);
  await seedRouteRole();
  await seedUserRole();
}     

module.exports = seedData;