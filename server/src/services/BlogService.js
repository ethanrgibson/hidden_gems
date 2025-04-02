import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

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


  async getBlogById(blogId) {
    const blog = await dbContext.Blogs.findById(blogId).populate('creator', 'name picture')
    return blog
  }


  async editBlogById(blogId, blogData, userInfo) {

    const blogUpdated = await dbContext.Blogs.findById(blogId).populate('creator', 'name picture')
    if (blogUpdated.creatorId != userInfo.id) {
      throw new BadRequest('YOU CANNOT EDIT A BLOG YOU DID NOT CREATE')
    }
    blogUpdated.title = blogData.title
    blogUpdated.body = blogData.body
    blogUpdated.coverImg = blogData.coverImg
    blogUpdated.category = blogData.category

    await blogUpdated.save()
    return blogUpdated

  }

}


export const blogService = new BlogService()