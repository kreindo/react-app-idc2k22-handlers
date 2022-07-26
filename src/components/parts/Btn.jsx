import React from 'react';function rand(e) {
  const arr = ['woah', 'yooo', 'das doope', 'yankee with no drip'];
  let numb = Math.floor(Math.random() * 4);
  return arr[numb];
}
function handleClick(e) {
  console.log(e.target.innerText);

  e.target.innerText = rand();
}

const Btn = () => {
  return (
    <div>
      <button onClick={(e) => handleClick(e)}>Click me</button>
    </div>
  );
};

export default Btn;
