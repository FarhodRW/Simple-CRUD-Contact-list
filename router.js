const express = require("express");
const { model } = require("mongoose");
const Empmodel = require("./schema");
const router = express.Router();
const crypto = require("crypto");
router.post("/", async (req, res) => {
  const id = crypto.randomBytes(16).toString("hex");
  req.body.id = id;
  console.log(req.body);
  const data = await Empmodel.create(req.body);
  res.send("employee created");
});

router.get("/", async (req, res) => {
  const data = await Empmodel.find();
  res.send(data);
});

router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
  const data = await Empmodel.findOne({ id });
  res.send(data);
});

router.put("/update/:id", async (req, res) => {
  payload = req.params.id;
  req.body.id = req.payload;
  const data = await Empmodel.findOneAndUpdate({ payload }, req.body);
  res.send(data);
});

router.delete("/:id", async (req, res) => {
  payload = req.params.id;
  const data = await Empmodel.findOneAndDelete(payload);
  res.send(data);
});

module.exports = { router };
