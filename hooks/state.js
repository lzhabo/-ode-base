import React, {useState} from "react"

function App() {
    const [counter, setCounter] = useState(0);
    //const [counter, setCounter] = useState(()=>{ // вот это вызоветься только один раз }));

    const [state, setState] = useState({
        title: "Counter ",
        date: Date.now()
    })

    function increment() {
        setCounter((prevCounter) => {
            return prevCounter + 1
        })
        //чтобы точно основываться на пред состоянии то нужно использовать prevState
    }

    function decrement() {
        setCounter(counter - 1)
    }

    //for objects
    function updateTitle() {
        setState(prev => {
                return {
                    ...prev,
                    title: "Updated title"
                }
            }
        )
    }

    return (
        <div className="wrapper">
            <h1>Counter: {counter}</h1>
            <button onClick={increment} className='btn btn-success'>Add</button>
            <button onClick={decrement} className='btn btn-danger'>Remove</button>
            <button onClick={updateTitle} className='btn btn-default'>Update title</button>
            {/*<button onClick={() => {setState({title: "new title"})}} className='btn btn-default'>Rename*/}
            {/*</button>*/}
            {/*// если передавать как объект, то полностью он перезаписывается*/}
            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    );
}

export default App;
