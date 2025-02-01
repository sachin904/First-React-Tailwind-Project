/* eslint-disable react/prop-types */

export const InputBox=({
    value, onChange, type, placeholder
}) =>{return(

        <span>

            <input className={`cursor-pointer bg-blue-500 text-white w-60 h-9 flex justify-center  rounded-lg text-xl text-center`} type={type} placeholder={placeholder} value={value} onChange={onChange} ></input>
        </span>
   
    ) ;
};