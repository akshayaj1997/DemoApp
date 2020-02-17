import React from 'react';

class DemoCounter extends React.Component
{
  constructor(props)
  {
      super(props);
      this.state = {
          count: 0
      };
      this.onIncreaseButtonClick = this.onIncreaseButtonClick.bind(this);
      this.onDecreaseButtonClick = this.onDecreaseButtonClick.bind(this);
  }

  onIncreaseButtonClick(event)
  {
      this.setState({
        count: this.state.count + 1
      })
  }
  onDecreaseButtonClick(event)
  {
    this.setState({
        count: this.state.count - 1
      })
  }
  render()
  {
      return(
          <div className='MainPart'>
              This is the prop passed down from the parent 
              <br/>{this.props.passValue}
              <br/>
              This is the counter that changes value 
              <br/>
              <h1>{this.state.count}</h1>
              <button onClick={this.onIncreaseButtonClick}>+</button>
              &nbsp; &nbsp;
              <button onClick={this.onDecreaseButtonClick}>-</button>
          </div>
      );
  }
}

export default DemoCounter;