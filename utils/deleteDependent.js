let User = require('../model/user');
let Role = require('../model/role');
let ProjectRoute = require('../model/projectRoute');
let RouteRole = require('../model/routeRole');
let UserRole = require('../model/userRole');
let dbService = require('../utils/dbService');

const deleteUser = async (filter) =>{
  try {
    let user = await User.find(filter, { _id:1 });
    if (user.length){
      user = user.map((obj) => obj._id);
      const userFilter5199 = { 'addedBy': { '$in': user } };
      const user2613 = await deleteUser(userFilter5199);
      const userFilter0136 = { 'updatedBy': { '$in': user } };
      const user9212 = await deleteUser(userFilter0136);
      const userRoleFilter2764 = { 'userId': { '$in': user } };
      const userRole1448 = await deleteUserRole(userRoleFilter2764);
      return await User.deleteMany(filter);
    } else {
      return 'No user found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteRole = async (filter) =>{
  try {
    let role = await Role.find(filter, { _id:1 });
    if (role.length){
      role = role.map((obj) => obj._id);
      const routeRoleFilter3703 = { 'roleId': { '$in': role } };
      const routeRole8571 = await deleteRouteRole(routeRoleFilter3703);
      const userRoleFilter5404 = { 'roleId': { '$in': role } };
      const userRole5244 = await deleteUserRole(userRoleFilter5404);
      return await Role.deleteMany(filter);
    } else {
      return 'No role found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteProjectRoute = async (filter) =>{
  try {
    let projectRoute = await ProjectRoute.find(filter, { _id:1 });
    if (projectRoute.length){
      projectRoute = projectRoute.map((obj) => obj._id);
      const routeRoleFilter0638 = { 'routeId': { '$in': projectRoute } };
      const routeRole1795 = await deleteRouteRole(routeRoleFilter0638);
      return await ProjectRoute.deleteMany(filter);
    } else {
      return 'No projectRoute found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteRouteRole = async (filter) =>{
  try {
    return await RouteRole.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteUserRole = async (filter) =>{
  try {
    return await UserRole.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const countUser = async (filter) =>{
  try {
    let user = await User.find(filter, { _id:1 });
    if (user.length){
      user = user.map((obj) => obj._id);
      const userFilter6602 = { 'addedBy': { '$in': user } };
      const user4795Cnt = await countUser(userFilter6602);
      const userFilter2491 = { 'updatedBy': { '$in': user } };
      const user7639Cnt = await countUser(userFilter2491);
      const userRoleFilter1630 = { 'userId': { '$in': user } };
      const userRole6313Cnt = await countUserRole(userRoleFilter1630);
      const userCnt =  await User.countDocuments(filter);
      let response = { user : userCnt  };
      response = {
        ...response,
        ...user4795Cnt,
        ...user7639Cnt,
        ...userRole6313Cnt,
      };
      return response;
    } else {
      return 'No user found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countRole = async (filter) =>{
  try {
    let role = await Role.find(filter, { _id:1 });
    if (role.length){
      role = role.map((obj) => obj._id);
      const routeRoleFilter4799 = { 'roleId': { '$in': role } };
      const routeRole2997Cnt = await countRouteRole(routeRoleFilter4799);
      const userRoleFilter4637 = { 'roleId': { '$in': role } };
      const userRole3295Cnt = await countUserRole(userRoleFilter4637);
      const roleCnt =  await Role.countDocuments(filter);
      let response = { role : roleCnt  };
      response = {
        ...response,
        ...routeRole2997Cnt,
        ...userRole3295Cnt,
      };
      return response;
    } else {
      return 'No role found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countProjectRoute = async (filter) =>{
  try {
    let projectRoute = await ProjectRoute.find(filter, { _id:1 });
    if (projectRoute.length){
      projectRoute = projectRoute.map((obj) => obj._id);
      const routeRoleFilter3797 = { 'routeId': { '$in': projectRoute } };
      const routeRole8020Cnt = await countRouteRole(routeRoleFilter3797);
      const projectRouteCnt =  await ProjectRoute.countDocuments(filter);
      let response = { projectRoute : projectRouteCnt  };
      response = {
        ...response,
        ...routeRole8020Cnt,
      };
      return response;
    } else {
      return 'No projectRoute found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countRouteRole = async (filter) =>{
  try {
    const routeRoleCnt =  await RouteRole.countDocuments(filter);
    return { routeRole : routeRoleCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countUserRole = async (filter) =>{
  try {
    const userRoleCnt =  await UserRole.countDocuments(filter);
    return { userRole : userRoleCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteUser = async (filter) =>{
  try {
    let user = await User.find(filter, { _id:1 });
    if (user.length){
      user = user.map((obj) => obj._id);
      const userFilter3984 = { 'addedBy': { '$in': user } };
      const user0309 = await softDeleteUser(userFilter3984);
      const userFilter1180 = { 'updatedBy': { '$in': user } };
      const user2834 = await softDeleteUser(userFilter1180);
      const userRoleFilter5060 = { 'userId': { '$in': user } };
      const userRole4936 = await softDeleteUserRole(userRoleFilter5060);
      return await User.updateMany(filter, { isDeleted:true });
    } else {
      return 'No user found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteRole = async (filter) =>{
  try {
    let role = await Role.find(filter, { _id:1 });
    if (role.length){
      role = role.map((obj) => obj._id);
      const routeRoleFilter0671 = { 'roleId': { '$in': role } };
      const routeRole9219 = await softDeleteRouteRole(routeRoleFilter0671);
      const userRoleFilter2548 = { 'roleId': { '$in': role } };
      const userRole5327 = await softDeleteUserRole(userRoleFilter2548);
      return await Role.updateMany(filter, { isDeleted:true });
    } else {
      return 'No role found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteProjectRoute = async (filter) =>{
  try {
    let projectRoute = await ProjectRoute.find(filter, { _id:1 });
    if (projectRoute.length){
      projectRoute = projectRoute.map((obj) => obj._id);
      const routeRoleFilter8536 = { 'routeId': { '$in': projectRoute } };
      const routeRole7882 = await softDeleteRouteRole(routeRoleFilter8536);
      return await ProjectRoute.updateMany(filter, { isDeleted:true });
    } else {
      return 'No projectRoute found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteRouteRole = async (filter) =>{
  try {
    return await RouteRole.updateMany(filter, { isDeleted:true });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteUserRole = async (filter) =>{
  try {
    return await UserRole.updateMany(filter, { isDeleted:true });
  } catch (error){
    throw new Error(error.message);
  }
};

module.exports = {
  deleteUser,
  deleteRole,
  deleteProjectRoute,
  deleteRouteRole,
  deleteUserRole,
  countUser,
  countRole,
  countProjectRoute,
  countRouteRole,
  countUserRole,
  softDeleteUser,
  softDeleteRole,
  softDeleteProjectRoute,
  softDeleteRouteRole,
  softDeleteUserRole,
};
