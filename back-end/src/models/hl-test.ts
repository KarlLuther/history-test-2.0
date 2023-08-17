import { ObjectId } from "mongodb";

export default class hlTest {
  constructor(
    public title: string,
    public description: string,
    public imgUrl: string,
    public id?: ObjectId
  ) {}
}
