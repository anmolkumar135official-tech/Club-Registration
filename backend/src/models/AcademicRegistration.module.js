const mongoose = require("mongoose")

const AcademicRegistrationSchema = new mongoose.Schema(

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
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"]
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
      match: [/^[0-9+\-\s]{7,15}$/, "Enter valid phone number"]
    },

    college: {
      type: String,
      required: true,
      trim: true
    },

    course: {
      type: String,
      required: true
    },

    year: {
      type: String,
      required: true,
      enum: ["1", "2", "3", "4", "grad"]
    },

    teamName: {
      type: String,
      required: true,
      trim: true
    },

    teamSize: {
      type: Number,
      required: true,
      min: 1,
      max: 4
    },

    githubUrl: {
      type: String
    },

    dietary: {
      type: String
    },

    tracks: {
      type: [String],
      required: true
    },

    techStack: {
      type: [String]
    },

    experience: {
      type: [String]
    }
  },
  {
    timestamps: true
  }
)



module.exports = mongoose.model("AcademicRegistration", AcademicRegistrationSchema)
