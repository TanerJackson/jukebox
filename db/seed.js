import db from "#db/client";
import { faker } from "@faker-js/faker";
import { createTrack } from "#queries/track";
import { createPlaylist } from "#queries/playlist";
import { addTrackToPlaylist } from "#queries/addTrack";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  // TODO
  try {
    for (let i = 0; i < 20; i++) {
      const name = faker.music.songName();
      const duration = faker.number.int({ min: 120000, max: 300000 });
      const track = await createTrack(name, duration);
      tracks.push(track);
    }

    for (let i = 0; i < 10; i++) {
      const name = faker.word.words(2);
      const description = faker.lorem.sentence();
      const playlist = await createPlaylist(name, description);
      playlists.push(playlist);
    }

    const usedPairs = new Set();
    while (usedPairs.size < 15) {
      const playlist = faker.helpers.arrayElement(playlists);
      const track = faker.helpers.arrayElement(tracks);
      const key = `${playlist.id}-${track.id}`;

      if (!usedPairs.has(key)) {
        await addTrackToPlaylist(playlist.id, track.id);
        usedPairs.add(key);
      }
    }

    console.log("Seeding complete.");
  } catch (err) {
    console.error("Seeding error:", err);
  }
}
