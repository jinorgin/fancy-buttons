import { useState } from "react";

function TextRepeaterButton(props){
    const [repetitions, setRepetitions] = useState(1)
    const textArray = []
    const textAmount = 10; //back up


    for (let i = 0; i < repetitions; i++){
        textArray.push(<span key={i}>I like this text</span>)
    }

    const handleClick = function(){setRepetitions(repetitions + 1)}

    return (
        <button onClick={handleClick}  className="TextRepeaterButton">
            {textArray}
        </button>
    )

}

export default TextRepeaterButton