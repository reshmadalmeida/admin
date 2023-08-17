import axios from "axios";
//GET 
export const getCoupons = () =>
  axios.get("http://localhost:3001/coupons")
    .then(({ data }) => {
      console.log(data, "...")
      return data;
    })
    .catch((error) => {
      console.log(error);
      return Promise.reject(error);
    });

export const createCoupons = () =>
  axios.post("http://localhost:3001/coupons")
    .then(({ data }) => {
      console.log(data, "...")
      return data;
    })
    .catch((error) => {
      console.log(error);
      return Promise.reject(error);
    });




export const deleteCoupons = (couponId) => {
  console.log(couponId, "...")
  axios.delete(`http://localhost:3000/coupons/${couponId}`)

    .then(({ data }) => {
      console.log(data, "deleted...")
      return data;
    })
    .catch((error) => {
      console.log(error);
      return Promise.reject(error);
    });
}