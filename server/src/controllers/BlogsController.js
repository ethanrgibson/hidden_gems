import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { blogService } from "../services/BlogService.js";

export class BlogsController extends BaseController {

  constructor() {
    super('api/blogs')
    this.router
    .get('', this.getAllBlogs)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createBlog)


  }

  async createBlog(request, response, next) {

    try {
      const blogData = request.body
      const userInfo = request.userInfo
      blogData.creatorId = userInfo.id
      const blog = await blogService.createBlog(blogData)
      response.send(blog)
    } catch (error) {
      next(error)
    }

  }


  async getAllBlogs(request, response, next) {
    try {
      const blogs = await blogService.getAllBlogs()
      response.send(blogs)
    } catch (error) {
      next(error)
    }
  }

}