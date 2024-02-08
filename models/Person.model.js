const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const personSchema = new Schema(
  {
    name: {
      type: String,
    },
    job: {
      type: String,
    },
    adress: {
      type: String,
    },
    city: {
      type: String,
    },
    postCode: {
      type: String,
    },
    email: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    informations: {
      type: String,
    },
    image: {
      type: String,
    },
    curriculumVitae: { type: Schema.Types.ObjectId, ref: "CurriculumVitae" },
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Person = model("Person", personSchema);

module.exports = Person;
