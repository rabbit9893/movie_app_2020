import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  /* state 안에는 바꾸고 싶은 data를 넣음 */
  state = {
    count: 0,
  };
  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
    /* this.state.count + 1은 좋지 않은 방법, current로 현재의 state를 가져와서 current.count로  */
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  render() {
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        {/* this.add() => 이거은 function, 클릭했을 때만 function이 호출되기를 원하기 때문(즉시가 아니라) ()는 즉시를 나타냄 */}
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}
export default App;
