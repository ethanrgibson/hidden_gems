// NOTE Likes for accounts will displayed as follower count


import { Schema } from "mongoose";

export const LikeSchema = new Schema(
  {

    accountId: { type: Schema.ObjectId, required: true, ref: 'Account' },
    otherId: { type: Schema.ObjectId, required: true },
    type: { type: String, enum: ['Location', 'Account', 'Blog', 'BlogPicture'] }
  },
  {
    toJSON: { virtuals: true }
  }
)



const otherOptions = {
  localField: 'otherId',
  foreignField: '_id',
  justOne: true
}

// NOTE -  creator of the like (the one who is liking)
LikeSchema.virtual('creator',
  {
    ...otherOptions,
    localField: 'accountId',
    ref: 'Account'
  }
)

LikeSchema.virtual('blog',
  {
    ...otherOptions,
    ref: 'Blog'
  }
)


// NOTE - the account recieveing the like (or the followers)
LikeSchema.virtual('account',
  {
    ...otherOptions,
    ref: 'Account'
  }
)
LikeSchema.virtual('location',
  {
    ...otherOptions,
    ref: 'Location'
  }
)
LikeSchema.virtual('blogPicture',

  {
    ...otherOptions,
    ref: 'blogPicture'
  }
)