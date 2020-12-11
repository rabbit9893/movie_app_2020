import React from 'react';

function Food({fav}) {
  {/* {fav} == props.fav와 같음? props.fav를 하는 것보다 {fav}를 하는 것이 더 효율적임?*/ }
  console.log({fav});
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi" /> 
      <Food fav="ramen" /> 
      <Food fav="samgiopsal" /> 
      <Food fav="chukumi" /> 
      {/* 누군가가 food component로 정보를 보내려고 하면 react는 모든 속성을 가져옴 
          => food function 컴포넌트의 agrument(인자)로 넣음 */}
    </div>
  );
}

{/* App에서 food 컴포넌트로 정보를 보내고 그 다음 food 컴포넌트에서 그 정보를
어떻게 사용하는지 */}
export default App;
