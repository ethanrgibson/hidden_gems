import { Schema } from "mongoose"

export const blogLocationSchema = new Schema(

  {
    locationId: { type: Schema.ObjectId, required: true, ref: 'Location' },
    blogId: { type: Schema.ObjectId, required: true, ref: 'Blog' }
  },

  {
    toJSON: { virtuals: true },
    timestamps: true
  }

)

blogLocationSchema.virtual('likeCount',
  {
    localField: '_id',
    foreignField: 'otherId',
    ref: 'Like',
    justOne: false,
    count: true
  }
)