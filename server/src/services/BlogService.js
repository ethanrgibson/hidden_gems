import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class BlogService {

  async createBlog(blogData) {
    const blog = await dbContext.Blogs.create(blogData)
    await blog.populate('creator', 'name picture')
    await blog.populate('location', 'name')
    return blog
  }


  async getAllBlogs() {
    const blogs = await dbContext.Blogs.find()
      .populate('creator', 'name picture')
      .populate('likeCount')
      .populate('location', 'name')
    return blogs
  }


  async getBlogById(blogId) {
    const blog = await await dbContext.Blogs.findById(blogId)
      .populate('creator', 'name picture')
      .populate('likeCount')
      .populate('location', 'name')

    if (blog == null) {
      throw new BadRequest('BLOG DOES NOT EXIST')
    }

    return blog
  }


  async editBlogById(blogId, blogData, userInfo) {

    const blogUpdated = await dbContext.Blogs.findById(blogId).populate('creator', 'name picture')
    if (blogUpdated.creatorId != userInfo.id) {
      throw new BadRequest('YOU CANNOT EDIT A BLOG YOU DID NOT CREATE')
    }
    blogUpdated.title = blogData.title ?? blogUpdated.title
    blogUpdated.body = blogData.body ?? blogUpdated.body
    blogUpdated.coverImg = blogData.coverImg ?? blogUpdated.coverImg
    blogUpdated.category = blogData.category ?? blogUpdated.category
    blogUpdated.isPublished = blogData.isPublished ?? blogUpdated.isPublished


    await blogUpdated.save()
    return blogUpdated

  }

  async deleteBlogById(blogId, userInfo) {

    const blog = await dbContext.Blogs.findById(blogId)
    if (blog.creatorId != userInfo.id) {
      throw new Forbidden('YOU ARE NOT ALLOWED TO DELETE A BLOG CREATED BY ANOTHER USER')
    }

    if (blog.id == null) { return 'Blog Does Not Exist' }
    await blog.deleteOne()
    return `Blog Deleted!`

  }

}


export const blogService = new BlogService()