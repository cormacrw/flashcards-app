export default {
  create: `
    CREATE TABLE IF NOT EXISTS deck (
      d_id INTEGER PRIMARY KEY,
      d_u_id INTEGER,
      d_name TEXT,
      d_description TEXT,
      d_icon TEXT,
      d_favourite INTEGER,
      d_created_dt TEXT
    );
  `,
  delete: `
    DROP TABLE IF EXISTS deck;
  `
}