import './App.css';
import TaskProvider from './contexts/GlobalState';

//importing components
import Stages from './components/Stages/Stages';

export const STAGE_NAMES = ["Backlog", "To Do", "Ongoing", "Done"];

export const FAKE_TASKS = [
  {
    task: 'Backlog Task 1',
    taskID: 0
  },
  {
    task: 'Backlog Task 2',
    taskID: 0
  },
  {
    task: 'To-Do Task 3',
    taskID: 1
  },
  {
    task: 'Ongoing Task 4',
    taskID: 2
  },
  {
    task: 'Completed Task 5',
    taskID: 3
  }
]

const AppStyle = {
  width: '90%',
  margin: '0 auto'
}

const StagesStyle = {
  display: 'flex',
  justifyContent: 'space-between'
}

function App() {
  localStorage.setItem('Task', JSON.stringify(FAKE_TASKS))
  //console.log(JSON.parse(localStorage.getItem('Task')))
  return (
    <div style={ AppStyle } className="App">
      <h1>Kanban Board</h1>
      <TaskProvider>
        <div style = { StagesStyle }>
          {
            STAGE_NAMES.map((stage, index) => {
              return (
                <Stages key={index} name={stage} stageId={index}/>
              )
            })
          }
        </div>
      </TaskProvider>
    </div>
  );
}

export default App;
