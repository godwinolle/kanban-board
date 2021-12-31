import { Button, Icon } from "@blueprintjs/core";
import { useContext } from "react";
import { TaskContext } from "../../contexts/GlobalState";

const SelectedTaskOptionsStyle = {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'space-around'
}

const IconStyle = {
    marginRight: '1px',
    color: '#FFF'
}

const DeleteIconStyle = {
    backgroundColor: '#DB3737',
    color: '#FFF'
}

const ForwardAndBackIconStyle = {
    backgroundColor: '#137CBD',
    color: '#FFF'
}


const CheckStageNameForOptions = ({ stageId, taskSelected }) => {
    let { deleteItemFromArray, forwardItemIntoNewGroup, backwardItemIntoPreviousGroup } = useContext(TaskContext);

    const deleteItem = () => {
        deleteItemFromArray(taskSelected)
    }

    const forwardItem = () => {
        forwardItemIntoNewGroup(taskSelected)
    }

    const backwardItem = () => {
        backwardItemIntoPreviousGroup(taskSelected)
    }

    if(stageId === 0)  {
        //console.log('Stage 1')
        return (
            <div style={ SelectedTaskOptionsStyle }>
                <Button onClick={ forwardItem } style={ ForwardAndBackIconStyle }><Icon icon="step-forward" style={ IconStyle }/> Forward</Button>
                <Button onClick={ deleteItem } style={ DeleteIconStyle }><Icon icon="cross" style={ IconStyle }/>Delete</Button>
            </div>
        )
    } else if(stageId === 3) {
        //console.log('Stage 4')
        return (
            <div style={ SelectedTaskOptionsStyle }>
                <Button style={ ForwardAndBackIconStyle }><Icon icon="step-backward" style={ IconStyle }/> Back</Button>
                <Button onClick={ deleteItem } style={ DeleteIconStyle }><Icon icon="cross" style={ IconStyle }/> Delete</Button>
            </div>
        )
    } 
    return (
        <div style={ SelectedTaskOptionsStyle }>
            <Button onClick={ backwardItem } style={ ForwardAndBackIconStyle }><Icon icon="step-backward" style={ IconStyle }/> Back</Button>
            <Button onClick={ forwardItem } style={ ForwardAndBackIconStyle }><Icon icon="step-forward" style={ IconStyle }/> Forward</Button>
            <Button onClick={ deleteItem } style={ DeleteIconStyle }><Icon icon="cross" style={ IconStyle }/>Delete</Button>
        </div>
    )
}

export default CheckStageNameForOptions;