/*
 * modelValidation.js
 * purpose     : request validation
 * description : validate each post and put request as per mongoose model
 *
 */
const joi = require('joi');
exports.schemaKeys = joi.object({
  title: joi.string(),
  alternativeHeadline: joi.string(),
  image: joi.string(),
  publishDate: joi.string(),
  author: joi.object({
    name:joi.string(),
    image:joi.string(),
    email:joi.string()
  }),
  publisher: joi.object({
    name:joi.string(),
    url:joi.string(),
    logo:joi.string()
  }),
  keywords: joi.array(),
  articleSection: joi.string(),
  articleBody: joi.string(),
  description: joi.string(),
  slug: joi.string(),
  url: joi.string(),
  isDraft: joi.boolean(),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  addedby: joi.string().regex(/^[0-9a-fA-F]{24}$/)
}).unknown(true);
exports.updateSchemaKeys = joi.object({
  title: joi.string(),
  alternativeHeadline: joi.string(),
  image: joi.string(),
  publishDate: joi.string(),
  author: joi.object({
    name:joi.string(),
    image:joi.string(),
    email:joi.string()
  }),
  publisher: joi.object({
    name:joi.string(),
    url:joi.string(),
    logo:joi.string()
  }),
  keywords: joi.array(),
  articleSection: joi.string(),
  articleBody: joi.string(),
  description: joi.string(),
  slug: joi.string(),
  url: joi.string(),
  isDraft: joi.boolean(),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  addedby: joi.string().regex(/^[0-9a-fA-F]{24}$/)
}).unknown(true);
