import { createContext, useState } from 'react';
import { FAKE_TASKS } from '../App';

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
    let [allTask, setAllTask] = useState(FAKE_TASKS);
    //let [stagedTask, setStagedTask] = useState(allTask.filter(ftask => ftask.taskID === stageId))

    const deleteItemFromArray = (taskSelected) => {
        console.log('Current Array')
        setAllTask(allTask.filter(task => (task.task !== taskSelected.task)))
    }

    const forwardItemIntoNewGroup = (taskSelected) => {
        for(let i = 0; i < allTask.length; i++){
            if(allTask[i].task === taskSelected.task) {
                allTask[i].taskID = allTask[i].taskID + 1;
            }
        }
    }

    const backwardItemIntoPreviousGroup = (taskSelected) => {
        for(let i = 0; i < allTask.length; i++){
            if(allTask[i].task === taskSelected.task) {
                allTask[i].taskID = allTask[i].taskID - 1;
            }
        }
    }

    return(
        <TaskContext.Provider value={ { allTask, deleteItemFromArray, forwardItemIntoNewGroup, backwardItemIntoPreviousGroup } }>
            { children }
        </TaskContext.Provider>
    )
}

export default TaskProvider;


