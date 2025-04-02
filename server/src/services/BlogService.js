import { dbContext } from "../db/DbContext.js"

class BlogService {

  async createBlog(blogData) {
    const blog = await dbContext.Blogs.create(blogData)
    await blog.populate('creator', 'name picture')
    return blog
  }
  async getAllBlogs() {
    const blogs = await dbContext.Blogs.find().populate('creator', 'name picture')
    return blogs
  }

}


export const blogService = new BlogService()