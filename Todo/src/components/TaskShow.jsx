import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({task, onDelete, onUpdate}) {
    const [update, setUpdate] = useState(false)
    
    function handleDeleteClick() {
        onDelete(task.id)
    }
    function handleUpdateClick() {
        setUpdate(true)
    }
    function handleSubmit(id,updatedTitle,updatedTaskDesc) {
        setUpdate(false)
        onUpdate(id,updatedTitle,updatedTaskDesc)
    }

    return (
        <div className="each-task">
            {update ? (
                    <TaskCreate task = {task} taskFormUpdate={true} onUpdate={handleSubmit}/>
            ):
            (
                <>
                    <h3>Your Task</h3>
                    <p>{task.title}</p>
                    <h3>Description</h3>
                    <p>{task.task_description}</p>
                    <div className="action-btn">
                        <button className="update-btn" onClick={handleUpdateClick}>Update</button>
                        <button className="delete-btn" onClick={handleDeleteClick}>Delete</button>
                    </div>  
                </>
            )}
            
        </div>
    )
}
export default TaskShow; 