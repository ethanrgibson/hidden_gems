import { dbContext } from "../db/DbContext.js"

class BlogLocationService {
  async createALocation(locationData) {
    const location = await dbContext.blogLocations.create(locationData)
    return location

  }
}



export const blogLocationService = new BlogLocationService()