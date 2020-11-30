import React, {useState, useEffect} from "react"

function App() {
    const [type, setType] = useState('users');
    const [data, setData] = useState([]);
    const [pos, setPos] = useState({x: 0, y: 0});

    useEffect(() => {
        //вызывается каждый раз когда выполн рендер компоненты
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))


        return()=>{
            console.log("clean type")
        }
    }, [type])

    //служит для определенных сайт эффектов


    const mouseMoveHandler = event => {
        setPos({x: event.clientX, y: event.clientY})
    }


    useEffect(() => {
        //любые слушатели что доб нужно удалять
        window.addEventListener('mousemove', mouseMoveHandler)
        return () =>
        {
            window.removeEventListener('mousemove', mouseMoveHandler);
        }
    }, [])
    return (
        <div>
            <h1>Resourse: {type}</h1>
            <button onClick={() => setType('users')}>Users</button>
            <button onClick={() => setType('posts')}>Posts</button>
            <button onClick={() => setType('todos')}>ToDos</button>

            {/*<pre>{JSON.stringify(data,null,2)}</pre>*/}
            <pre>{JSON.stringify(pos, null, 2)}</pre>
        </div>
    );
}

export default App;
