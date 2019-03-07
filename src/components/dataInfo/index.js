import React, { Component } from 'react';
import './index.css';

class DataInfo extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.info.position}</td>
        <td>
          <a target="_blank" href={this.props.info.Driver.url}>
          {this.props.info.Driver.givenName + ' ' + this.props.info.Driver.familyName}
          </a>
        </td>
        <td>{this.props.info.Driver.nationality}</td>
        <td>{this.props.info.Constructors[0].name}</td>
        <td>{this.props.info.points}</td>
      </tr>
    );
  }
}
// {this.props.info.MRData.StandingsTable.StandingsLists.DriverStandings.Driver.familyName}
export default DataInfo;

//MRData.StandingsTable.StandingsLists.DriverStandings
