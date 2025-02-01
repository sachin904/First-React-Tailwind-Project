import imgsrc from "../images/image.png"
export function Headers(){
    return<>
    <div className="flex ">
       <img src={imgsrc} className="h-7 mx-2"></img>
       <div className=" flex text-2xl text-green-700"><p >Webinar</p><p className=" text-white">.gg</p>
       </div>
       </div>
    </>
  }