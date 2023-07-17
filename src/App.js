import { Sprint } from './components/Sprint';
import { Event } from './components/Event';
import { Spikes } from './components/Spikes';
import { Task } from './components/Task';
import { Memb } from './components/Memb';
import {Teams} from './components/Teams';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='Squares'>
      <Teams />
      <Memb />
      <Task />
      <Spikes/>
      <Event/>
      </div>
      <Sprint/>
    </div>
  );
}

export default App;
