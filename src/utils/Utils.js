import moment from "moment"

export const dateFormat = (date) => {
  return moment(date).format("do MMM yyyy");
};
