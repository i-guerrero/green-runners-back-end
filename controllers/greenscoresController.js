const express = require("express");
const greenscores = express.Router();
const {
  getAllGreenscores,
  getGreenscore,
  createGreenscore,
  deleteGreenscore,
  updateGreenscore,
} = require("../queries/greenscores");

// INDEX
greenscores.get("/", async (req, res) => {
  const allGreenscores = await getAllGreenscores();
  if (allGreenscores[0]) {
    res.status(200).json(allGreenscores);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// SHOW
greenscores.get("/:id", async (req, res) => {
  const { id } = req.params;
  const greenscore = await getGreenscore(id);
  if (greenscore) {
    res.json(greenscore);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE
greenscores.post("/", async (req, res) => {
  const greenscore = await createGreenscore(req.body);
  if (greenscore) {
    res.json(greenscore);
  } else {
    res.status(400).json({ error: "error" });
  }
});

// DELETE
greenscores.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedGreenscore = await deleteGreenscore(id);
  if (deletedGreenscore.id) {
    res.status(200).json(deletedGreenscore);
  } else {
    res.status(404).json("Greenscore not found");
  }
});

// UPDATE
greenscores.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedGreenscore = await updateGreenscore(id, req.body);
  res.status(200).json(updatedGreenscore);
});

module.exports = greenscores;
