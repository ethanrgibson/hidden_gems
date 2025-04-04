import { Auth0Provider } from "@bcwdev/auth0provider";
import { likeService } from "../services/LikeService.js";
import BaseController from "../utils/BaseController.js";

export class LikesController extends BaseController {

  constructor() {
    super('api/likes')
    this.router
      .get('', this.getLikesByQuery)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createLike)
  }



  async createLike(request, response, next) {

    try {
      const likeData = request.body
      const userInfo = request.userInfo
      likeData.accountId = userInfo.id
      const like = await likeService.createLike(likeData)
      response.send(like)

    } catch (error) {
      next(error)
    }
  }



  async getLikesByQuery(request, response, next) {

    try {
      const likeQuery = request.query
      const likes = await likeService.getLikesByQuery(likeQuery)
      response.send(likes)
    } catch (error) {
      next(error)
    }
  }
}