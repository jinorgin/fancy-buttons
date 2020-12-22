import { useState } from "react";

function LightSwitchButton(props){
    //const [light, setLight] = useState("off")

    const light = props.light
    const switchLight = props.switchLight

    const handleClick = function(){
        switchLight()
    }
    
    return (
        <button onClick={handleClick}  className="LightSwitchButton">
            {light === "on" && <span className="on"><i>💡</i>I'm on</span>}
            {light === "off" && <span className="off"><i>💡</i>I'm off</span>}
        </button>
    )

}

export default LightSwitchButton