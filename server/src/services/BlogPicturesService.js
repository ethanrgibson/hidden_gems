import { dbContext } from "../db/DbContext.js"

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
}

export const blogPicturesService = new BlogPicturesService()