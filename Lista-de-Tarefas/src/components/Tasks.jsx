const Tasks = ({ tasks, onDeleteTasksClick, onCompleteTasksClick }) => {
  return (
    <div className="tasks" style={{textDecoration: tasks.isCompleted ? "line-through" : ""}}>
      <div className="content">
        <p>{tasks.text}</p>
        <p className="category">({tasks.category})</p>
      </div>

      <div>
        <button className="complete" onClick={() => onCompleteTasksClick(tasks.id)}>Completar</button>
        <button className="remove" onClick={() => onDeleteTasksClick(tasks.id)}>x</button>
      </div>

    </div>
  )
}

export default Tasks