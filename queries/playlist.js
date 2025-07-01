import db from "../client.js";

export async function createPlaylist(name, description) {
  const {
    rows: [playlist],
  } = await db.query(
    `INSERT INTO playlists (name, description)
     VALUES ($1, $2)
     RETURNING *`,
    [name, description]
  );
  return playlist;
}
