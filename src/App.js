import './App.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState,useEffect } from 'react';

function App() {
  let data = ["poxos",12,1,1]

  const [percentage,setPercentage] = useState(0);

  useEffect(()=>{
    if(data.length){
      return setPercentage(data.length * 10)
    }
  },[])

  return (
    <div className="App">
        <CircularProgressbar value={percentage} text={`${percentage}%`} className="progressBar" />
    </div>
  );
}

export default App;
