import React from 'react';
import Box from "./components/Box";
import './App.css';

function App() {

  const [list, setList] = React.useState([
    {
      name:"Bob",
      number:10
    },
    {
      name:"Bobby",
      number:20
    },
    {
      name:"Bobert",
      number:30
    }
  ]);

  const addItem = ()=> {
    let newList = list;
    newList.push({name:"Dum Dum",number:68});
    setList(newList);
  };

  let elements = list.map((it,idx)=>
    <Box key={idx} name={it.name} number={it.number}/>
  );

  return (
    <div className="App">
      <button onClick={addItem}>Add Something</button>
      {elements}
    </div>
  );
}

export default App;
