const router = require("express").Router();
const CurriculumVitae = require("../models/CurriculumVitae.model");

router.get("/", async (req, res, next) => {
  try {
    const response = await CurriculumVitae.find();
    res.json(response);
  } catch (error) {
    res.json({ status: 400, msg: error.message });
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const response = await CurriculumVitae.findById(req.params.id);
    res.json(response);
  } catch (error) {
    res.json({ status: 400, msg: error.message });
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newCurriculumVitae = req.body;
    const response = await CurriculumVitae.create(newCurriculumVitae);
    res.json(response);
  } catch (error) {
    res.json({ status: 400, msg: error.message });
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const changeCurriculumVitae = req.body;
    const response = await CurriculumVitae.findByIdAndUpdate(
      req.params.id,
      changeCurriculumVitae
    );
    res.json(response);
  } catch (error) {
    res.json({ status: 400, msg: error.message });
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const response = await CurriculumVitae.findByIdAndDelete(req.params.id);
    res.json(response);
  } catch (error) {
    res.json({ status: 400, msg: error.message });
  }
});

module.exports = router;
