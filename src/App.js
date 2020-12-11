import React from 'react';

function Food({name, picture}) {
  {/* {fav} == props.fav와 같음? props.fav를 하는 것보다 {fav}를 하는 것이 더 효율적임?*/ }
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} width="250px" height="250px" alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id : 1,
    name : "Kimchi",
    image: "http://web.tradekorea.com/product/987/1664987/Whole%20Cabbage%20Kimchi%20_1.jpg"
  },
  {
    id : 2,
    name : "Samgyeopsal",
    image: "http://www.blaud.co.kr/uploads/fw1604005/201909/4419185ba11a7cc2b1d5f54363f2b0eb.jpg"
  },
  {
    id : 3,
    name : "Bibimbap",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F74%2F13%2F92%2F7413925459deee0499336273d4f7a4c7.jpg&f=1&nofb=1"
  },
  {
    id : 4,
    name : "Doncasu",
    image: "https://jungdaham.com/web/product/big/201804/31_shop1_189698.jpg"
  },
  {
    id : 5,
    name : "Kimbap",
    image: "https://static.myletter.net/20190225/edd1e01f-4502-453b-8b61-688941aefb76.jpg"
  }
];

/*
function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image} />
}
*/

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} /> 
      ))}
      {/* foodILike.map(renderFood) => 위에 있는 것 대신 함수를 새로 만들어서 할 수 있음*/}
      {/* dish : 각각의 item(object) key : react 내부에서 사용하기 위한 것 */}
      {/* <Food fav="kimchi" />
          누군가가 food component로 정보를 보내려고 하면 react는 모든 속성을 가져옴 
          => food function 컴포넌트의 agrument(인자)로 넣음 */}
    </div>
  );
}

{/* App에서 food 컴포넌트로 정보를 보내고 그 다음 food 컴포넌트에서 그 정보를
어떻게 사용하는지 */}
export default App;