const remoteURL = "https://api.magicthegathering.io/v1/cards?name="

export default class APIManager {
  constructor(resource) {
    this.resource = resource
  }

  get(cardName) {
    return fetch(`${remoteURL}/${this.resource}/${cardName}`).then(data => data.json())
  }
}