const router = require("express").Router();
const User = require("../models/User.model");

router.get("/", async (req, res, next) => {
  try {
    const response = await User.find();
    res.json(response);
  } catch (error) {
    res.json({ status: 400, msg: error.message });
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const response = await User.findById(req.params.id);
    res.json(response);
  } catch (error) {
    res.json({ status: 400, msg: error.message });
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newUser = req.body;
    const response = await User.create(newUser);
    res.json(response);
  } catch (error) {
    res.json({ status: 400, msg: error.message });
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const changeUser = req.body;
    const response = await User.findByIdAndUpdate(req.params.id, changeUser);
    res.json(response);
  } catch (error) {
    res.json({ status: 400, msg: error.message });
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const response = await User.findByIdAndDelete(req.params.id);
    res.json(response);
  } catch (error) {
    res.json({ status: 400, msg: error.message });
  }
});

module.exports = router;
