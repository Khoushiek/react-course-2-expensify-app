import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const numberFormat = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(value);

export default (props) => (
  <div>
    <Link to={`/edit/${props.id}`}>
      <h3>{props.description}</h3>
    </Link>
    <p>
      {numberFormat(props.amount / 100 )}
      &nbsp; - &nbsp;  
      {moment(props.createdAt).format("MMMM Do YYYY")}</p>
  </div>
);
