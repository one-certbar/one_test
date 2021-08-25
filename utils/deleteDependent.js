let Blog = require('../model/Blog');
let User = require('../model/user');
let Role = require('../model/role');
let ProjectRoute = require('../model/projectRoute');
let RouteRole = require('../model/routeRole');
let UserRole = require('../model/userRole');
let dbService = require('../utils/dbService');

const deleteBlog = async (filter) =>{
  try {
    return await Blog.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteUser = async (filter) =>{
  try {
    let user = await User.find(filter, { _id:1 });
    if (user.length){
      user = user.map((obj) => obj._id);
      const BlogFilter2476 = { 'addedby': { '$in': user } };
      const Blog2247 = await deleteBlog(BlogFilter2476);
      const BlogFilter2051 = { 'updatedBy': { '$in': user } };
      const Blog4336 = await deleteBlog(BlogFilter2051);
      const BlogFilter8265 = { 'addedBy': { '$in': user } };
      const Blog5457 = await deleteBlog(BlogFilter8265);
      const userFilter3541 = { 'addedBy': { '$in': user } };
      const user4979 = await deleteUser(userFilter3541);
      const userFilter4771 = { 'updatedBy': { '$in': user } };
      const user9485 = await deleteUser(userFilter4771);
      const userRoleFilter8596 = { 'userId': { '$in': user } };
      const userRole9280 = await deleteUserRole(userRoleFilter8596);
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
      const routeRoleFilter1219 = { 'roleId': { '$in': role } };
      const routeRole5788 = await deleteRouteRole(routeRoleFilter1219);
      const userRoleFilter7787 = { 'roleId': { '$in': role } };
      const userRole4875 = await deleteUserRole(userRoleFilter7787);
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
      const routeRoleFilter9191 = { 'routeId': { '$in': projectRoute } };
      const routeRole5468 = await deleteRouteRole(routeRoleFilter9191);
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

const countBlog = async (filter) =>{
  try {
    const BlogCnt =  await Blog.countDocuments(filter);
    return { Blog : BlogCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countUser = async (filter) =>{
  try {
    let user = await User.find(filter, { _id:1 });
    if (user.length){
      user = user.map((obj) => obj._id);
      const BlogFilter8153 = { 'addedby': { '$in': user } };
      const Blog2316Cnt = await countBlog(BlogFilter8153);
      const BlogFilter4542 = { 'updatedBy': { '$in': user } };
      const Blog1488Cnt = await countBlog(BlogFilter4542);
      const BlogFilter7174 = { 'addedBy': { '$in': user } };
      const Blog7114Cnt = await countBlog(BlogFilter7174);
      const userFilter4995 = { 'addedBy': { '$in': user } };
      const user3434Cnt = await countUser(userFilter4995);
      const userFilter3841 = { 'updatedBy': { '$in': user } };
      const user6906Cnt = await countUser(userFilter3841);
      const userRoleFilter3252 = { 'userId': { '$in': user } };
      const userRole8056Cnt = await countUserRole(userRoleFilter3252);
      const userCnt =  await User.countDocuments(filter);
      let response = { user : userCnt  };
      response = {
        ...response,
        ...Blog2316Cnt,
        ...Blog1488Cnt,
        ...Blog7114Cnt,
        ...user3434Cnt,
        ...user6906Cnt,
        ...userRole8056Cnt,
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
      const routeRoleFilter1636 = { 'roleId': { '$in': role } };
      const routeRole1566Cnt = await countRouteRole(routeRoleFilter1636);
      const userRoleFilter9343 = { 'roleId': { '$in': role } };
      const userRole1569Cnt = await countUserRole(userRoleFilter9343);
      const roleCnt =  await Role.countDocuments(filter);
      let response = { role : roleCnt  };
      response = {
        ...response,
        ...routeRole1566Cnt,
        ...userRole1569Cnt,
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
      const routeRoleFilter6963 = { 'routeId': { '$in': projectRoute } };
      const routeRole8659Cnt = await countRouteRole(routeRoleFilter6963);
      const projectRouteCnt =  await ProjectRoute.countDocuments(filter);
      let response = { projectRoute : projectRouteCnt  };
      response = {
        ...response,
        ...routeRole8659Cnt,
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

const softDeleteBlog = async (filter) =>{
  try {
    return await Blog.updateMany(filter, { isDeleted:true });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteUser = async (filter) =>{
  try {
    let user = await User.find(filter, { _id:1 });
    if (user.length){
      user = user.map((obj) => obj._id);
      const BlogFilter8832 = { 'addedby': { '$in': user } };
      const Blog5545 = await softDeleteBlog(BlogFilter8832);
      const BlogFilter7239 = { 'updatedBy': { '$in': user } };
      const Blog6867 = await softDeleteBlog(BlogFilter7239);
      const BlogFilter4505 = { 'addedBy': { '$in': user } };
      const Blog9534 = await softDeleteBlog(BlogFilter4505);
      const userFilter0786 = { 'addedBy': { '$in': user } };
      const user4983 = await softDeleteUser(userFilter0786);
      const userFilter9845 = { 'updatedBy': { '$in': user } };
      const user9246 = await softDeleteUser(userFilter9845);
      const userRoleFilter2364 = { 'userId': { '$in': user } };
      const userRole8639 = await softDeleteUserRole(userRoleFilter2364);
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
      const routeRoleFilter0514 = { 'roleId': { '$in': role } };
      const routeRole3951 = await softDeleteRouteRole(routeRoleFilter0514);
      const userRoleFilter7626 = { 'roleId': { '$in': role } };
      const userRole3738 = await softDeleteUserRole(userRoleFilter7626);
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
      const routeRoleFilter1170 = { 'routeId': { '$in': projectRoute } };
      const routeRole1473 = await softDeleteRouteRole(routeRoleFilter1170);
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
  deleteBlog,
  deleteUser,
  deleteRole,
  deleteProjectRoute,
  deleteRouteRole,
  deleteUserRole,
  countBlog,
  countUser,
  countRole,
  countProjectRoute,
  countRouteRole,
  countUserRole,
  softDeleteBlog,
  softDeleteUser,
  softDeleteRole,
  softDeleteProjectRoute,
  softDeleteRouteRole,
  softDeleteUserRole,
};
