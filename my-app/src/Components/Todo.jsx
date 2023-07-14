import React from 'react'
import "./todo.css"
import { useState } from 'react';

const Todo = () => {

    const [tasks,setTasks]=useState([]); //it will store the list of tasks and initially it will be an empty array

    const [newTask,setNewTask]=useState(''); 
    // it will store the new value of tasks which will be written in input and intially it will be an empty string


    // add task functionality
    const addTask=()=>{

      if (newTask.trim()!=='') {


        setTasks([...tasks,{text:newTask,completed:false}]);

        setNewTask('');

      }


    };
    // it checks if the newTask is not empty then the task add with the text as newTask and initially completed will be false
    // then newTask is added to the tasks array using spread operator and reset the input value.
  
  

    const completeTask=(index)=>{

      const updatedTask=[...tasks];

      updatedTask[index].completed =!updatedTask[index].completed;

      setTasks(updatedTask);

    };
    // it will take index as parameter and update the task by copying task using spread method and completed property compare it and set the newtask
  

    const removeTask=(index)=>{

      const updatedTask=[...tasks];

      updatedTask.splice(index,1);

      setTasks(updatedTask);

    };

    // if we delete something then it will take index as its parameter and copy of tasks array is created using spred operator and splice method delete the task from its index
  
  return (


    <div className="todoapp">

        <h1>ToDo App</h1>

        <div className="task-input">
            {/* Add task */}
                <input
                    type="text"
                    placeholder="Write something in it"

                    value={newTask}

                    onChange={(e)=>setNewTask(e.target.value)}
                />

                <button onClick={addTask}>Add Task</button>

        </div>


{/* showing the list of todo */}

        <div className="task-list">

                {tasks.map((task,index)=>(


                    <div key={index} className={`task ${task.completed?'completed':''}`}  >

                    <div className="task-text" onClick={()=>completeTask(index)} >
                        {task.text}

                    </div>
                    {/* when the task completed just click on it and a line-through drwan over the task */}

                    <button className="remove-btn" onClick={()=>removeTask(index)} >
                        Remove
                    </button>

                    {/* when click on remove button the task will be deleted  */}

                    </div>
                ))}

        </div>

        <div className="task-summary">

                Total tasks : {tasks.length}  |  Completed tasks : {tasks.filter((task)=>task.completed).length}

                {/* here the no. of task and the no. of completed task will show in it */}

        </div>


  </div>
  )
}

export default Todo