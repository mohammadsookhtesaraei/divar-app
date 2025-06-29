import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";

import { getProfile } from "../../services/user";

import { checkOtp } from "../../services/auth";
import { setCookie } from "../../utils/cookie";

const CheckOtpForm = ({ code, setCode, mobile, setStep }) => {

  const navigate=useNavigate();
  const {refetch}=useQuery({queryKey:["profile"],queryFn:getProfile});

  const submitHandler=async(event)=>{
    event.preventDefault();
    if(code.length !== 5) return;
    const {response,error}=await checkOtp(mobile,code);
    if(response){
      setCookie(response.data);
      navigate("/");
      refetch();
    }
    if(error){
      console.log(error.response.data.message);
    }
    console.log({code,mobile});
  }
  return (
    <form onSubmit={submitHandler}>
      <p>تایید کد اس ام اس شده</p>
      <span>کد پیامک شده  به شماره{mobile}را واردکنید</span>
      <label htmlFor="input">کد تایید را وارد کنید</label>
      <input type="text" id="input" value={code} onChange={(event)=>setCode(event.target.value)}/>
      <button type="submit">ورود</button>
      <button onClick={()=>setStep(1)}>تغییرشماره موبایل</button>
    </form>
  );
};

export default CheckOtpForm;
