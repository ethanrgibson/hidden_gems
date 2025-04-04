import { Schema } from "mongoose"

export const blogLocationSchema = new Schema(

  {
    // NOTE Location ID created from lat/long from national parks API. Not required because not every blog post will be about a campground in national parks, or even have a location
    locationId: { type: Schema.ObjectId, ref: 'Location' },
    name: { type: String, required: true, minLength: 3, maxLength: 100 }
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