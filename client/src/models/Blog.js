export class Blog {
  constructor(data) {
    this.id = data.id
    this.creatorId = data.creatorId
    this.title = data.title
    this.body = data.body
    this.coverImg = data.coverImg
    this.isPublished = data.isPublished
    this.creator = data.creator
    this.creator = data.creator
    this.category = data.category
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.createLike = data.createLike
    this.description = data.description


  }
}