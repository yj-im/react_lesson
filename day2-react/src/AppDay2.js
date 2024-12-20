import './App.css'
import Calculate from './component/Calculate'
import CalculateV2 from './component/CalculateV2'
import InputState from './component/InputState'
import PageMove from './component/PageMove'
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
            <CalculateV2/>
            <hr/>
            <PageMove last={8}/>
        </div>

    )
}

export default App