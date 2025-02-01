/* eslint-disable react/prop-types */

export const Button=({
    onClick,
    disable,
    children

})=>{
   
      return(
      <div>
      
      <button 
      onClick={disable?null:onClick} 
      disabled={disable}
      className={`cursor-pointer ${disable?"bg-grey-200":"bg-green-200"} text-white w-60 h-9 flex justify-center  rounded-xl text-2xl `}>
        {children}
      </button>
     
      </div>
      );
}