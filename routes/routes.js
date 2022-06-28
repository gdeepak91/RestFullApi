// import express
const express = require("express");
// import models
const Model = require("../model/model");
const router = express.Router();

module.exports = router;

router.get("/getAll", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/getOne/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.send(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/post", async (req, res) => {
  const data = new Model({
    name: req.body.name,
    age: req.body.age,
  });
  try {
    const dataSave = await data.save();
    res.status(200).json(dataSave);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const data = await Model.findByIdAndUpdate(id, updatedData, options);
    res.status(201).json(data);
    res.send(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);
    res.send(`Documents with ${data.name} has been deleted..`);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
