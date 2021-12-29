import './App.css';

//importing components
import Stages from './components/Stages/Stages';

export const STAGE_NAMES = ["Backlog", "To Do", "Ongoing", "Done"];

export const FAKE_TASKS = [
  {
    task: 'Move Kanban into To Do',
    taskID: 0
  },
  {
    task: 'Work on Kanban Board Design',
    taskID: 0
  },
  {
    task: 'Work on Kanban Board',
    taskID: 1
  },
  {
    task: 'Kanban Board',
    taskID: 2
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
  return (
    <div style={ AppStyle } className="App">
      <h1>Kanban Board</h1>
      <div style = { StagesStyle }>
        {
          STAGE_NAMES.map((stage, index) => {
            return (
              <Stages key={index} name={stage} stageId={index}/>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
