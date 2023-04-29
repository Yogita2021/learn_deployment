const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    title: { require: true, type: String },
    body: { require: true, type: String },
    no_of_comments: { require: true, type: Number },
    device: {
      require: true,
      type: String,
      enum: ["Laptop", "Tablet", "Mobile"],
    },
    authorID: String,
    // userID: String,
  },
  {
    versionKey: false,
  }
);
// {
//   "title":"abc",
//   "body":"qwe",
//  " no_of_comments":2,
//  " device":"Laptop",

// }

const PostModel = mongoose.model("post", postSchema);
module.exports = { PostModel };
