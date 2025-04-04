import { Schema } from "mongoose";

export const BlogSchema = new Schema(


  {
    creatorId: { type: Schema.ObjectId, required: true, ref: 'Account' },
    title: { type: String, required: true, minLength: 3, maxLength: 50 },
    body: { type: String, required: true, minLength: 15, maxLength: 5000 },
    coverImg: { type: String, required: true, minLength: 1, maxLength: 1000 },
    isPublished: { type: Boolean, required: true, default: false },
    category: { type: String, enum: ['camping', 'hiking', 'overlanding'] },
    locationId: { type: Schema.ObjectId, ref: 'BlogLocation' },
    blogPicturesId: {type: Schema.ObjectId, ref: 'BlogPicture'}

  },

  {
    toJSON: { virtuals: true },
    timestamps: true
  }


)


BlogSchema.virtual('creator',
  {
    localField: 'creatorId',
    foreignField: '_id',
    ref: 'Account',
    justOne: true
  },
)


BlogSchema.virtual('likeCount',
  {
    localField: '_id',
    foreignField: 'otherId',
    ref: 'Like',
    justOne: false,
    count: true
  }
)

BlogSchema.virtual('location',

  {
    localField: 'locationId',
    foreignField: '_id',
    ref: 'BlogLocation',
    justOne: true
  }
)

BlogSchema.virtual('blogPictures',
  {
    localField: 'blogPicturesId',
    foreignField: '_id',
    ref: 'BlogPicture',
    justOne: true
  }
)

