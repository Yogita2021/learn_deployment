const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    gender: { type: String, require: true },
    password: { type: String, require: true },
    age: { type: Number, require: true },
    city: { type: String, require: true },
    is_married: { type: Boolean, require: true },
  },
  {
    versionKey: false,
  }
);
//  {
//     "name":"yogita",
//     "email": "yogita@gmail.com",
//   "gender": "female",
//     "password":"yogita@123",
//     "age": 25,
//     city: "pune",
//     is_married: true,
//   },

const UserModel = mongoose.model("user", userSchema);
module.exports = { UserModel };
