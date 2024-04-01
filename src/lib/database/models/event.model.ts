import { Document, Schema, model, models } from "mongoose";

export interface IEvent extends Document {
  id: string;
  title: string;
  description?: string;
  location?: string;
  createdAt: Date;
  imageUrl: string;
  startDateTime: Date;
  endDateTime: Date;
  price: string;
  isFree: boolean;
  url?: string;
  category: { id: string; name: string };
  organizer: { id: string; firstName: string; lastName: string };
}

const EventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    location: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    startDateTime: {
      type: Date,
      default: Date.now,
    },
    endDateTime: {
      type: Date,
      default: Date.now,
    },
    price: {
      type: String,
    },
    isFree: {
      type: Boolean,
      default: false,
    },
    url: {
      type: String,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    organizer: {
      type: Schema.Types.ObjectId,
      ref: "User",
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
const Event = models.Event || model("Event", EventSchema);
export default Event;
