import React from "react";

function Box(props) {

    const [count, setCount] = React.useState(props.number);

    return (
        <div>
            <h1>{props.name}</h1>
            <button onClick={()=>setCount(count+5)}>Click Me</button>
            <p>{count}</p>
        </div>
    )
}

export default Box