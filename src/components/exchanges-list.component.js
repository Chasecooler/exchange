import React, { Component } from "react";

import { Link } from "react-router-dom";

import axios from "axios";

const Exchange = props => (
  <tr>
    <td>{props.exchange.username}</td>

    <td>{props.exchange.description}</td>

    <td>{props.exchange.duration}</td>

    <td>{props.exchange.date.substring(0, 10)}</td>

    <td>
      <Link to={"/edit/" + props.exchange._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExchange(props.exchange._id) }}>delete</a>
    </td>
  </tr>
)

export default class ExchangesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExchange = this.deleteExchange.bind(this);

    this.state = { exchanges: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/exchanges/")

      .then(response => {
        this.setState({ exchanges: response.data });
      })

      .catch(error => {
        console.log(error);
      });
  }

  deleteExchange(id) {
    axios
      .delete("http://localhost:5000/exchanges/" + id)

      .then(response => {
        console.log(response.data);
      });

    this.setState({
      exchanges: this.state.exchanges.filter(el => el._id !== id)
    });
  }

  exerciseList() {
    return this.state.exchanges.map(currentexchange => {
      return (
        <Exchange
          exercise={currentexchange}
          deleteExchange={this.deleteExchange}
          key={currentexchange._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Logged Exchanges</h3>

        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>

              <th>Description</th>

              <th>Duration</th>

              <th>Date</th>

              <th>Actions</th>
            </tr>
          </thead>

          <tbody>{this.exchangeList()}</tbody>
        </table>
      </div>
    );
  }
}
