import React, { Component } from 'react'
import Head from './head';
import Input from './input';
import Cards from './cards';

export default class Crud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
    this.url = 'http://localhost:7777/notes';
    this.delData = this.delData.bind(this);
    this.sendData = this.sendData.bind(this);
    this.loadData = this.loadData.bind(this);
  }

  loadData() {
    fetch(this.url)
      .then(res => res.json())
      .then(data => {
        this.setState({ cards: [...data] });
      })
  }

  componentDidMount() {
    this.loadData();
  }

  sendData(data) {
    fetch(this.url, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "id": 0,
        "content": data
      })
    }).then(this.loadData)
  }

  delData(id) {
    fetch(`${this.url}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(this.loadData);
  }

  handler(params) {
    this.loadData();
  }

  render() {
    return (
      <>
        <Head handlerUpdate={this.handler} />
        <Cards cards={this.state.cards} onDelete={this.delData} />
        <Input sendMessage={this.sendData} />
      </>
    )
  }
}