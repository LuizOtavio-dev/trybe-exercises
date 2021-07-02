import './App.css';

const Task = (value) => {
  return (
    value.map(task => <li>{task}</li>)
  );
}

function App() {
  const listTask = ['fazer os exercícios do bloco 11.1']
  return (
    <div className="App">
      <header className="App-header">
        {Task(listTask)}
      </header>
    </div>
  );
}

export default App;
