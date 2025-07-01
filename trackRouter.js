import express from "express";
import db from "./db/client.js";
const tracksRouter = express.Router();

tracksRouter.get("", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM tracks");
    res.json(result.rows);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error" });
  }
});

tracksRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query("SELECT * WHERE id = $1", [id]);
    res.json(result.rows);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "error" });
  }
});

export default tracksRouter;
