import AxiosInstance from "./axiosInstance";
import {getAppToken} from "../util/token";

AxiosInstance.addBaseUrlToAxiosInstance();

export const loginUser = async (userName, password) => {
  return AxiosInstance.instance.post("/lb_user_login", {
    username: userName,
    password: password,
  }).then((res)=>{ return res});
  
};

export const profileUpdate = async (id, userName, phonenumber, city, newpassword, newpasswordcp) => {
  return AxiosInstance.instance.post(`/lb_user_update_profile/${id}`, {
    lb_user_name: userName,
    lb_user_phone: phonenumber,
    lb_user_city: city,
    newpassword: newpassword,
    newpasswordcp:newpasswordcp
  }).then((res)=>{return res});
};

export const userRegistration = async (name, phonenumber, email, city, password) => {
  return AxiosInstance.instance.post("/lb_user_register", {
    lb_user_name: name,
    lb_user_phone: phonenumber,
    lb_user_email: email,
    lb_user_city: city,
    password: password
  }).then((res)=>{return res});
};

export const getUser = async (id) => {
  return AxiosInstance.instance.get(`/lb_user_get_profile/${id}`)
  .then((res)=>{return res});
};
