import { dbContext } from "../db/DbContext.js"

class LikeService {
  async createLike(likeData) {
    const like = await dbContext.Likes.create(likeData)
    await like.populate('creator', 'name picture')
    return like
  }
}



export const likeService = new LikeService()