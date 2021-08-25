const mongoose = require('../config/db');
const mongoosePaginate = require('mongoose-paginate-v2');
var idValidator = require('mongoose-id-validator');
const myCustomLabels = {
  totalDocs: 'itemCount',
  docs: 'data',
  limit: 'perPage',
  page: 'currentPage',
  nextPage: 'next',
  prevPage: 'prev',
  totalPages: 'pageCount',
  pagingCounter: 'slNo',
  meta: 'paginator',
};
mongoosePaginate.paginate.options = { customLabels: myCustomLabels };
const Schema = mongoose.Schema;
const schema = new Schema(
  {

    title:{ type:String },

    alternativeHeadline:{ type:String },

    image:{ type:String },

    publishDate:{ type:String },

    author:{
      name:{ type:String },
      image:{ type:String },
      email:{ type:String }
    },

    publisher:{
      name:{ type:String },
      url:{ type:String },
      logo:{ type:String }
    },

    keywords:{ type:Array },

    articleSection:{ type:String },

    articleBody:{ type:String },

    description:{ type:String },

    slug:{ type:String },

    url:{ type:String },

    isDraft:{ type:Boolean },

    isDeleted:{ type:Boolean },

    isActive:{ type:Boolean },

    createdAt:{ type:Date },

    updatedAt:{ type:Date },

    addedby:{
      type:Schema.Types.ObjectId,
      ref:'user'
    },

    updatedBy:{
      type:Schema.Types.ObjectId,
      ref:'user'
    },

    addedBy:{
      type:Schema.Types.ObjectId,
      ref:'user'
    }
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt' 
    } 
  }
);
schema.pre('save', async function (next) {
  this.isDeleted = false;
  this.isActive = true;
  next();
});
schema.method('toJSON', function () {
  const {
    __v, ...object 
  } = this.toObject({ virtuals:true });
  object.id = object._id;
  return object;
});
schema.plugin(mongoosePaginate);
schema.plugin(idValidator);

const Blog = mongoose.model('Blog',schema,'Blog');
module.exports = Blog;