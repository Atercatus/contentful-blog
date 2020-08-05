const client = require("contentful").createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

client.sync({ initial: true });

export async function fetchEntries(query) {
  const result = await client.getEntries(query);
  const { items, total } = result;

  if (items) return { entries: items, total };

  console.log(`Error getting Entries for ${contentType.name}`);
}

export async function fetchEntry(id, query = "") {
  const entry = await client.getEntry(id, query);

  return entry;
}
