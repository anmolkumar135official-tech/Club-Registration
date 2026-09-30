const mongoose = require("mongoose");

const FineArtsRegistrationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: 3
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email"]
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
      match: [/^[0-9+\-\s]{7,15}$/, "Enter valid phone number"]
    },

    artworkTitle: {
      type: String,
      required: [true, "Artwork title is required"],
      trim: true
    },

    ageCategory: {
      type: String,
      required: [true, "Age category is required"],
      enum: ["junior", "teen", "open"]
    },

    mediums: {
      type: [String],
      required: [true, "At least one medium is required"]
    }
  },
  {
    timestamps: true
  }
);

const FineArtsModel = mongoose.model(
  "FineArtsRegistration",
  FineArtsRegistrationSchema
);

module.exports = FineArtsModel;