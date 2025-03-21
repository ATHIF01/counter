
import './App.css'
import Counter from './Counter'

function App() {


  return (
    <>
    <div className='d-flex align-items-center justify-content-center w-100 flex-column' style={{height:'100vh'}}>
      <div className='d-flex justify-content-center align-items-center p-5 rounded flex-column' style={{backgroundColor:"white"}}>
    <h2 className='text-primary'>COUNTER APPLICATION</h2>
    <Counter/>
    </div>
    </div>  
    </>
  )
}

export default App
