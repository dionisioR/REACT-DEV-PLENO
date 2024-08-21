import './App.css'
import axios from 'axios'
axios.get('https://mymoney-rd3w-01-default-rtdb.firebaseio.com/valor.json')
  .then(res => console.log(res.data))
function App() {

  return (
    <div>
        <h1>My Money</h1>
    </div>
  )
}

export default App
