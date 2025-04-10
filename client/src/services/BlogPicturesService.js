import { api } from "./AxiosService.js"

class BlogPicturesService {
  async getFeaturedPictures() {
const response = await api.get('api/blog')
  }
}



export const blogPicturesService = new BlogPicturesService()