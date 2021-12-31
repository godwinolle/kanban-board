
const TaskGroupStyle = {
    marginTop: '20px',
    textAlign: 'start',
    backgroundColor: '#FFF',
    borderRadius: '4px',
    cursor: 'default'
}

const TaskStyle = {
    padding: '10px ',
}

//handleEvent is for the function that selects the function
//task is the description of certain task
const Task = ({ task, handleEvent }) => {
    return(
        <div onClick={ handleEvent }style={ TaskGroupStyle }>
            <p style={ TaskStyle }>{ task }</p>
        </div>
    )
}

export default Task;