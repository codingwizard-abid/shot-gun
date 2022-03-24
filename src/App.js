import { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card/Card';
import Navbar from './Components/Navbar/Navbar';


function App() {
  const [guns, setGuns] = useState([]);

  useEffect(()=>{
    fetch('guns.json')
    .then(res => res.json())
    .then(data => setGuns(data));
  }, [])

  return (
    <div className="App">
      <Navbar/>
      <div className='card-container'>
        {
          guns.map(gun => <Card key={gun.id} guns={gun}></Card>)
        }
      </div>
    </div>
  );
}

export default App;
