const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const curriculumVitaeSchema = new Schema(
  {
    experience: [
      {
        id: { type: String },
        profession: { type: String },
        company: { type: String },
        startDateMonth: { type: String },
        startDateYear: { type: String },
        endDateMonth: { type: String },
        endDateYear: { type: String },
        tasks: [{ type: String }],
        city: { type: String },
        country: { type: String },
      },
    ],
    education: [
      {
        id: { type: String },
        school: { type: String },
        startDateMonth: { type: String },
        startDateYear: { type: String },
        endDateMonth: { type: String },
        endDateYear: { type: String },
        degree: { type: String },
        city: { type: String },
        country: { type: String },
      },
    ],
    languages: [
      {
        id: { type: String },
        level: { type: String },
        language: { type: String },
      },
    ],
    skills: [
      {
        id: { type: String },
        skill: { type: String },
      },
    ],
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const CurriculumVitae = model("CurriculumVitae", curriculumVitaeSchema);

module.exports = CurriculumVitae;
