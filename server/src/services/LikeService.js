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
}



export const likeService = new LikeService()