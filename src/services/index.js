import client from '../provider'

export const getAllItems = () =>
  client.get(`/items`)

export const createItem = (input) => {
  client.post(`/items`, input)
}

export const deleteItem = (id) => {
  client.delete(`/items/${id}`)
}
