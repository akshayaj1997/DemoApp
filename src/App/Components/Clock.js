import React from 'react';
class Clock extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = { date : new Date()}
    this.timer = this.timer.bind(this);
  }
  timer()
  {
    this.setState({date : new Date()})
  }
  componentWillMount()
  {
    setInterval(() => {this.timer()
      
    }, 1000);
  }
    render() {
      return (
        <div>
          <h1>This is a state example for a component</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
export default Clock;