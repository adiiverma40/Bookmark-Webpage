import { useOutletContext } from "react-router-dom"

function Todo(){
    const {background , fontColor } = useOutletContext()  
    console.log(fontColor)
  return(
        <>
      
        <div className="  w-full h-screen "
        style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color:fontColor
          }}>

            This is to do
        </div>
      
        </>)
}
export default Todo