import { useSelector, useDispatch } from "react-redux"; //to call function we need usedispatch
import { increment, decrement, reset } from "./store/Slices/ReduxCounterslice";
function ReduxCounter() //component
{
    const value=useSelector((state)=>state.ReduxCounter.count)
    const action=useSelector((state)=>state.ReduxCounter.performedaction)
    const dispatch = useDispatch(); //hook
    function increseValue() {
        dispatch(increment("increment")); //to call a function we need to use dispatch
    }
    function decreseValue() {
        dispatch(decrement("decrement"));
    }
    function resetValue() {
        dispatch(reset("reset"));
    }
    
    return(
        <>
        <h1>Redux Counter Component</h1>
        <h1 style={{fontSize:"100px", textAlign:"center", color:"blue"}}>
            {value}
        </h1>
        <h2 style={{textAlign:"center", color:"blue"}}>
            PerformedAction:{action}
        </h2>
        <div style={{display:"flex",justifyContent:"center",gap:"10px"}}>
        <button onClick={increseValue}>increment</button>
        <button onClick={decreseValue}>decrement</button>
        <button onClick={resetValue}>reset</button>  
        </div>
        </>
    )
}

export default ReduxCounter;