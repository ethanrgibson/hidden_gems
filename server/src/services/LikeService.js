// TODO Create clamp so a user can only like something one time
// TODO Create clamp so a user cannot like (follow) their own account

import { dbContext } from "../db/DbContext.js"

class LikeService {
  async createLike(likeData) {
    const like = await dbContext.Likes.create(likeData)
    await like.populate('creator', 'name picture')
    return like
  }

  async getLikesForBlog(blogId) {
    const likes = await dbContext.Likes.find({ otherId: blogId }).populate('creator', 'name picture')
    return likes
  }


  async getLikesByQuery(likeQuery) {
    const virtualName = likeQuery.populate
    delete likeQuery.populate
    const selects = likeQuery.select
    delete likeQuery.select



    const likes = await dbContext.Likes.find(likeQuery).populate(virtualName, selects)
    return likes
  }
}



export const likeService = new LikeService()