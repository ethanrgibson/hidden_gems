// TODO Create clamp so a user can only like something one time
// TODO Create clamp so a user cannot like (follow) their own account

import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class LikeService {
  async createLike(likeData, userInfo) {
   
    if (likeData.otherId == likeData.accountId) {
      throw new BadRequest('Cannot Follow Your Own Account')
    }
   
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