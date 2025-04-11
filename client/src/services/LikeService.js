
import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Like, LikerProfile } from "@/models/Likes.js"


class LikeService {

  async createLike(likeData) {
    const response = await api.post(`api/likes`, likeData)
    logger.log(`Tryng to get like`, response.data)
    const like = new Like (response.data)
    AppState.likerProfiles.push(like)

  }




  async getLikesByBlogId(blogId) {
    logger.log(`getting blog likes by id `)
    // api/likes?otherId=81209e09du9802183&populate=creator
    const response = await api.get(`api/likes/?otherId=${blogId}&populate=creator`)
    logger.log(`got likers`, response.data)
    const likerProfiles = response.data.map(pojo => new LikerProfile(pojo))
    AppState.likerProfiles = likerProfiles

  }
}

export const likeService = new LikeService()