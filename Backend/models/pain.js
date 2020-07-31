const mongoose = require("mongoose");

// user schema
const userSchema = new mongoose.Schema(
  {
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
