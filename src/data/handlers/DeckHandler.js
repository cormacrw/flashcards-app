import CardQuery from "../query/CardQuery";
import DeckQuery from "../query/DeckQuery";

/**
 * @CormacWilliamson
 * Class for wrapping entrypoint functions for fetching data from sqlite db
 */
export default class DeckHandler {
  static async createDeck(dbConn, deckName, deckDescription, userId, icon, cards) {
    const deckId = await DeckQuery.create(dbConn, deckName, deckDescription, icon, userId)

    for(let i = 0; i<cards.length; i++) {
      const card = cards[i]
      await CardQuery.create(dbConn, deckId, card.c_question, card.c_answer)
    }

    return deckId
  }

  static async deleteDeck(dbConn, deckId) {
    await DeckQuery.delete(dbConn, deckId)
    await CardQuery.delete(dbConn, deckId)
  }

  static async updateDeck(dbConn, deckId, deckName, deckDescription, icon, cards) {
    await DeckQuery.update(dbConn, deckId, deckName, deckDescription, icon)

    for(let i = 0; i<cards.length; i++) {
      const card = cards[i]
      await CardQuery.update(dbConn, card.c_id, card.c_question, card.c_answer)
    }
  }

  static async getMyDecks(dbConn) {
    const rows = await DeckQuery.getMyDecks(dbConn)

    return rows
  }

  static async getSuggestedDecks(dbConn) {
    const rows = await DeckQuery.getSuggestedDecks(dbConn)

    return rows
  }

  static async getCards(dbConn, deckId) {
    const rows = await CardQuery.getCards(dbConn, deckId)

    return rows
  }

  static async favouriteDeck(dbConn, deckId, favourite) {
    await DeckQuery.favouriteDeck(dbConn, deckId, favourite)
  }

  static async getFavouriteDecks(dbConn) {
    const rows = await DeckQuery.getFavouriteDecks(dbConn)

    return rows
  }
}