export class Like {
  constructor(data) {
    this.otherId = data.otherId
    this.type = data.type
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt
    this.accountId = data.accountId

  }
}
export class LikerProfile extends Like {
  constructor(data) {
    super(data)
    this.creator = data.creator
  }
}