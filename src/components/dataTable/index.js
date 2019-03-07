import React, { Component } from 'react';
import './index.css';
import DataInfo from '../dataInfo';

class DataTable extends Component {
  render() {
    console.log(this.props.information);
    return (
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Name</th>
            <th>Nationality</th>
            <th>Sponsor</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {this.props.information.MRData &&
            this.props.information.MRData.StandingsTable.StandingsLists[0].DriverStandings.map(
            info => <DataInfo info={info} key={info.Driver.driverId}/>
          )}
        </tbody>
      </table>
    );
  }
}

export default DataTable;

// table className="table table-light"

// this.props.standings &&
// this.props.standings.map( driver ->
//<tr>
//<td>driver.position</td>
// <td>
//<a target="_blank" href= driver.Driver.url>driver.Driver.givenName + ' ' + driver.Driver.familyName
//</td>
//   <td>driver.Driver.nationality</td>
//   <td>driver.Constructors[0].name</td>
//   <td>driver.points</td>
// </tr>

// info => <DataInfo info=info key=info.Driver.driverId/>
// )
