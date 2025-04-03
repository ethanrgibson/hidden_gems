import { Schema } from "mongoose";

export const blogPictureSchema = new Schema(


  {
    creatorId: { type: Schema.ObjectId, required: true, ref: 'Account' },
    blogId: { type: Schema.ObjectId, required: true, ref: 'Blog' },
    imgUrl: { type: String, required: true, minLength: 1, maxLength: 2000 }
  },

  {
    toJSON: { virtuals: true },
    timestamps: true
  }

)

blogPictureSchema.virtual('creator',

  {
    localField: 'creatorId',
    foreignField: '_id',
    ref: 'Account',
    justOne: true
  }

)
