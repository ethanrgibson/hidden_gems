
import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"


class LikeService {

  async createLike(likeData) {
    console.log(`trying to get likes`)
    const response = await api.post(`api/likes`, likeData)
    logger.log(`Tryng to get like`, response.data)
    // const like = new likeData(response.data)
    // AppState.blogLikes = 



  }

  async getLikesByBlogId(blogId) {
    console.log(`getting blog likes by id `)
    // api/likes?otherId=81209e09du9802183&populate=creator
    const response = await api.get(`api/likes/?otherId=${blogId}&populate=creator`)

    logger.log(`got likers`, response.data)
  }
}

export const likeService = new LikeService()