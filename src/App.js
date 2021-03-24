
import React , {useState} from 'react';
function App() {
  const [{count,count2},setCount] = useState({count:10,count2:20});
  console.log(count);
  return (
    <div className="App">
      <button onClick={
               () => setCount( currentState =>({...currentState,count:currentState.count+1}))
        }
        >+</button>
      <div>Count1 : { count } </div>
      <div>Count2 : { count2 } </div>
      
    </div>
  );
}

export default App;
