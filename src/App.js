import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  /* render 하면 호출되는 life cycle method(mount 되자마자 호출됨) */
  componentDidMount() {
    // => 이곳에서 data를 fetch함 (API로부터 data fetching 완료 -> movie를 render하고 map을 만들고 movie를 render)
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}
export default App;
