const remoteURL = "https://api.magicthegathering.io/v1/cards?name="

export default class CardManager {

  getAll(cardName) {
    return fetch("https://api.magicthegathering.io/v1/cards")
    .then(x => x.json())
  }
}