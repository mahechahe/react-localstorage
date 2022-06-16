import React from 'react'
import { TaskRow } from './TaskRow'

export const TaskTable = ({tasks, toggleTask, showCompleted = false}) => {

  const tableRows = (doneValue) => {

    return(
        tasks
        .filter(task => task.done === doneValue)
        .map((task, i) => (
            <TaskRow task={task} key={i} toggleTask={toggleTask}></TaskRow>
        ))
    )
  }
    
  return (
    <table className='table table-dark table-striped table-bordered border-secondary'>
        <thead>
          <tr className='table-primary'>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {
            tableRows(showCompleted)
          }
        </tbody>
    </table>
  )
}
