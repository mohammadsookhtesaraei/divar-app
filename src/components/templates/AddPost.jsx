import { useState } from "react";
import axios from "axios";


import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../../services/admin";

import { getCookie } from "../../utils/cookie";

import styles from "./AddPost.module.css"
import toast from "react-hot-toast";

const AddPost = () => {
  const [form, setForm] = useState({
    title: "",
    content: "",
    city: "",
    category: "",
    amount: null,
    images: null,
  });
  const { data } = useQuery({
    queryKey: ["get-category"],
    queryFn: getCategory,
  });
  const changeHandler = (event) => {
   const {name,files,value}=event.target;

     if(name !== "images"){
      setForm((prevForm)=>({...prevForm,[name]:value}))
     }else{
      setForm((prevForm)=>({...prevForm,[name]:files[0]}))
     }
  };

  const addHandler = (event) => {
    event.preventDefault();
    const formData=new FormData();
    for(let i in form){
      formData.append(i,form[i])
    };
    
    const token=getCookie("accessToken");
    axios.post(`${import.meta.env.VITE_BASE_URL}post/create`,formData,{
      headers:{
        "Content-type":"multipart/form-data",
        Authorization:`beare ${token}`
      }
    }).then((res)=>toast.success(res.data.message))
    .catch((error)=> toast.error("مشکلی پیش امده است"))
  };

  return (
    <form onChange={changeHandler} className={styles.form}>
      <h3>افزودن آگهی</h3>
      <label htmlFor="title">عنوان آگهی</label>
      <input type="text" id="title" name="title" />
      <label htmlFor="content">توضیحات</label>
      <textarea name="content" id="content"></textarea>
      <label htmlFor="amount">مبلغ</label>
      <input type="number" name="amount" id="amount" />
      <label htmlFor="city">شهر</label>
      <input type="text" id="city" name="city" />
      <label htmlFor="category">دسته بندی</label>
      <select name="category" id="category">
        {data?.data.map((i) => (
          <option key={i._id} value={i._id}>
            {i.name}
          </option>
        ))}
      </select>
      <label htmlFor="images">عکس</label>
      <input type="file" name="images" id="images" />
      <button onClick={addHandler}>ایجاد</button>
    
    </form>
  );
};

export default AddPost;
