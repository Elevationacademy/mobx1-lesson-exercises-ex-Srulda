import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
    checkItem = () => {
        //your code here
      }
      editItem = () => {
        //your code here
      }
      deleteItem = () => {
        //your code here
      }
    render() {
      let item = this.props.item
        return (
            <div className = "item">
      <input type="checkbox" /> {item.name} &nbsp; {item.location} &nbsp;
      <button className = "editButton"><i className="far fa-edit"></i></button>
      <button><i className="fas fa-trash-alt"></i></button>
            </div>)
    }
}

export default Item
