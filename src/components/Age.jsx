import { useState } from "react";
import { Button } from "./button";
import { Heading } from "./Heading";
import { InputBox } from "./input";
import { useNavigate } from "react-router-dom";

export function Age(){
  const [disable,setDisable]=useState(true);
  // eslint-disable-next-line no-unused-vars
  const[dob,setDob]=useState("");
  const navigate= useNavigate();
  function goTo(){
    navigate("/project/Email-verification");
  }
  
    return<>
    <div className='m-[auto] text-center '>
      
    <Heading>Verify Your Age</Heading>
    <div><p className='text-white m-1'>Please confirm your birth date.This data will not be stored.</p></div>
    <div className='flex justify-center'>
      <div>
    <InputBox type="date" placeholder="date of birth"  onChange={(e) => {
                        setDob(e.target.value);
                        setDisable(e.target.value.trim()==="");
                    }}></InputBox>
    <br></br>
    <Button onClick={goTo} disable={disable}>continue</Button>
    </div>
    </div>
    </div>
    </>
  }