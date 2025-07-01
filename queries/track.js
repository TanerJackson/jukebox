import db from "../db/client.js";

export async function createTrack(name, duration_ms) {
  const {
    rows: [track],
  } = await db.query(
    `INSERT INTO tracks (name, duration_ms)
     VALUES ($1, $2)
     RETURNING *`,
    [name, duration_ms]
  );
  return track;
}
