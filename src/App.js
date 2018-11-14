import React, { Component } from 'react'
import { Background, Card, Title, Input, Form, List, Item, Button } from './lib'
import { getAllItems, createItem, deleteItem } from './services/index'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      list: []
    }
  }

  async componentDidMount () {
    const list = await getAllItems()

    if (list) {
      this.setState({ list: list.data })
    }
  }

  async onSubmit (event) {
    event.preventDefault()

    const form = event.target
    const inputItem = form.item.value

    if (inputItem) {
      await createItem(inputItem)
      const list = await getAllItems()
      // this.setState({
      //   list: [
      //     ...this.state.list,
      // new item
      //   ]
      // })
      this.setState({
        list: list.data
      })

      form.reset()
    }
  }

  async onDelete (item) {
    const newList = [...this.state.list].filter((i) => i.id !== item.id)
    await deleteItem(item.id)
    this.setState({ list: newList })
  }

  render () {
    const { list } = this.state

    return (
      <Background>
        <Card>
          <Title color='black'> to do </Title>
          <Form onSubmit={this.onSubmit.bind(this)}>
            <Input type='text' name='item' autoFocus />
          </Form>
          <List>
            {
              list.map((item, i) =>
                <Item key={i} color='black'
                >{item.text}<Button onClick={() => this.onDelete(item)}>X</Button></Item>
              )
            }
          </List>
        </Card>
      </Background>
    )
  }
}
