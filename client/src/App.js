import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div class="container">
      <div class="row">
      <div class="col">
      <div class="panel panel-default">
        <div class="panel-heading">List of Funds</div>
        <table class="table">
          <tr><th>1</th><th></th><th></th><th></th><th>5</th></tr>
          <tr><td></td><td></td><td></td><td></td><td></td></tr>
        </table>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default App;
