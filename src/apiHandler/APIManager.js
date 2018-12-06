export default class APIManager {
  get(URL,resource,id) {
    return fetch(`${URL}/${resource}/${id}`).then(data => data.json())
  }

  all(URL,search) {
    return fetch(`${URL}/${search}`).then(data => data.json())
  }

  delete(URL,resource,id) {
    return fetch(`${URL}/${resource}/${id}`, {method: "DELETE"}).then(data => data.json())
  }
  patch(payload, url) {
    return fetch(`${url}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }).then(data => data.json())
  }
}
