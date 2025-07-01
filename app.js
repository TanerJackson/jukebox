import express from "express";
const app = express();
import tracksRouter from "./trackRouter.js";
import playlistRouter from "./playlistRouter.js";
app.use("/tracks", tracksRouter);
app.use("/playlists", playlistRouter);

export default app;
