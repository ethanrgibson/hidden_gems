import { Schema } from "mongoose";

export const blogPictureSchema = new Schema(


  {
    imgUrl: { type: String, required: true, minLength: 1, maxLength: 2000 }
  },

  {
    toJSON: { virtuals: true }
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