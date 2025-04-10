import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { blogPicturesService } from "../services/BlogPicturesService.js";

export class BlogPicturesController extends BaseController {

  constructor() {

    super('api/pictures')
    this.router
      .get('', this.getAllPictures)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.uploadPictures)
      .delete('/:blogPictureId', this.deletePicture)


  }
  async uploadPictures(request, response, next) {

    try {
      const pictureData = request.body
      const userInfo = request.userInfo
      pictureData.creatorId = userInfo.id
      const pictures = await blogPicturesService.uploadPictures(pictureData, userInfo.id)
      response.send(pictures)
    } catch (error) {
      next(error)
    }

  }


  async deletePicture(request, response, next) {
    try {
      const blogPictureId = request.params.blogPictureId
      const userInfo = request.userInfo
      const blog = await blogPicturesService.deletePicture(blogPictureId, userInfo)
      response.send(blog)
    } catch (error) {
      next(error)
    }
  }

  async getAllPictures(request, response, next) {

    try {
      const pictures = await blogPicturesService.getAllPictures()
      response.send(pictures)
    } catch (error) {
      next(error)
    }
  }


}