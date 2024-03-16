import mongoose, { Schema, model, models } from "mongoose";

// const idPlugin = (schema:Schema) => {
//     schema.set('toJSON', {
//         transform: function (doc, ret) {
//             ret.id = ret._id;
//             delete ret._id;
//             delete ret.__v; // Optionally remove the version key if needed
//         }
//     });
// };

// // Apply the plugin globally to all schemas
// mongoose.plugin(idPlugin);

const UserSchema = new Schema(
  {
    clerkId: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const User = models.User || model("User", UserSchema);

export default User;
