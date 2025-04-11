import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"
import { blogService } from "./BlogService.js"

class BlogPicturesService {

  async getBlogPicturesById(blogId) {
    const pictures = await dbContext.blogPictures.find({ blogId: blogId }).populate('likeCount')

    return pictures
  }

  async uploadPictures(pictureData, userInfo) {

    const blog = await blogService.getBlogById(pictureData.blogId)

    if (blog.creatorId != userInfo.id) {
      throw new Forbidden('YOU CANNOT ADD PICTURES TO A BLOG POST YOU DID NOT WRITE')
    }

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

  async getAllPictures() {
    const pictures = await dbContext.blogPictures.aggregate([{ $sample: { size: 3 } }])

    return pictures
  }
}

export const blogPicturesService = new BlogPicturesService()