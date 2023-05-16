import React, {useState} from "react";

function ConfirmButtonFunction (props) {
    const [isConfirmed, setIsConfirmed] = useState(false);
 
    const handleConfirm = () => {
        setIsConfirmed((prevState) => !prevState);
        popAlert();
    };
    
    const popAlert = () => {
        alert("확인 완료!");
    }

    return (
            <button
            onClick={handleConfirm}
            disabled={isConfirmed}
            >
                {isConfirmed ? "확인됨" : "확인하기"}
            </button>
    ) 
}

export default ConfirmButtonFunction;