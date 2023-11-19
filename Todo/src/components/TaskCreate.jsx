import { useState } from "react"


function TaskCreate({onCreate,task,taskFormUpdate,onUpdate}) {
    const [task_title,setTitleTask] = useState(task ? task.title:"")
    const [task_description, setDescription] = useState(task ? task.task_description:"");
    
    function handleTitle(event) {
        setTitleTask(event.target.value)
    }
    
    function handleDescription(event) {
        setDescription(event.target.value)
        
    }
    
    function handleClick(event) {
        // sayfanın refresh olmasını engeller 
        event.preventDefault()
        // we got props values and send.
        if(taskFormUpdate){
            debugger
            onUpdate(task.id, task_title, task_description);
        }else{
            onCreate(task_title,task_description)
        }
        
        setTitleTask("")
        setDescription("")
    }
    
    return(
    
        <div>        
            {taskFormUpdate ? 
            <form action="" method="get" className="task-update">
                <h3>Update Task</h3>
                <label htmlFor="">Enter Title</label>
                <input type="text"  onChange={handleTitle} value={task_title}/>
                <label htmlFor="">Enter Task</label>
                <textarea onChange={handleDescription} value={task_description} rows={4}>

                </textarea>
                <div className="btns btn-update" >
                    <button onClick={handleClick} className="">Update Task</button>
                </div>
            </form>
           :
          
             <form action="" method="get" className="wrapper">
                <h3>Please Add Task</h3>
                <label htmlFor="">Enter Title</label>
                <input type="text"  onChange={handleTitle} value={task_title}/>
                <label htmlFor="">Enter Task</label>
                <textarea onChange={handleDescription} value={task_description} rows={4}>

                </textarea>
                <div className="btns">
                    <button onClick={handleClick}>Add Task</button>
                </div>
            </form>}
            
            
        </div>
    )
}

export default TaskCreate