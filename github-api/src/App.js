import { useEffect,useState } from 'react';
import './App.css';
import List from './components/List/List';

function App() {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    const getData = () => {
      fetch('https://api.github.com/users')
        .then((response) => response.json())
        .then(data => setData(data.results))
        .catch((error) => console.error(error));
  }
  getData();
}, []);

  return (
    <div className="App">
      <List data={data} />
    </div>
  );
}

export default App;
