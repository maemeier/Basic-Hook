import React, { useState } from "react";

const HookObject = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      Hooks Object
      <input
        type="text"
        value={name.firstName}
        onChange={event => setName({ ...name, firstName: event.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={event => setName({ ...name, lastName: event.target.value })}
      />
      <h2>firstName is: {name.firstName} </h2>
      <h2>lastName is: {name.lastName}</h2>
    </div>
  );
};

export default HookObject;
