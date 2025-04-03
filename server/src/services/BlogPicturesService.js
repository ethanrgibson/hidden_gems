import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class BlogPicturesService {

  async getBlogPicturesById(blogId) {
    const pictures = await dbContext.blogPictures.find({ blogId: blogId })
    return pictures
  }

  async uploadPictures(pictureData) {
    const pictures = await dbContext.blogPictures.create(pictureData)
    await pictures.populate('creator', 'name picture')
    return pictures
  }

  async deletePicture(blogPictureId, userInfo) {
    const blogPicture = await dbContext.blogPictures.findById(blogPictureId)

    if (blogPicture == null) {
      throw new BadRequest('Picture Does Not Exist')
    }

    if (blogPicture.creatorId != userInfo.id) {
      throw new Forbidden('YOU CANNOT DELETE A PICTURE POSTED BY ANOTHER PERSON')
    }

    await blogPicture.deleteOne()

    return 'Picture Deleted'
  }
}

export const blogPicturesService = new BlogPicturesService()