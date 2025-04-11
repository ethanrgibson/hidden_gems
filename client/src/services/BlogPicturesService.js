import { api } from "./AxiosService.js"
import { BlogPicture } from "@/models/BlogPicture.js"
import { AppState } from "@/AppState.js"

class BlogPicturesService {
  async getFeaturedPictures() {
    const response = await api.get('api/pictures')
    const pictures = response.data.map(pojo => new BlogPicture(pojo))
    AppState.blogPictures = pictures
  }
}



export const blogPicturesService = new BlogPicturesService()