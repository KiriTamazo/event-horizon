import { Document, Schema, models, model } from "mongoose";

export interface ICategory extends Document {
  _id: string;
  name: string;
}
const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    versionKey: false,
    toJSON: {
      virtuals: true,
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);
const Category = models.Category || model("Category", CategorySchema);
export default Category;
