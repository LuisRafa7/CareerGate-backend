const router = require("express").Router();
const Person = require("../models/Person.model");

router.get("/", async (req, res, next) => {
  try {
    const response = await Person.find();
    res.json(response);
  } catch (error) {
    res.json({ status: 400, msg: error.message });
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const response = await Person.findById(req.params.id).populate(
      "curriculumVitae"
    );
    res.json(response);
  } catch (error) {
    res.json({ status: 400, msg: error.message });
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newPerson = req.body;
    const response = await Person.create(newPerson);
    res.json(response);
  } catch (error) {
    res.json({ status: 400, msg: error.message });
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const changePerson = req.body;
    const response = await Person.findByIdAndUpdate(
      req.params.id,
      changePerson
    );
    res.json(response);
  } catch (error) {
    res.json({ status: 400, msg: error.message });
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const response = await Person.findByIdAndDelete(req.params.id);
    res.json(response);
  } catch (error) {
    res.json({ status: 400, msg: error.message });
  }
});

module.exports = router;
