import { useState, useContext } from 'react';
import Task from '../Task/Task';
import CheckStageNameForOptions from './CheckStageOptions';
import { Button, Card, Elevation, InputGroup } from "@blueprintjs/core";

import { TaskContext } from '../../contexts/GlobalState';

const StageStyle = {
    width: '23%',
    textAlign: 'center',
    backgroundColor: '#eeeeee'
}

const AddTaskButtonStyle = {
    color: '#FFF',
    marginTop: '20px',
    backgroundColor: '#0D8050'
}

const ConfirmTaskButton = {
    ...AddTaskButtonStyle,
    marginTop: '0'
}

const FormStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px'
}


// const SelectedStyle = {
//     backgroundColor: '#205BF7'
// }

const Stages = ({ name, stageId }) => {
    let { allTask } = useContext(TaskContext);
    const [addTaskToggle, setAddTaskToggle] = useState(null);
    const [selectTaskToggle, setSelectTaskToggle] = useState(null);
    const [newTask, setNewTask] = useState('');
    const [userSelected, setUserSelected] = useState({})

    const handleAddTaskButton = () => {
        setSelectTaskToggle(false);
        setAddTaskToggle(!addTaskToggle)
    }

    const AddTask = (e) => {
        e.preventDefault()
        allTask.push({ task: newTask, taskID: stageId })
        setAddTaskToggle(false);
        setNewTask('');
    }

    const handleSelectTask = (task, taskID) => {
        setSelectTaskToggle(!selectTaskToggle);
        setUserSelected({ task, taskID })
    }

    const stagedTask = allTask.filter(ftask => ftask.taskID === stageId)

    return(
        <Card style={ StageStyle } elevation={Elevation.TWO}>
            <h4>{ name }</h4>
            {
                selectTaskToggle && (
                    <CheckStageNameForOptions stageId={ stageId } taskSelected={ userSelected } />
                )
            }
            {
                stagedTask.map((fTask, index) => {
                   return (
                    <Task handleEvent={ () => handleSelectTask(fTask.task, fTask.taskID) } key={ index } task={ fTask.task } />
                   )
                })
            }
            {
                addTaskToggle ? (
                    <form onSubmit={ AddTask } style={ FormStyle }>
                        <InputGroup placeholder="Task Name" value={ newTask } onChange={ (e)=> setNewTask(e.target.value) }/>
                        <Button type="submit" style={ ConfirmTaskButton }>Confirm</Button>
                    </form>
                ) : (
                    <Button onClick={ handleAddTaskButton } style={ AddTaskButtonStyle }>Add Task</Button>
                )
            }
        </Card>
    )
}

export default Stages