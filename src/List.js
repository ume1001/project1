import React, { Component } from 'react';
import Todo from './Todo';
import './App.css'
 
class List extends Component {
 
  render() {
    const todolist = [];
    for (var i = 0; i < this.props.todolist.length; i++) {
      todolist.push(
        <Todo index={i} title={this.props.todolist[i].title} content={this.props.todolist[i].content} done={this.props.todolist[i].done} setTodoStatus={this.props.setTodoStatus} deleteTodoState={this.props.deleteTodoState} />
      );
    }
 
    return(
       
<div class="list-area">
         
<div class="board">
          <span class="boradName"><h2>TasksBoard</h2></span>
          {todolist}
        </div>
 
      </div>
 
    );
  }
 
};
export default  List;