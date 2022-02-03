export default {
  create: `
    CREATE TABLE IF NOT EXISTS card (
      c_id INTEGER PRIMARY KEY,
      c_d_id INTEGER,
      c_question TEXT,
      c_answer TEXT
    );
  `,
  delete: `
    DROP TABLE IF EXISTS card;
  `
}