import { Container } from "react-bootstrap";
import Nav from './components/Nav'
import Form from './components/Form'
import { useState } from "react";
import ToDo from "./components/ToDo";


function App() {
  const [toDo, setToDo] = useState()  
  const [toDos, setToDos] = useState([])

  
  const deleteHandler = (id)=>{
    setToDos(toDos.filter((obj)=>{
      return obj.id !== id
    }))
  }
  return (
    <Container>
      <Nav/>
      <Form onChange={(e)=>setToDo(e.target.value)} onClick={()=>setToDos([{id: Date.now(), title: toDo, done: false},...toDos])}/>
      <br/>
      <div>
        {
          toDos.map(({title,id, done})=>{
            return(
              <ToDo key={id} title={title} deleteHandler = {()=>deleteHandler(id)} />
            )
          })
        }
      </div>
    </Container>
  );
}

export default App;
