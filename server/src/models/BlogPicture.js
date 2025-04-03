import { Schema } from "mongoose";

export const blogPictureSchema = new Schema(


  {
    imgUrl: { type: String, required: true, minLength: 1, maxLength: 2000 },
    blogId: { type: Schema.ObjectId, required: true, ref: 'Blog' }
  },

  {
    toJSON: { virtuals: true },
    timestamps: true
  }

)

blogPictureSchema.virtual('creator',

  {
    localField: '_id',
    foreignField: 'creatorId',
    ref: 'Account',
    justOne: true
  }


)

blogPictureSchema.virtual('blog',


  {

    localField: 'blogId',
    foreignField: '_id',
    ref: 'Blog',
    justOne: true

  }


)