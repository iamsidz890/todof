
import React from 'react'
import {List ,Button ,  ListItem ,ListItemText} from '@material-ui/core';
import './Todo.css';
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Todo(props) {
    return (
        <>
      <List className='list'>
          <ListItem className='list__item'>
          <ListItemText primary={props.todo.todo} secondary='Dummy deadline'/>
          </ListItem>
          
         <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}/>
      </List>
      </>
    )
}

export default Todo
