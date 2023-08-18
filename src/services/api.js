import axios from "axios";

//GET 
export const getCoupons = () =>
  axios.get("http://localhost:3001/coupons")
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
      return Promise.reject(error);
    });

//CREATE
export const createCoupons = (formData) =>
  axios.post("http://localhost:3001/coupons", formData)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
      return Promise.reject(error);
    });

//EDIT
export const editCoupons = (couponId, formData) => {
  axios.put(`http://localhost:3001/coupons/${couponId}`, formData)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
      return Promise.reject(error);
    });
}

//DELETE
export const deleteCoupons = async (couponId) => {
  await axios.delete(`http://localhost:3001/coupons/${couponId}`)
    .then(({ data }) => {
      console.log(data, "deleted...")
      return data;
    })
    .catch((error) => {
      console.log(error);
      return Promise.reject(error);
    });
}