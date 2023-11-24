import { useEffect, useState } from 'react'
import './App.css'

import TaskCreate from "./components/TaskCreate"
import TaskList from "./components/TaskList"
import axios from "axios"

function App() {

  // setTasks ile eski taskı update ediyorum. yani eklenen tüm değerler tasks da
  const [tasks, setTasks] = useState([])
  
  async function createTask(title,task_description) {
    
    const response = await axios.post("http://localhost:3004/tasks",{
      title:title,
      task_description:task_description,
    })

    // eski taskları alıp ayrı olarak obj olarak yeni task oluştuğunda bunu create ediyorum. .push()methodu yerine kullanıldı.
    const createdTask =[
      ...tasks,response.data
    ]
    setTasks(createdTask)// yeni tasklarım bunlar olduğunu gösteriyorum.
  
  }
  async function fetchTask() {
    const response = axios.get("http://localhost:3004/tasks")
    setTasks(response.data)
  }
  
  async function deletebyTaskId(id) {
    await axios.delete(`http://localhost:3004/tasks/${id}`)
    const afterDeleteTask = tasks.filter((task)=>{
      if (task.id !== id){
        return task;
      }
    })
    setTasks(afterDeleteTask)
  }
  async function editTaskById(id,updatedTitle,updatedTaskDesc) {
    await axios.put(`http://localhost:3004/tasks/${id}`,{
      title:updatedTitle,
      task_description:updatedTaskDesc
    })
    const updatedTask = tasks.map((task)=>{
      if (task.id == id){
        return {id:id,title:updatedTitle,task_description:updatedTaskDesc};
      }
      return task
    })
    setTasks(updatedTask)
  }
  return (
    <>
     <TaskCreate onCreate={createTask}/>
     <h1>Görevler</h1>
     <TaskList tasks = {tasks} onDelete={deletebyTaskId} onUpdate={editTaskById} />
    </>
  )
}

export default App
