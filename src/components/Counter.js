import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch({type: 'increment'});
    }

    const decrementHandler = () => {
        dispatch({type: 'decrement'});
    }
    return (
        <div>
            <h1>Counter</h1>
            <p>{counter}</p>
            <button onClick={incrementHandler}>increment</button>
            <button onClick={decrementHandler}>Decrement</button>
        </div>
    );
}


export default Counter;