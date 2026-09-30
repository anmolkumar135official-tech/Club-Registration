const mongoose = require("mongoose");

// ✅ ALL activities from frontend (exact match required)
const ALLOWED_ACTIVITIES = [
  // Music
  "Singing",
  "Solo/Group singing",
  "Instrumental music",
  "Band",
  "Classical music",
  "Western music",

  // Dance
  "Bhangra",
  "Giddha",
  "Classical dance",
  "Western dance",
  "Contemporary",
  "Solo/Group dance",

  // Drama & Theatre
  "Drama",
  "Skit",
  "Street play/Nukkad Natak",
  "Mime",
  "Mimicry",
  "Stage acting",

  // Art & Creative
  "Painting",
  "Sketching",
  "Rangoli",
  "Face painting",
  "Poster making",
  "Craft",
  "Photography",

  // Literary
  "Poetry",
  "Storytelling",
  "Recitation",
  "Debate",
  "Quiz",
  "Creative writing",

  // Fashion
  "Fashion show",
  "Traditional dress",
  "Mr./Miss College",
  "Costume competition",

  // Events
  "Freshers",
  "Farewell",
  "Annual cultural fest",
  "Talent hunt",
  "Lohri",
  "Diwali",
  "Holi",
  "Independence Day/Republic Day celebrations"
];

const CultureRegistrationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required."],
      trim: true,
      match: [/^[A-Za-z\s]+$/, "Name should contain only letters."]
    },

    rollNumber: {
      type: String,
      required: [true, "Roll number is required."],
      trim: true,
      unique: true
    },

    semester: {
      type: String,
      required: [true, "Semester is required."],
      enum: ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"]
    },

    department: {
      type: String,
      required: [true, "Department is required."],
      enum: ["MCA", "BCA", "B.Tech", "MBA", "BBA", "M.Tech", "Other"]
    },

    phone: {
      type: String,
      required: [true, "Phone number is required."],
      match: [/^[6-9]\d{9}$/, "Enter a valid 10-digit phone number."]
    },

    email: {
      type: String,
      required: [true, "Email is required."],
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email address."]
    },

    gender: {
      type: String,
      required: [true, "Gender is required."],
      enum: ["Male", "Female", "Other"]
    },

    dob: {
      type: Date,
      required: [true, "Date of birth is required."]
    },

    selectedActivities: {
      type: [
        {
          type: String,
          enum: ALLOWED_ACTIVITIES
        }
      ],
      required: true,
      validate: {
        validator: function (arr) {
          return arr.length > 0;
        },
        message: "Please select at least one cultural activity."
      }
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "CultureRegistration",
  CultureRegistrationSchema
);