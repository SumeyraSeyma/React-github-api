import { useEffect,useState } from 'react';
import './App.css';
import List from './components/List/List';

function App() {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    const getData = () => {
      fetch('https://api.github.com/users')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => setData(data))
        .catch((error) => console.error('Error fetching data:', error));
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
