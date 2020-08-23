const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// user schema
const userSchema = new Schema(
  {
    user_data: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    pain: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// virtual

module.exports = mongoose.model("Pain", userSchema);
