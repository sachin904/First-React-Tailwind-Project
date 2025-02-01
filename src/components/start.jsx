
import { useState } from "react";
import { Button } from "./button";
import { Heading } from "./Heading";
import { InputBox } from "./input";
import { useNavigate } from "react-router-dom";


export function Start(){
      const[disable,setDisable]=useState(false);
      // eslint-disable-next-line no-unused-vars
      const [email,setEmail]=useState("");
      const navigate= useNavigate();
      function goTo(){
        navigate("/project/otp-verification");
      }
      
    return<>
    <div className='m-[auto] text-center '>
      
    <Heading>Lets&apos;s Get Started</Heading>
   
    <div className='flex justify-center'>
      <div>
    
    <InputBox  type="email" placeholder="Email Id" onChange={(e) => {
    setEmail(e.target.value);
      setDisable(e.target.value.trim() === "")}} ></InputBox>
   
    <br></br>
    
    <Button onClick={goTo} disable={disable}>continue</Button>
   
    </div>
    </div>
    </div>
    </>
   
  }