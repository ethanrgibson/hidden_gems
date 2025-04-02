import { dbContext } from "../db/DbContext.js"

class BlogService {

  async createBlog(blogData) {
    const blog = await dbContext.Blogs.create(blogData)
    return blog
  }
  async getAllBlogs() {
    const blogs = dbContext.Blogs.find().populate('creator', 'name picture')
    return blogs
  }

}


export const blogService = new BlogService()