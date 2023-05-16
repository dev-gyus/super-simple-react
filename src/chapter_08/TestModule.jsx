import React, {useState, useEffect} from "react"

function TestModule() {
    const [property, setProperty] = useState('기본값');
    const [effectTest, setEffectTest] = useState('');

    const handleClick = () => {
        setProperty((prevProperty) => prevProperty === '클릭함' ? '기본값' : '클릭함');
        setEffectTest((effectTest) => effectTest === '' ? '클릭변경됨' : '');
    }
    
    const handleAlert = (text) => {
        alert(text)
    }

    useEffect(() => handleAlert(effectTest), [effectTest]);

    return (
        <span
        onClick={handleClick}
        >
            {property}
        </span>
    )
}

export default TestModule;