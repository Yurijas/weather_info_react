import React, { Component } from 'react';
import './index.css';
import DataForm from '../../components/dataForm';
import DataTable from '../../components/dataTable';


class Data extends Component {
  constructor() {
    super();
    this.state = {
      'information': []
    }
  }

  getInformation = async(e) => {
    e.preventDefault();
    let year = e.target.elements.year.value;
    let season = e.target.elements.season.value;
    const URL = `http://ergast.com/api/f1/${year}/${season}/driverStandings.json`;
    let response = await fetch(URL);
    let info = await response.json();
    this.setState({'information': info});
  }
  // this.setState({'information': info.MRData.StandingsTable.StandingsLists[0].DriverStandings});

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <DataForm getInformation={this.getInformation} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <DataTable information={this.state.information} />
          </div>
        </div>
      </div>
    );
  }
}

export default Data;
