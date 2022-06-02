import './App.css'
import {Main} from "./components/Main/Main";
import {pageData} from "./data/data";

function App() {
  return (
    <div className="App" id={'appRoot'} style={{height: '100vh', width: '100vw'}}>
      <Main pageData={pageData}/>
    </div>
  )
}

export default App
