
import APIManager from "./APIManager"

 class CardData extends APIManager{
  getAll(id) {
  return this.allCards(id)
  }
}
export default new CardData("decks")