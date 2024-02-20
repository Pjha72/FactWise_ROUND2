import logo from './logo.svg';
import './App.css';
import ListUsers from './components/ListUsers';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Question 1</h1>
        <ListUsers users={[{firstName: 'Pawan', lastName: 'Jha'}, {firstName: 'Rahul',lastName: 'Singh'},
      {firstName : 'Aman', lastName: 'Jaiswal'}]}/>
      </header>
    </div>
  );
}

export default App;
