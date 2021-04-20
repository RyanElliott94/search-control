import { useState } from 'react';
import './App.css';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const dummyArray = [
    "Random search term",
    "Hi, My name is Ryan, search for me here",
    "Search for gardeners"
  ];

  const handleSearchBar = e => {
    if(e.target.value.length > 3) {
      setSearchResults(dummyArray.filter(val => val.includes(e.target.value)));
    }else{
      setSearchResults([]);
    }
  }

  return (
    <div className="App">
      <div className="search-inside">
      <div className="form-group">
       <label htmlFor="search-bar">Search</label>
       <input type="text" onChange={handleSearchBar} placeholder="Type something...." id="search-bar"></input>
     </div>
     <div className="search-results">
       <ul>
         {searchResults.map((item, key) => {
           return <li key={key}>{item}</li>
         })}
       </ul>
     </div>
      </div>
    </div>
  );
}

export default App;
