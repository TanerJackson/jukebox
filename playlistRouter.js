import express from "express";
import db from "./db/client.js";
const playlistRouter = express.Router();

playlistRouter.get("", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM playlists");
    res.json(result.rows);
  } catch (err) {
    console.log(err);
    res.status(500).json("error");
  }
});

playlistRouter.post;
export default playlistRouter;
