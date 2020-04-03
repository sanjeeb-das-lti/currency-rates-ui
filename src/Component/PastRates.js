import React, { Component } from "react";

import "./currentRate.css";

class pastRates extends Component {
  state = { rateLists: [], message: "" };

  componentDidMount() {
    this.getPastRates();
  }

  getPastRates = () => {
    fetch("http://localhost:8080/api/pastRate")
      .then(response => response.json())
      .then(data => this.setState({ rateLists: data }))
      .catch(error => this.setState({ message: error }));
  };

  generateHeader = () => {
    let columnHeader = [
      "Currency",
      "Month 1",
      "Month 2",
      "Month 3",
      "Month 4",
      "Month 5",
      "Month 6"
    ];
    let res = [];
    for (var i = 0; i < columnHeader.length; i++) {
      res.push(<th key={columnHeader[i]}>{columnHeader[i]}</th>);
    }
    return res;
  };

  generateTableData = () => {
    let res = [];
    //let tableData = employ.data;
    res.push(
      <>
        <tr>
          <td>GBP</td>
          {this.state.rateLists.map((val, i) => {
            const value = JSON.parse(val);
            return <td key={"GBP" + i}>{value.rates.GBP}</td>;
          })}
        </tr>
        <tr>
          <td>USD</td>
          {this.state.rateLists.map((val, i) => {
            const value = JSON.parse(val);
            return <td key={"USD" + i}>{value.rates.USD}</td>;
          })}
        </tr>
        <tr>
          <td>HKD</td>
          {this.state.rateLists.map((val, i) => {
            const value = JSON.parse(val);
            return <td key={"HKD" + i}>{value.rates.HKD}</td>;
          })}
        </tr>
      </>
    );
    return res;
  };

  render() {
    return (
      <div>
        <h4>Past Rates</h4>

        <table>
          <thead>
            <tr>{this.generateHeader()}</tr>
          </thead>
          <tbody>{this.generateTableData()}</tbody>
        </table>
      </div>
    );
  }
}

export default pastRates;
