import React, { Component } from "react";

export default class ClassComponent2 extends Component {
  // state 초기화 및 메서드 바인딩
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = { date: new Date() };
    // 함수 안에서 클래스에 직접 접근하고 싶다면(this.state) 바인딩을 해줘야 한다.
    // 또는, 화살표 함수로 바꿔준다.
    this.handleClick = this.handleClick.bind(this);
  }

  // DOM 노드 초기화 및 데이터 fetch
  componentDidMount() {
    console.log("componentDidMount");
    this.timerId = setInterval(() => this.tick(), 10000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  // 타이머 제거 및 요청 취소 및 구독 해제
  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timerId);
  }

  tick() {
    console.log("tick");
    this.setState({ date: new Date() });
  }

  handleClick() {
    alert(this.state.date);
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1 onClick={this.handleClick}>Hello, world</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
