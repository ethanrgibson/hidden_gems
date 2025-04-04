import { dbContext } from "../db/DbContext.js"

class BlogLocationService {
  async createALocation(locationData) {
    const location = await dbContext.blogLocations.create(locationData)
    return location
  }

  async getAllLocations() {
    const locations = dbContext.blogLocations.find()
      .populate('likeCount')

    return locations
  }
}



export const blogLocationService = new BlogLocationService()