import './App.css'
import Calculate from './component/Calculate'
import InputState from './component/InputState'
import Say from './component/Say'

function App(){

    return(
        <div className="App">
            <h3>Day2 App</h3>
            <Say />
            <hr/>
            <InputState/> 
            <hr/>
            <Calculate/>
            <hr/>
            <spreadop/>
        </div>

    )
}

export default App