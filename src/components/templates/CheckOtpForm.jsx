import { checkOtp } from "../../services/auth";


const CheckOtpForm = ({ code, setCode, mobile, setStep }) => {
  const submitHandler=async(event)=>{
    event.preventDefault();
    if(code.length !== 5) return;
    const {response,error}=await checkOtp(mobile,code);
    if(response){
      console.log(response)
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
