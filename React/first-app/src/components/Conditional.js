import React, { useState } from 'react';
import Counter from './Counter.js';
import Timer from './Timer.js';
import Greet from './Greet.js';

function Conditional() {
    const [isUpdated, setIsUpdated] = useState(false);
    const [isUpdated2, setIsUpdated2] = useState(false);

    const handleShowCounter = () => {
        setIsUpdated(true);
    };

    const handleShowGreet = () => {
        setIsUpdated2(true);
    };

    return (
        <main>
            {isUpdated ? <Counter /> : isUpdated2 ? <Greet /> : <Timer />}
            <button onClick={handleShowCounter}>Show Counter</button>
            <button onClick={handleShowGreet}>Show Greet</button>
        </main>
    );
}

export default Conditional;