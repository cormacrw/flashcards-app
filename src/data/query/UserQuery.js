import runSql from "../utils/runSql"

export default {
  create: async (dbConn, firstName, lastName) => {
    const sql = `
      INSERT INTO \`user\` (u_first_name, u_last_name) VALUES (?, ?)
    `
    const params = [firstName, lastName]

    await runSql(dbConn, sql, params)
  }
}