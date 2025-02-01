import { useRef, useState } from "react";
import { Button } from "./button";
import { Heading } from "./Heading";
import { useNavigate } from "react-router-dom";

export const Otp = () => {
    const refs = [useRef(), useRef(), useRef(), useRef(), useRef()];
    const [otp, setOtp] = useState(["", "", "", "", ""]);
    const [disable, setDisable] = useState(true);

    const handleChange = (index, e) => {
        const value = e.target.value;
        if (!/^[0-9]?$/.test(value)) return; // Allow only digits
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < refs.length - 1) {
            refs[index + 1].current.focus();
        }
        setDisable(newOtp.includes(""));
    };

    const handleBackspace = (index, e) => {
        if (e.key === "Backspace" && index > 0 && !otp[index]) {
            refs[index - 1].current.focus();
        }
    };
    const navigate= useNavigate();
    function goTo(){
      navigate("/project/age-Verification");
    }

    return (
        <div className="m-[auto] text-center">
            <Heading>Check Your Email For A Code</Heading>
            <div className="m-2">
                <p>Please enter the verification code sent to your email id sachin@gmail.com</p>
            </div>
            <div className="flex justify-center">
                <div>
                    <div className="flex justify-center">
                        {refs.map((ref, index) => (
                            <OtpBox
                                key={index}
                                reference={ref}
                                value={otp[index]}
                                onChange={(e) => handleChange(index, e)}
                                onKeyDown={(e) => handleBackspace(index, e)}
                            />
                        ))}
                    </div>
                    <Button onClick={goTo} disable={disable}>Verify</Button>
                </div>
            </div>
        </div>
    );
};

// eslint-disable-next-line react/prop-types
function OtpBox({ reference, value, onChange, onKeyDown }) {
    return (
        <div>
            <input
                ref={reference}
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
                type="text"
                maxLength={1}
                className="text-white bg-blue-500 h-10 w-9 m-1 rounded-2xl outline-none text-center text-2xl"
            />
        </div>
    );
}




















/*import { useRef, useState } from "react"
import { Button } from "./button";
import { Heading } from "./Heading";

export const Otp = () => {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const [disable, setDisable] = useState(true);
    return <diV className="m-[auto] text-center">

        <Heading>Check Your Email For A Code</Heading>

        <div className="m-2"> <p>please enter the verification code sent to your email id sachin@gmail.com</p>
        </div>
        <div className="flex justify-center">
            <div>
                <div className="flex justify-center ">
                    <OtpBox reference={ref1} onDone={() => {
                        ref2.current.focus();
                    }}></OtpBox>
                    <OtpBox reference={ref2} onDone={() => {
                        ref3.current.focus();
                    }} ></OtpBox>
                    <OtpBox reference={ref3} onDone={() => {
                        ref4.current.focus();
                    }}></OtpBox>
                    <OtpBox reference={ref4} onDone={() => {
                        ref5.current.focus();
                    }}></OtpBox>
                    <OtpBox reference={ref5} onDone={() => {
                        setDisable(!disable);
                    }}></OtpBox>
                </div>
                <Button disable={disable}>verify</Button>
            </div>

        </div>





    </diV>

}
// eslint-disable-next-line react/prop-types
function OtpBox({ onDone, reference }) {
    return <div >
        <input ref={reference} onChange={() => {
            onDone();
        }} type="text" maxLength={1} className=" text-white  bg-blue-500 h-10 w-9 m-1 rounded-2xl outline-none text-center text-2xl"></input>
    </div>
}
    */
