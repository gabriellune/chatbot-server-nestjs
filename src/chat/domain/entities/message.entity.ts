export class Message {
    constructor(
      public userId: string,
      public content: string,
      public id?: string,
      public createdAt?: Date,
    ) {
      this.createdAt = this.createdAt || new Date();
    }
  }
  