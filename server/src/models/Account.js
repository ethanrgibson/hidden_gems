import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const AccountSchema = new Schema(
  {
    subs: [{ type: String }],
    email: { type: String, lowercase: true, unique: true },
    name: { type: String, required: true },
    picture: { type: String },
    // NOTE If you wish to add additional properties do so here
    coverImg: {type: String, minLength: 1, maxLength: 1000},
    bio: {type: String, minLenth: 1, maxLength: 500, required: true}
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

