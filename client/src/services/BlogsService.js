import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Blog } from "@/models/Blog.js"
import { AppState } from "@/AppState.js"

class BlogsService {
  async searchBlogs(searchData) {
    logger.log('searching for', searchData)
    const response = await api.get(`api/blogs?query=${searchData}`)
    logger.log(response.data)
  }
  async createBlog(blogData) {
    const response = await api.post('api/blogs', blogData)
    logger.log(response.data)
  }
  async getAllBlogs() {
    const response = await api.get('api/blogs')
    logger.log(response.data)
    const blogs = response.data.map(pojo => new Blog(pojo))
    AppState.blogs = blogs
  }

}
export const blogsService = new BlogsService()
