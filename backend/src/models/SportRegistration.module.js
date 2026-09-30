const mongoose = require("mongoose");

const ALLOWED_SPORTS = [
  // Indoor
  "Chess",
  "Carrom",
  "Table Tennis",
  "Badminton",
  // Outdoor
  "Cricket",
  "Football",
  "Basketball",
  "Volleyball",
  "Kabaddi",
  // Individual
  "Athletics",
  "Boxing",
  "Swimming",
  "Wrestling",
  "Archery",
];

const SportRegistrationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required."],
      trim: true,
      match: [/^[A-Za-z\s]+$/, "Name should contain only letters."],
    },

    rollNumber: {
      type: String,
      required: [true, "Roll number is required."],
      trim: true,
      unique: true, // prevents the same roll number registering twice
    },

    semester: {
      type: String,
      required: [true, "Semester is required."],
      enum: ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"],
    },

    department: {
      type: String,
      required: [true, "Department is required."],
      enum: ["MCA", "BCA", "B.Tech", "MBA", "BBA", "M.Tech", "Other"],
    },

    phone: {
      type: String,
      required: [true, "Phone number is required."],
      trim: true,
      match: [/^[6-9]\d{9}$/, "Enter a valid 10-digit phone number."],
    },

    email: {
      type: String,
      required: [true, "Email is required."],
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email address."],
    },

    gender: {
      type: String,
      required: [true, "Gender is required."],
      enum: ["Male", "Female", "Other"],
    },

    dob: {
      type: Date,
      required: [true, "Date of birth is required."],
    },

    preferredDate: {
      type: Date,
      required: [true, "Preferred date is required."],
    },

    selectedSports: {
      type: [String],
      enum: ALLOWED_SPORTS,
      required: true,
      validate: {
        validator: (arr) => Array.isArray(arr) && arr.length > 0,
        message: "Please select at least one sport.",
      },
    },
  },
  {
    timestamps: true, // adds createdAt / updatedAt
  }
);

module.exports = mongoose.model("SportRegistration", SportRegistrationSchema);