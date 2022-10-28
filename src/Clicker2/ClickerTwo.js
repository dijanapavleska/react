import Clicker from "../clicker/clicker";
import { useState } from "react";

const ClickerTwo = () => {

    const [currentCount, setCurrentCount] = useState(0);
    let nonFunctionalCount = 0

    console.log(currentCount)

    const increaseCount = () => {
        nonFunctionalCount++
        console.log('Increasing non-functional count to: ' + currentCount)
        setCurrentCount(currentCount + 1)
    }
    return (
        <button onClick={increaseCount}>Clicked {currentCount} times</button>
    )
}

export default ClickerTwo