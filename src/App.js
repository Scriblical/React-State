import './App.css';
import { useState} from "react";


function App() {

    const [age, setAge] = useState(0);

    const handleClick    = () => {

        setAge(age + 1);

    }

  return (
    <div className="App">

        <h1>I like to count: {age + 1}</h1>
        <button onClick={handleClick}>Click me to + 1</button>
    </div>

  );
}

export default App;