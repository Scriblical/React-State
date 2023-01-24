import './App.css';
import { useState} from "react";


function App() {
    const [name, setName] = useState({firstName: 'Chuck'});
    const [age, setAge] = useState(0);

    const handleClick    = () => {
        setName({firstName: 'Chuck'});
        setAge(age + 1);

    }

  return (
    <div className="App">
        <h1>My name is {name['firstName']}</h1>
        <h1>I like to count. {age + 1}</h1>
        <button onClick={handleClick}>Click me</button>
    </div>

  );
}

export default App;