import axios from "axios";

//GET 
export const getCoupons = async () => {
  try {
    const res = await axios.get("http://localhost:3001/coupons")
    return res;
  } catch (error) {
    console.log(error)
  }
}


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


//Transaction row data
export const getRowData = async () => {
  try {
    const res = await axios.get("http://localhost:3001/transactions")
    return res
  } catch (error) {
    console.log(error)
  }
}