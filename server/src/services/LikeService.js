// TODO Create clamp so a user can only like something one time
// TODO Create clamp so a user cannot like (follow) their own account

import { dbContext } from "../db/DbContext.js"

class LikeService {
  async createLike(likeData) {
    const like = await dbContext.Likes.create(likeData)
    await like.populate('creator', 'name picture')
    return like
  }


  async getLikesByQuery(likeQuery) {
    const virtualName = likeQuery.populate
    delete likeQuery.populate

    const likes = await dbContext.Likes.find(likeQuery).populate(virtualName)
    return likes
  }
}



export const likeService = new LikeService()