import './App.css';

// const Task = (value) => {
//   return (
//     value.map(task => <li>{task}</li>)
//   );
// }

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const listTask = ['fazer os exercícios do bloco 11.1']
  return (
    <div className="App">
      <header className="App-header">
        {listTask.map(task => <ul>{Task(task)}</ul>)}
      </header>
    </div>
  );
}

export default App;
