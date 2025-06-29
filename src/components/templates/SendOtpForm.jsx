import { sendOtp } from "../../services/auth";
import styles from "./SendOtpForm.module.css";


const SendOtpForm = ({ mobile, setMobile, setStep }) => {


  const submitHandler = async (event) => {
    event.preventDefault();
    if (mobile.length !== 11) return;
    const { response, error } = await sendOtp(mobile);
    if (response) setStep(2);
    if (error) console.log(error.response?.data?.message || "undefined");
    console.log({ response });
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <p>ورود به حساب کاربری</p>
      <span>
        برای استفاده از امکانات دیوار لطفا شماره موبایل خودرا وارد کنید.کدتایید
        به این شماره پیامک خواهد شد.
      </span>
      <label htmlFor="Input">شماره موبایل خود را واردکنید</label>
      <input
        type="text"
        id="Input"
        value={mobile}
        onChange={(event) => setMobile(event.target.value)}
      />
      <button type="submit">ارسال کد تایید</button>
    </form>
  );
};

export default SendOtpForm;
