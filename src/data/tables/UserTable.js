export default {
  create: `
    CREATE TABLE IF NOT EXISTS \`user\` (
      u_id INTEGER PRIMARY KEY,
      u_first_name TEXT NOT NULL,
      u_last_name TEXT NOT NULL
    );
  `,
  delete: `
    DROP TABLE IF EXISTS \`user\`;
  `
}