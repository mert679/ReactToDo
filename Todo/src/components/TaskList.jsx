import TaskShow from "./TaskShow";

function TaskList({tasks,onDelete, onUpdate}) {
    return(
        // {} bunu html içinde js gömmek için yapılır. .map() functionu array de elemanları tek tek dönderiyor.
        // .map((task)=>{}) bu kodda task array içindeki her bir elemanı temsil ediyor.
        // taskShow style edebilmek için kapsayıcı div name verilir
        <div className="task-list">        
        
            {tasks.map((task,index)=>{
                return (
                    <TaskShow key={index} task = {task} onDelete={onDelete} onUpdate={onUpdate} />
                )
            })}
        </div>
    )    
}

export default TaskList;