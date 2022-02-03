import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true)
SQLite.enablePromise(true)

export default class Datasource {

  static datasource

  static async getDatasource() {
    if(!this.datasource) {
      try{
        await this.connect()   
      } catch(e) {
        console.error(e)
      }
    }

    return this.datasource
  }

  static async connect() {
    return new Promise((res, rej) => {
      SQLite.openDatabase({
        name: 'flash-db',
        location: 'default'
      },
      (db) => {
        this.datasource = db
        res()
      },
      (err) => rej(err)
      )
    })
  }
}