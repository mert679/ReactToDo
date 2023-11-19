import { useState } from 'react'
import './App.css'

import TaskCreate from "./components/TaskCreate"
import TaskList from "./components/TaskList"

function App() {

  // setTasks ile eski taskı update ediyorum. yani eklenen tüm değerler tasks da
  const [tasks, setTasks] = useState([])
  
  function createTask(title,task_description) {
    // eski taskları alıp ayrı olarak obj olarak yeni task oluştuğunda bunu create ediyorum. .push()methodu yerine kullanıldı.
    const createdTask =[
      ...tasks,{
        id: Math.round(Math.random()*9999999),
        title:title,
        task_description:task_description,
      }
    ]
    setTasks(createdTask)// yeni tasklarım bunlar olduğunu gösteriyorum.
  
  }
  function deletebyTaskId(id) {
    const afterDeleteTask = tasks.filter((task)=>{
      if (task.id !== id){
        return task;
      }
    })
    setTasks(afterDeleteTask)
  }
  function editTaskById(id,updatedTitle,updatedTaskDesc) {
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
