import React, {useState} from "react"

const App = () =>{
    const [counter , setCounter] = useState(0)
    return(
        <div>
            Mohammad
            <h1>Shishegar</h1>
            {counter}
        </div>
    )
}
export default  App