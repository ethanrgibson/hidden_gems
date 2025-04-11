import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Blog } from "@/models/Blog.js"
import { AppState } from "@/AppState.js"

class BlogsService {
  async saveBlog(blogId, blogBody) {
    const blogToUpdate = AppState.blog
    logger.log(blogToUpdate)
    // const blogToUpdate = AppState.blogs.find(blog => blog.id == blogId)
    blogToUpdate.body = blogBody

    const response = await api.put(`api/blogs/${blogId}`, blogToUpdate)
    const blog = new Blog(response.data)
    logger.log(blog)
    AppState.blog = blog
  }
  async publishBlog(blogId) {
    const blogToPublish = AppState.blogs.find(blog => blog.id == blogId)
    blogToPublish.isPublished = !blogToPublish.isPublished

    const response = await api.put(`api/blogs/${blogId}`, blogToPublish)
    const blog = new Blog(response.data)
    logger.log(blog)
    AppState.blog = blog
  }
  async deleteBlog(blogId) {
    const response = await api.delete(`api/blogs/${blogId}`)
    logger.log(response.data)
    const blogs = AppState.blogs
    const blogIndex = blogs.findIndex(blog => blog.id == blogId)
    blogs.splice(blogIndex, 1)

  }
  async searchBlogs(searchData) {
    logger.log('searching for', searchData)
    const response = await api.get(`api/blogs?query=${searchData}`)
    logger.log(response.data)
  }
  async createBlog(blogData) {
    const response = await api.post('api/blogs', blogData)
    logger.log(response.data)
    const blog = new Blog(response.data)
    AppState.blogs.push(blog)
    return (blog)
  }
  async getAllBlogs() {
    const response = await api.get('api/blogs')
    logger.log(response.data)
    const blogs = response.data.map(pojo => new Blog(pojo))
    AppState.blogs = blogs
  }
  async getBlogById(blogId) {
    AppState.blog = null
    const response = await api.get(`api/blogs/${blogId}`)
    logger.log(response.data)
    AppState.blog = new Blog(response.data)
  }

}
export const blogsService = new BlogsService()
