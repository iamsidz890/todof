import React , {useState , useEffect} from 'react';
import {Button, FormControl, Input, InputLabel} from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos , settodos] = useState([]);  //todos is basically a array..app loads listen to database  and fech new todo as they get add/remove
  // console.log(todos);
  // to remember what we wtyped..
  const [input , setinput] = useState(''); //cant type..


  useEffect(()=>{
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      settodos(snapshot.docs.map(doc=>({id:doc.id , todo:doc.data().todo})))
    })
  },[]);


  const addToDo = (e) => {
    // alert('wassup');
    e.preventDefault(); //stop refreshing...

    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    settodos([...todos,input]);
    setinput('');  //clear up the input..
  }
  return (
    <div className="App">
    <h1>A ToDo React application by SIDDHARTH SINGH</h1>
        <form>
             

             <FormControl>
               <InputLabel>Write a TODO</InputLabel>
               <Input value={input} onChange={e=>setinput(e.target.value)}/>
             </FormControl>


       <Button disabled={!input} variant="contained" color="primary" onClick={addToDo}>
                 Add ToDo
      </Button>

       {/* with submit it will refresh... */}
        </form>
      

       <ul>
       {todos.map(todo=>(
         <Todo todo={todo}/>
       ))}
         {/* <li></li>
          <li> </li> */}
       </ul>
    </div>
  );
}

export default App;
