import { useState } from "react";
import { useMutation,useQueryClient } from "@tanstack/react-query";
import { addCategory } from "../../services/admin";

import styles from "./CategoryForm.module.css";


const CategoryForm = () => {

  const [form,setForm]=useState({
    name:"",
    slug:"",
    icon:""
  });

  const queryClient=useQueryClient();

  const {mutate,isPending,data,error}=useMutation({
    mutationFn:addCategory,
    onSuccess:()=>queryClient.invalidateQueries("get-category")
  });

  const changeHandler=(event)=>{
    const {value,name}=event.target;
    setForm((prevForm)=>({...prevForm,[name]:value}))
  };

  const submitHandler=(event)=>{
    event.preventDefault();
    if(!form.name || !form.slug || !form.icon) return;
    mutate(form);

  };


  return (
    <form onChange={changeHandler} onSubmit={submitHandler} className={styles.form}>
      <h3>ایجاد دسته بندی</h3>
      {!!error && <p>مشکلی پیش امده است</p>}
      {data?.status===201 && <p>دسته بندی با موفقیت اضافه شد</p>}
      <label htmlFor="name">دسته بندی</label>
      <input type="text" name="name" id="name" />

      <label htmlFor="slug">اسلاگ</label>
      <input type="text" name="slug" id="slug" />

      <label htmlFor="icon">ایکون</label>
      <input type="text" name="icon" id="icon" />
      <button type="submit" disabled={isPending}>ایجاد</button>
    </form>
  );
};

export default CategoryForm;
