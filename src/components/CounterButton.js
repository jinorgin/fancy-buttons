import { useState } from "react";

function CounterButton(props){
    const [clickAmount, setClickAmount] = useState(0)
    const count = 0  //back up


    const handleClick = function(){
        setClickAmount(clickAmount + 1)
    }

    return (
        <button onClick={handleClick}  className="AngryButton">
            You clicked me {clickAmount} times
        </button>
    )

}

export default CounterButton