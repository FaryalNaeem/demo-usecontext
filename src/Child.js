import React, { useContext } from 'react';
import ValueContext from './ValueContext';
function Child() {
  let value = useContext(ValueContext);
  console.log("value",value);
  let updatebutton = value[1];
  return (
    <div>
    Child number{value[0]}
    <button onClick={() => {updatebutton(++value[0])}}> Update number</button>
    </div>
  );
}

export default Child;
