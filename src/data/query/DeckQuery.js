import runSql from "../utils/runSql"
import selectSql from "../utils/selectSql"

export default {
  create: async (dbConn, deckName, deckDescription, icon, userId) => {
    const sql = `
      INSERT INTO deck (d_u_id, d_name, d_description, d_icon, d_favourite, d_created_dt)
      VALUES (?,?,?,?,0, datetime('now'));
    `
    const params = [userId, deckName, deckDescription, icon]

    const {insertId} = await runSql(dbConn, sql, params)

    return insertId
  },
  delete: async (dbConn, deckId) => {
    const sql = `DELETE FROM deck WHERE d_id = ?`
    const params = [deckId]

    await runSql(dbConn, sql, params)
  },
  update: async (dbConn, deckId, deckName, deckDescription, icon) => {
    const sql = `
      UPDATE deck SET
        d_name = ?,
        d_description = ?,
        d_icon = ?
      WHERE d_id = ?;
    `
    const params = [deckName, deckDescription, icon, deckId]

    await runSql(dbConn, sql, params)
  },
  getMyDecks: async (dbConn) => {
    const sql = `SELECT * FROM deck WHERE d_u_id = 1`

    const rows = await selectSql(dbConn, sql, [])

    return rows
  },
  favouriteDeck: async (dbConn, deckId, favourite) => {
    const sql =  `UPDATE deck SET d_favourite = ? WHERE d_id = ?;`
    const params = [favourite, deckId]

    await runSql(dbConn, sql, params)
  },
  getSuggestedDecks: async (dbConn) => {
    const sql = `SELECT * FROM deck WHERE d_u_id != 1`

    const rows = await selectSql(dbConn, sql, [])

    return rows
  },
  getFavouriteDecks: async (dbConn) => {
    const sql = `SELECT * FROM deck WHERE d_favourite = 1`

    const rows = await selectSql(dbConn, sql, [])

    return rows
  }
}