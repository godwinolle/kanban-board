import { useState } from 'react';
import Task from '../Task/Task';
import CheckStageNameForOptions from './CheckStageOptions';
import { Button, Card, Elevation, InputGroup } from "@blueprintjs/core";

import { FAKE_TASKS } from '../../App'

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



const forwardTask = () => {

}

// const SelectedStyle = {
//     backgroundColor: '#205BF7'
// }

const Stages = ({ name, stageId }) => {
    const [addTaskToggle, setAddTaskToggle] = useState(null);
    const [selectTask, setSelectTask] = useState(null);
    const [newTask, setNewTask] = useState('');

    const handleAddTaskButton = () => {
        setAddTaskToggle(!addTaskToggle)
    }

    const AddTask = (e) => {
        e.preventDefault();
        FAKE_TASKS.push({ task: newTask, taskID: stageId })
        setAddTaskToggle(false);
        setNewTask('');
    }

    const handleSelectTask = () => {
        setSelectTask(!selectTask);
    }

    const stagedTask = FAKE_TASKS.filter(ftask => ftask.taskID === stageId)



    return(
        <Card style={ StageStyle } elevation={Elevation.TWO}>
            <h4>{ name }</h4>
            {
                selectTask && (
                    <CheckStageNameForOptions stageId={ stageId } />
                )
            }
            {
                stagedTask.map((fTask, index) => {
                   return (
                    <Task handleEvent={ handleSelectTask } key={ index } task={ fTask.task } />
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