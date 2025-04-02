import { dbContext } from "../db/DbContext.js"

class BlogService {

  async createBlog(blogData) {
    const blog = await dbContext.Blogs.create(blogData)
    return blog
  }

}


export const blogService = new BlogService()