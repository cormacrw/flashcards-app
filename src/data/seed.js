import Datasource from "./Datasource"
import DeckHandler from "./handlers/DeckHandler"
import UserQuery from "./query/UserQuery"
import decks from "./seed/decks"
import buildTables from './tables/buildTables'

export default async () => {
  const dbConn = await Datasource.getDatasource()

  // CREATE TABLES
  await buildTables()

  // POPULATE USER
  await UserQuery.create(dbConn, 'Cormac', 'Williamson')
  await UserQuery.create(dbConn, 'Ringo', 'Starr')
  await UserQuery.create(dbConn, 'John', 'Lennon')

  for(let i = 0; i<decks.length; i++) {
    const deck = decks[i]

    await DeckHandler.createDeck(dbConn, deck.deckName, deck.deckDescription, deck.userId, deck.icon, deck.cards)
  }
}