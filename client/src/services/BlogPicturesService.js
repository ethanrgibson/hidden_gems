import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { BlogPicture } from "@/models/BlogPicture.js"
import { AppState } from "@/AppState.js"

class BlogPicturesService {
  async getFeaturedPictures() {
    const response = await api.get('api/pictures')
    logger.log(response.data)
    const pictures = response.data.map(pojo => new BlogPicture(pojo))
    AppState.blogPictures = pictures
    logger.log(AppState.blogPictures)
  }
}



export const blogPicturesService = new BlogPicturesService()