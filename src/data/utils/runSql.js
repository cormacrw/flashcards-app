export default (dbConn, sql, params) => {
  return new Promise((res, rej) => {
    dbConn.transaction((trans) => {
      trans.executeSql(sql, params, (trans, results) => {
        res(results)
      }, err => rej(err))
    })
  })
}