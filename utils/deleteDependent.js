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
      const BlogFilter8691 = { 'addedby': { '$in': user } };
      const Blog0349 = await deleteBlog(BlogFilter8691);
      const BlogFilter9798 = { 'updatedBy': { '$in': user } };
      const Blog1044 = await deleteBlog(BlogFilter9798);
      const BlogFilter7973 = { 'addedBy': { '$in': user } };
      const Blog5984 = await deleteBlog(BlogFilter7973);
      const userFilter8645 = { 'addedBy': { '$in': user } };
      const user4670 = await deleteUser(userFilter8645);
      const userFilter2941 = { 'updatedBy': { '$in': user } };
      const user9976 = await deleteUser(userFilter2941);
      const userRoleFilter5607 = { 'userId': { '$in': user } };
      const userRole4088 = await deleteUserRole(userRoleFilter5607);
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
      const routeRoleFilter0382 = { 'roleId': { '$in': role } };
      const routeRole3347 = await deleteRouteRole(routeRoleFilter0382);
      const userRoleFilter6425 = { 'roleId': { '$in': role } };
      const userRole3623 = await deleteUserRole(userRoleFilter6425);
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
      const routeRoleFilter2865 = { 'routeId': { '$in': projectRoute } };
      const routeRole2692 = await deleteRouteRole(routeRoleFilter2865);
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
      const BlogFilter5468 = { 'addedby': { '$in': user } };
      const Blog8999Cnt = await countBlog(BlogFilter5468);
      const BlogFilter5543 = { 'updatedBy': { '$in': user } };
      const Blog0656Cnt = await countBlog(BlogFilter5543);
      const BlogFilter7248 = { 'addedBy': { '$in': user } };
      const Blog0194Cnt = await countBlog(BlogFilter7248);
      const userFilter1895 = { 'addedBy': { '$in': user } };
      const user5686Cnt = await countUser(userFilter1895);
      const userFilter6255 = { 'updatedBy': { '$in': user } };
      const user0543Cnt = await countUser(userFilter6255);
      const userRoleFilter1449 = { 'userId': { '$in': user } };
      const userRole8244Cnt = await countUserRole(userRoleFilter1449);
      const userCnt =  await User.countDocuments(filter);
      let response = { user : userCnt  };
      response = {
        ...response,
        ...Blog8999Cnt,
        ...Blog0656Cnt,
        ...Blog0194Cnt,
        ...user5686Cnt,
        ...user0543Cnt,
        ...userRole8244Cnt,
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
      const routeRoleFilter3265 = { 'roleId': { '$in': role } };
      const routeRole3867Cnt = await countRouteRole(routeRoleFilter3265);
      const userRoleFilter4245 = { 'roleId': { '$in': role } };
      const userRole1336Cnt = await countUserRole(userRoleFilter4245);
      const roleCnt =  await Role.countDocuments(filter);
      let response = { role : roleCnt  };
      response = {
        ...response,
        ...routeRole3867Cnt,
        ...userRole1336Cnt,
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
      const routeRoleFilter3642 = { 'routeId': { '$in': projectRoute } };
      const routeRole1555Cnt = await countRouteRole(routeRoleFilter3642);
      const projectRouteCnt =  await ProjectRoute.countDocuments(filter);
      let response = { projectRoute : projectRouteCnt  };
      response = {
        ...response,
        ...routeRole1555Cnt,
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
      const BlogFilter4066 = { 'addedby': { '$in': user } };
      const Blog7437 = await softDeleteBlog(BlogFilter4066);
      const BlogFilter4071 = { 'updatedBy': { '$in': user } };
      const Blog1664 = await softDeleteBlog(BlogFilter4071);
      const BlogFilter1893 = { 'addedBy': { '$in': user } };
      const Blog7952 = await softDeleteBlog(BlogFilter1893);
      const userFilter0133 = { 'addedBy': { '$in': user } };
      const user7865 = await softDeleteUser(userFilter0133);
      const userFilter6931 = { 'updatedBy': { '$in': user } };
      const user3265 = await softDeleteUser(userFilter6931);
      const userRoleFilter5653 = { 'userId': { '$in': user } };
      const userRole6294 = await softDeleteUserRole(userRoleFilter5653);
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
      const routeRoleFilter4613 = { 'roleId': { '$in': role } };
      const routeRole2507 = await softDeleteRouteRole(routeRoleFilter4613);
      const userRoleFilter4004 = { 'roleId': { '$in': role } };
      const userRole3553 = await softDeleteUserRole(userRoleFilter4004);
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
      const routeRoleFilter0289 = { 'routeId': { '$in': projectRoute } };
      const routeRole7334 = await softDeleteRouteRole(routeRoleFilter0289);
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
