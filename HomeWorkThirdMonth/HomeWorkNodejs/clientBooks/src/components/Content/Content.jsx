import React, { Component } from 'react';
import './Content.scss';
import Item from './Item';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = { books: null }
    }
    componentDidMount() {
        fetch('http://localhost:6687/books', { method: 'GET' })
            .then((responce) => responce.json())
            .then((data) => {
                this.setState({ books: data })
            })
    }
    createItems() { return this.state.books.map(el => <Item data={el} key={el.id} />) }
    render() {
        return (<div className="content">{this.state.books ? this.createItems() : 'Заглушка'}</div>)
    }
}

export default Content;