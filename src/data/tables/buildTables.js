import Datasource from "../Datasource"
import runSql from "../utils/runSql"
import CardTable from "./CardTable"
import DeckTable from "./DeckTable"
import UserTable from "./UserTable"


export default async () => {
  const dbConn = await Datasource.getDatasource()

  await runSql(dbConn, UserTable.delete, [])
  await runSql(dbConn, UserTable.create, [])
  
  await runSql(dbConn, DeckTable.delete, [])
  await runSql(dbConn, DeckTable.create, [])
  
  await runSql(dbConn, CardTable.delete, [])
  await runSql(dbConn, CardTable.create, [])
}