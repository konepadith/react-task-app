import { useState,useEffect } from 'react';
import './App.css';
import AddForm from './components/AddForm';
import Header from './components/Header';
import Item from './components/Item';

function App() {
  const [tasks,setTask]=useState(JSON.parse(localStorage.getItem("tasks"))|| [])
  const [title,setTitle]=useState("")
  const [editId,setEditId]=useState(null)
  const [theme,setTheme]=useState("dark")

  // Method 1
  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks])

  const deleteTask=(id)=>{
    setTask(tasks.filter((item)=>item.id !== id))
  }
 

  function editTask(id) {
    setEditId(id)
    const editTask = tasks.find((item)=>item.id === id)
    setTitle(editTask.title)
  }
  
  function saveTask(e){
    e.preventDefault()
    if (!title) {
      alert("input data")
    }else if(editId){
      //update Data
      const updatetask = tasks.map((item)=>{
        if (item.id === editId) {
          return {...item,title:title}
        }
        return item;
      })
      setTask(updatetask)
      setEditId(null)
      setTitle("")
    }else{
      const newtask={
        id:Math.floor(Math.random()*1000),
        title:title
      }
      setTask([...tasks,newtask])
      setTitle("")
    }
  }
  return (
    <div className={"App "+theme}>
      <Header theme={theme} setTheme={setTheme} />
      <div className="container">
        <AddForm title={title} setTitle={setTitle} saveTask={saveTask} editId={editId}/>
        <section>
            {tasks.map((data)=>{
              return <Item key={data.id} data={data} deleteTask={deleteTask} editTask={editTask}/>
            })}
        </section>
      </div>
    </div>
  );
}

export default App;
