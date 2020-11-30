import React, {useState, useEffect, useRef} from "react"

function App() {
    const[value,setValue]=useState('initial');
    const renderCount = useRef(1);
    const inputRef = useRef(null);
    const prevVal = useRef("");

    useEffect(()=>{
        renderCount.current++;
    })
    useEffect(()=>{
        prevVal.current=value;
    },[value])
    //как только меняется знач value

    const focus = () => inputRef.current.focus()
    return (
        <div>
            <h1>Render count: {renderCount.current}</h1>
            <h1>Previous value: {prevVal.current}</h1>
            <input ref={inputRef} value={value} onChange={e=>setValue(e.target.value)}/>
            <button className="btn btn-success" onClick={focus}>Focus</button>
        </div>
    )
        ;
}

export default App;

//useRef испол для получения пред useState

//useRef сохраняет состояние при работе с компонентом, но при этом не вызывает сам рендор