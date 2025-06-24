const CheckOtpForm = ({ code, setCode, mobile, setStep }) => {
  const submitHandler=(event)=>{
    event.preventDefault();
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
