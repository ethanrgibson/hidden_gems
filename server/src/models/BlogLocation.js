import { Schema } from "mongoose"

export const BlogLocationSchema = new Schema(

  {
    locationId: { type: Schema.ObjectId, required: true, ref: 'Location' },
    blogId: { type: Schema.ObjectId, required: true, ref: 'Blog' }
  }

)