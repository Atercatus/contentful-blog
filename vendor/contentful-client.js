const client = require("contentful").createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function fetchEntries(query) {
  const entries = await client.getEntries(query);

  if (entries.items) return entries.items;

  console.log(`Error getting Entries for ${contentType.name}`);
}

export async function fetchEntry(id, query = "") {
  const entry = await client.getEntry(id, query);

  return entry;
}
