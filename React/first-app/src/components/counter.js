// // import React, { useState} from "react";

// // function Counter() {
// //   const [count, setCount] = useState(0);
  

// //   function increaseCount() {
// //     setCount(count + 1);
// //   }

// //   function decreaseCount() {
// //     setCount(count - 1);
// //   }

  
// //   return (
// //     <main>
// //       <h1>Likes: {count}</h1>
// //       <button onClick={increaseCount}>Like</button>
// //       <button onClick={decreaseCount}>Dislike</button>
// //     </main>
// //   );
// // }

// // export default Counter;

// import React, {useState} from "react"

// function Timer(){
//     const [time,setTime] = useState(0);
//     function startTimer(){
//         setInterval(()=>{
//             setTime(time+1);
//         },1000);
//     }
//     function stopTimer(){
//     }
//     function resetTimer(){
//     }
    
//     return (
//         <main style={{textAlign: "center"}}>
//             <h1>Timer: {time} seconds</h1>
//             <div>
//             <button onClick={startTimer}>Start</button>
//             &nbsp; &nbsp;
//             <button onClick={stopTimer}>Stop</button>
//             &nbsp; &nbsp;
//             <button onClick={resetTimer}>Reset</button>
//             </div>
//         </main>
//     )
// }

// export default Timer;

import React, { useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  //   let interval = null;
  const [interval, setInter] = useState(null);

  function startTimer() {
    // setInterval(() => {
    //     setTime(time+1)
    // }, 1000)
    const i = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    // interval = i;
    setInter(i);
  }
  function stopTimer() {
    clearInterval(interval);
    // interval = null;
    setInter(null);
  }
  function resetTimer() {
    setTime(0);
  }

  return (
    <main style={{ textAlign: "center" }}>
      <h1>Timer: {time}</h1>
      <div>
        <button onClick={startTimer}>Start</button>
        &nbsp; &nbsp;
        <button onClick={stopTimer}>Stop </button>
        &nbsp; &nbsp;
        <button onClick={resetTimer}>Reset </button>
      </div>
    </main>
  );
}

export default Timer;
