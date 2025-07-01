import db from "../db/client.js";

export async function addTrackToPlaylist(playlist_id, track_id) {
  const {
    rows: [entry],
  } = await db.query(
    `INSERT INTO playlists_tracks (playlist_id, track_id)
     VALUES ($1, $2)
     ON CONFLICT DO NOTHING
     RETURNING *`,
    [playlist_id, track_id]
  );
  return entry;
}
