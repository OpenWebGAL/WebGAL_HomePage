import './App.css'
import TopNav from "./components/TopNav/TopNav";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Index from "./pages";

const router = createBrowserRouter([
  {
    path: "/app",
    element: <div>Hello world!</div>,
  },
  {
    path: "/",
    element: <Index/>
  }
]);

function App() {
  return (
    <div className="App" id={'appRoot'} style={{height: '100vh', width: '100vw'}}>
      <TopNav/>
      <main className={'main'}>
        <RouterProvider router={router}/>
      </main>
    </div>
  )
}

export default App
