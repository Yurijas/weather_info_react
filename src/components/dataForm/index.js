import React, { Component } from 'react';
import './index.css';

class DataForm extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={this.props.getInformation}>
            <input type="text" name="year" placeholder="Year..." />
            <input type="text" name="season" placeholder="Season..." />
            <input type="submit" value="Get Standings" />
          </form>
        </div>
      </div>
    );
  }
}

export default DataForm;
