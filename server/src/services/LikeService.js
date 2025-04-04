// TODO Create clamp so a user can only like something one time

import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

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


  async deleteLike(likeId, userInfo) {
    const like = await dbContext.Likes.findById(likeId)

    if (like == null) {
      throw new BadRequest('You already dislike this!')
    }

    if (like.accountId != userInfo.id) {
      throw new Forbidden('YOU CANNOT UNLIKE SOMETHING FOR SOMEONE ELSE')
    }

    await like.deleteOne()
    return 'You no longer like this!'

  }
}



export const likeService = new LikeService()