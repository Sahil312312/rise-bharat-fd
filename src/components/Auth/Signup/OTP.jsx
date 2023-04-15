import './OTP.css'
import Rise from '../CompanyName/Rise'
import { useState, useEffect } from 'react';

const OTP = () => {
    const [time, setTime] = useState(29);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevSeconds) => prevSeconds - 1);
    }, 1000);

    if (time === 0) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [time]);
   
  return (
    <>
        <Rise/>
        <form>
            <input type="text" placeholder="Enter OTP"/>
            <button type="submit" className="btn-1"> Get OTP </button>
        </form>
        <p className='Resend'>Resend OTP in <span className='otp-time'>{`${time} Sec`}</span></p>
        
    </>
  )
}

export default OTP