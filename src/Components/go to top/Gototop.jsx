
import { useEffect, useState } from 'react'
import './top.scss'
const Gototop = () => {
    const [visible,setvisible] = useState(false);
    const goToBtn =() =>{
        window.scrollTo({top:0,left:0,behavior:"smooth"})
    }
    const settop =()=>{
        let heighttohidden = 280;

        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if(winScroll > heighttohidden) {
            setvisible(true)
        }else{
            setvisible(false)
        }
    }

    useEffect(() =>{
        window.addEventListener("scroll",settop)
    },[])
  return (
    <>

   
    {
        visible ?
(
        <div className="top-btn" onClick={goToBtn}>
     <i className="fa-sharp fa-solid fa-angle-up"></i>
    </div>)
    : <p>  </p>
    }
    </>
  )
}

export default Gototop
