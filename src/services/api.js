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
export const createCoupons = (formData) => {
  try {
    return axios.post("http://localhost:3001/coupons", formData)
  } catch (error) {
    //toaster
    console.log(error)
  }
}

//EDIT
export const editCoupons = (couponId, formData) => {
  try {
    return axios.put(`http://localhost:3001/coupons/${couponId}`, formData)
  } catch (error) {
    console.log(error);
  }
}

//DELETE
export const deleteCoupons = async (couponId) => {
  try {
    return await axios.delete(`http://localhost:3001/coupons/${couponId}`)
  } catch (error) {
    console.log(error);
  }
}
