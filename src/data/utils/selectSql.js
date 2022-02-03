export default (dbConn, sql, params) => {
  return new Promise((res, rej) => {
    dbConn.transaction((trans) => {
      trans.executeSql(sql, params, (trans, results) => {
        const rows = []
        for(let i = 0; i < results.rows.length; i++) {
          rows.push(results.rows.item(i))
        }
        res(rows)
      }, err => rej(err))
    })
  })
}