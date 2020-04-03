import React, { Component } from "react";

import "./currentRate.css";

class currentRate extends Component {
  state = { date: "", ratesGBP: "", ratesHKD: "", ratesUSD: "", message: "" };

  componentDidMount() {
    this.getCurrentRates();
  }

  getCurrentRates = () => {
    fetch("http://localhost:8080/api/currentRate")
      .then(response => response.json())
      .then(data => {
        this.setState({
          date: data.date,
          ratesGBP: data.rates.GBP,
          ratesHKD: data.rates.HKD,
          ratesUSD: data.rates.USD,
          showPastRates: false
        });
      })
      .catch(error => this.setState({ message: error }));
  };

  getPastRates = () => {
    this.setState({ showPastRates: true });

    window.open("/pastRate");
  };

  render() {
    return (
      <div>
        <h4>Current Rates</h4>

        <table>
          <tr>
            <th>Currency</th>
            <th>Current Month</th>
          </tr>
          <tr>
            <td>GBP</td>
            <td>{this.state.ratesGBP}</td>
          </tr>
          <tr>
            <td>USD</td>
            <td>{this.state.ratesUSD}</td>
          </tr>
          <tr>
            <td>HKD</td>
            <td>{this.state.ratesHKD}</td>
          </tr>
        </table>
        <br />

        <button type="button" onClick={this.getPastRates}>
          History Rates
        </button>
      </div>
    );
  }
}

export default currentRate;
