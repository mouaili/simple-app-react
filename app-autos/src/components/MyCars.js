import React, { Component } from 'react';
import Car from './Car';

class MyCars extends Component {
  render() {
    console.log(this);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Car color='yello'>Ford</Car>
        <Car color='green'>Mercedes</Car>
        <Car>Peugeot</Car>
      </div>
    );
  }
}
export default MyCars;
