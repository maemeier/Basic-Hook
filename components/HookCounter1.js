import React, { useState, useEffect } from "react";

const HookCounter1 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("useEffect === updating coment title");
    document.title = `you click ${count} times`;
  }, [count]);
  return (
    <div>
      This useEffect
      <input
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
};

export default HookCounter1;
