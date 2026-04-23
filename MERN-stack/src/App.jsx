import { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${count} new Message `;
  });

  return (
    <div>
      <h3>{count} New Message !</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default App;

//      UseEffect

// const App = () => {
//   const [counter, setCounter] = useState(0);
//   const [name, setName] = useState("");
//   const [details, setDetails] = useState({ counter: 0, name: "  " });

//   function increaseCounter() {
//     setDetails((prev) => ({
//       ...prev,
//       counter: prev.counter + 1,
//     }));
//   }
//   console.log(details);

//   return (
//     <div>
//       <input type="text" onChange={(e) => setName(e.target.value)} />
//       <h1>
//         {details.name} has clicked {details.counter} times !!
//       </h1>
//       <button onClick={increaseCounter}>Increase </button>
//     </div>
//   );
// };

// export default App;
