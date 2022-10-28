import logo from './logo.svg';
import './App.css';
import Clicker from './clicker/clicker.js'
import ClickerTwo from './Clicker2/ClickerTwo';


const Hello = (props) => {
  console.log(props)
  const helloe = "Aidan"
  const myVar = "my function"
  const myFunc = () => {
    return "my function"
  }

  return (
    <div>
      <h2>Hello from another functional component to {props.name}!</h2>
      <p>Also. {myFunc()}</p>
      <p>Also also, {myVar}</p>
    </div>
  )
}
function App() {

  const myClassName = "App"
  const myOtherClassName = "ourApp_active"

  // this is already JSX
  return (
    <>

      {<p>Hey</p>}
      <h1>Hello from my own first React app</h1>
      <Clicker />
      <ClickerTwo />
      <Hello name="David" anotherName="Tuan" />
    </>
  );
}

export default App;
