import React, { Component } from 'react';
import './Item.scss';

class Item extends Component {
    constructor(props) {
        super(props);
       
    }
    render() {
        const { image, date, author, description, title } = this.props.data;
        return (<div className="item">
            <p>{title}</p>
            <img src={image} />
            <p>Author: <span>{author}</span></p>
            <p>Date: <span>{new Date(date).toDateString()}</span></p>
            <p>Description: <span>{description}</span></p>
        </div>)
    }
}

export default Item;