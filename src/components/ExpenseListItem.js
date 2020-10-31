import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const numberFormat = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(value);

export default (props) => (
  <Link className="list-item" to={`/edit/${props.id}`}>
    <div className="list-item__header">
      <h3 className="list-item__title">{props.description}</h3>
      <span className="list-item__subtitle">{moment(props.createdAt).format("MMMM Do YYYY")}</span>
    </div>
    <h3 className="list-item__data">{numberFormat(props.amount / 100 )}</h3>
  </Link>
);
