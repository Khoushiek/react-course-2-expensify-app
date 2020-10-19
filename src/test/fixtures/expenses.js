import moment from "moment";

export default [
  {
    id: "1",
    description: "rent",
    amount: 25000,
    createdAt: moment(0).subtract("4", "days").valueOf(),
    note: ""
  },
  {
    id: "2",
    description: "Gum",
    amount: 250,
    createdAt: moment(0).add("4", "days").valueOf(),
    note: ""
  },
  {
    id: "3",
    description: "Credit card",
    amount: 4000,
    createdAt: moment(0).valueOf(),
    note: ""
  }
];