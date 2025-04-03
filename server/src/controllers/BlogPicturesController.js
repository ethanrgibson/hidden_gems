import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { blogPicturesService } from "../services/BlogPicturesService.js";

export class BlogPicturesController extends BaseController {

  constructor() {

    super('api/pictures')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.uploadPictures)


  }
  async uploadPictures(request, response, next) {

    try {
      const pictureData = request.body
      const userInfo = request.userInfo
      pictureData.creatorId = userInfo.id
      const pictures = await blogPicturesService.uploadPictures(pictureData)
      response.send(pictures)
    } catch (error) {
      next(error)
    }

  }

}