import React from "react"
//import styles from "./TodoItem.module.css"
import {StyleSheet} from 'react';

class TodoItem extends React.Component {

  state = {
    editing: false
  }

  handleEditing = () => {
    this.setState({
      editing: true
    })
  } 

  handleUpdatedDone = (event) => {
    if (event.key === "Enter" ) {
      this.setState({ editing: false });
    }
  }

  componentWillUnmount() {
    console.log("Cleaning up...")
  }
    
  render() {

    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }


    const { completed, id, title } = this.props.todo
    
    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    return (
      <li className style={{ justifyContent: 'center', alignItems: 'center' }} >
        <div onDoubleClick={this.handleEditing} >
          <input 
            type="checkbox" 
            checked={completed}  
            onChange={() => this.props.handleChangeProps(id)}
          />
          <span style={completed ? completedStyle : null} >{title}</span>
          <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
        </div>
        <input 
          type="text" 
          style={editMode} 
          value={title} 
          onChange={(e)=> {this.props.setUpdate(e.target.value, id)}}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    )
  }
}


export default TodoItem