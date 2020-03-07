import React from "react"


class Counter extends React.Component{

  state = {
    count: 0
  }

handleIncrement = ()=>{
  this.setState({
    count: this.state.count + 1
  })
}

handleDecrement = ()=>{
  this.setState({
    count: this.state.count + 1
  })
}
  render(){
    return(
      <div>
        Counter Component with state
<button onClick={this.handleIncrement}>
count: {this.state.count}
</button>
      </div>
    )
  }
}

export default Counter