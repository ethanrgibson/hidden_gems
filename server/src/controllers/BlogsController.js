import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { blogService } from "../services/BlogService.js";

export class BlogsController extends BaseController {

  constructor() {
    super('api/blogs')
    this.router
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


}