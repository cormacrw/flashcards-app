import runSql from "../utils/runSql"
import selectSql from "../utils/selectSql"

export default {
  create: async (dbConn, deckId, question, answer) => {
    const sql = `
      INSERT INTO card (c_d_id, c_question, c_answer)
      VALUES (?,?,?);
    `
    const params = [deckId, question, answer]

    const {insertId} = await runSql(dbConn, sql, params)

    return insertId
  },
  delete: async (dbConn, deckId) => {
    const sql = `DELETE FROM card WHERE c_d_id = ?`
    const params = [deckId]

    await runSql(dbConn, sql, params)
  },
  update: async (dbConn, cardId, question, answer) => {
    const sql = `
      UPDATE card SET
        c_question = ?,
        c_answer = ?
      WHERE c_id = ?;
    `
    const params = [question, answer, cardId]

    await runSql(dbConn, sql, params)
  },
  getCards: async (dbConn, deckId) => {
    const sql = `SELECT * FROM card WHERE c_d_id = ?;`
    const params = [deckId]

    const result = await selectSql(dbConn, sql, params)

    return result
  }
}