
const remoteURL = "http://localhost:8088"

export default class APIManager {
  constructor(resource) {
    this.resource = resource
  }

  get(id) {
    return fetch(`${remoteURL}/${this.resource}/${id}`).then(data => data.json())
  }

  all() {
    console.log("resource", this.resource)
    return fetch(`${remoteURL}/${this.resource}`).then(data => data.json())
  }

  allCards(id) {
    console.log("resource", this.resource)
    return fetch(`${remoteURL}/${this.resource}/?user_id=${id}`).then(data => data.json())
  }
  delete(id) {
    return fetch(`${remoteURL}/${this.resource}/${id}`, {method: "DELETE"}).then(data => data.json())
  }
}