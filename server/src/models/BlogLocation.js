import { Schema } from "mongoose"

export const blogLocationSchema = new Schema(

  {
    locationId: { type: Schema.ObjectId, required: true, ref: 'Location' },
    blogId: { type: Schema.ObjectId, required: true, ref: 'Blog' }
  }

)