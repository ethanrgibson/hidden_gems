import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { blogLocationService } from "../services/BlogLocationService.js";

export class BlogLocationsController extends BaseController {

  constructor() {
    super('api/location')
    this.router
      .get('', this.getAllLocations)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createALocation)

  }


  async createALocation(request, response, next) {
    try {
      const locationData = request.body
      const location = await blogLocationService.createALocation(locationData)
      response.send(location)
    } catch (error) {
      next(error)
    }
  }

  async getAllLocations(request, response, next) {
    try {
      const locations = await blogLocationService.getAllLocations()
      response.send(locations)
    } catch (error) {
      next(error)
    }
  }
}