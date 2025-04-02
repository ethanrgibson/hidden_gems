import mongoose, { mongo, Mongoose } from 'mongoose'
import { AccountSchema } from '../models/Account.js'
import { ValueSchema } from '../models/Value.js'
import { BlogSchema } from '../models/Blog.js';
import { LikeSchema } from '../models/Like.js';
import { blogLocationSchema } from '../models/BlogLocation.js';
import { blogPictureSchema } from '../models/BlogPicture.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Blogs = mongoose.model('Blog', BlogSchema);
  Likes = mongoose.model('Like', LikeSchema);
  blogLocations = mongoose.model('BlogLocation', blogLocationSchema);
  blogPictures = mongoose.model('BlogPicture', blogPictureSchema)
}

export const dbContext = new DbContext()
