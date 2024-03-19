import { useState } from 'react';
import './Button.css'
const Button = () => {
    const [toggle, setToggle] = useState(false);
    const ToggleChange = () => {
        setToggle(!toggle);
    }
    return (
        <div className="toggle-container" onClick={ToggleChange}>
            <div className={`toggle-btn ${!toggle ? "disable" : ""}`}>{toggle ? "ON" : "OF"}</div>
        </div>
    )
}
export default Button;