import React, { useReducer } from 'react'
function reducer(state,dispatch) {
    if (dispatch.type === 'Increment') {
        
    } else if(dispatch.type) {
        
    }
}
const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, 0)
return <>
<h1>{state}</h1>
<button onClick={()=>dispatch({type:Increment})}>Increment</button>
<button onClick={()=>dispatch({type:Decrement})}>Increment</button>
</>
}

export default UseReducer
