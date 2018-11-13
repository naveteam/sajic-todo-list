import client from '../provider'

export const getAllItems = () =>
  client.get(`/items`)

export const deleteItem = (id) => {
  client.delete(`/items/${id}`)
}
