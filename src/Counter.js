/* eslint-disable */ // 안쓰는 변수에 대해 씀
import { useState, useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) { //type => 속성 // 객체형태
        case 'INCREMENT' : return { value : state.value + 1 };
        case 'DECREMENT' : return { value : state.value - 1 };
        default : return state;
    }
}

function Counter() {
    // const [counter, setValue] = useState(0);
    const [state, dispatch] = useReducer(reducer, {value : 0}); // dispatch = 변화를 주는 곳에

    return (
        <div>
        {/* <p>
            현재 카운터 값은 <b>{ value }</b>입니다.
        </p>
        <button onClick={()=> setValue(Value + 1)}>+1</button>
        <button onClick={()=> setValue(Value - 1)}>-1</button> */}
        <p>
            현재 카운터 값은 <b>{ state.value }</b>입니다.
        </p>
        <button onClick={()=> dispatch({ type: 'INCREMENT' })}>+1</button>
        <button onClick={()=> dispatch({ type: 'DECREMENT' })}>-1</button>
        </div>
    );
}

export default Counter;
