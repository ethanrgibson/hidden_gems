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
      .delete('/:likeId', this.deleteLike)
  }



  async createLike(request, response, next) {

    try {
      const likeData = request.body
      const userInfo = request.userInfo
      likeData.accountId = userInfo.id
      const like = await likeService.createLike(likeData, userInfo)
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


  async deleteLike(request, response, next) {
    try {
      const likeId = request.params.likeId
      const userInfo = request.userInfo
      const message = await likeService.deleteLike(likeId, userInfo)
      response.send(message)
    } catch (error) {
      next(error)
    }
  }
}