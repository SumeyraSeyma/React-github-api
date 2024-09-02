import { useEffect,useState } from 'react';
import './App.css';
import List from './components/List/List';
import './output.css';



function App() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState('');
  
  function debounce(func, wait) {
    let timeout;
  
    return function(...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }
  

    const getData = () => {
      const token = process.env.REACT_APP_GITHUB_TOKEN;
      Promise.all([
      fetch(`https://api.github.com/users/${user}`,{
        headers: {
          'Authorization': `token ${token}`
      }
      }).then((response) => response.json()),
        fetch(`https://api.github.com/users/${user}/repos`,{
        headers: {
          'Authorization': `token ${token}`
      }
      }).then((response) => response.json())
    ]) 
    .then(([userData, userRepos]) => {
      setData({
        ...userData, // Kullanıcı verileri
        repos: userRepos // Repos'ları `data` prop'u içinde birleştiriyoruz
      });
    })
    .catch((error) => console.error('Error fetching data:', error));
  }

  const debouncedGetData = debounce(getData, 5000);

  useEffect(() => {
    if (user) {
      debouncedGetData();
    }
  }, [user]);


  return (
    <div className="App my-10 ">
      <div className='buttons shadow-xl outline outline-offset-2 outline-1 rounded-md h-16 '>
      <input type="text" placeholder="Search for User" onChange={(e) => setUser(e.target.value)} 
      className="input_search outline outline-offset-2 outline-1 rounded-md h-10 w-80 " />
      <button onClick={getData} className="search_button outline outline-offset-2 outline-2 w-40 h-10 rounded-md mx-4 ">Search Github</button>
      </div>
      <List data={data} />
    </div>
  );
}

export default App;
