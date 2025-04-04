// NOTE Likes for accounts will displayed as follower count


import { Schema } from "mongoose";

export const LikeSchema = new Schema(
  {
    // Who liked something
    accountId: { type: Schema.ObjectId, required: true, ref: 'Account' },
    //  What was liked
    otherId: { type: Schema.ObjectId, required: true },
    // type of thing that was liked
    type: { type: String, enum: ['Location', 'Account', 'Blog', 'BlogPicture'] }
  },
  {
    toJSON: { virtuals: true },
    timestamps: true
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
    ref: 'Account',
    options: {
      select: 'name picture'
    }
  }
)

LikeSchema.virtual('blog',
  {
    ...otherOptions,
    ref: 'Blog',
    options: {
      select: 'name picture'
    }
  }
)


// NOTE - the account recieveing the like (or the followers)
LikeSchema.virtual('account',
  {
    ...otherOptions,
    ref: 'Account',
    options: {
      select: 'name picture'
    }
  }
)
LikeSchema.virtual('location',
  {
    ...otherOptions,
    ref: 'Location',
    options: {
      select: 'name picture'
    }
  }
)
LikeSchema.virtual('blogPicture',

  {
    ...otherOptions,
    ref: 'blogPicture',
    options: {
      select: 'name picture'
    }
  }
)