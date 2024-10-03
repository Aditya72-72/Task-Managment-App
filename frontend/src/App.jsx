import './App.css'
import Navbar from './components/navbar/Navbar'
import TaskRoutes from './Routes/TaskRoutes'

function App() {

  return (
    <>
      <div className="mainContainer">
        <div className="route-box">
          <TaskRoutes />
        </div>

      </div>
    </>
  )
}

export default App
