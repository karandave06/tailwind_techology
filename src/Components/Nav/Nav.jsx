import { useState } from 'react'
import './nav.scss'

const Nav = () => {

  function handelckick(){
settoggle(!(toggle))
  }

  
  const [toggle,settoggle] = useState(false);
  const [navbar,setnavbar] = useState(false);

 const changebg =()=>{
  if(window.scrollY >=50){
    setnavbar(true)
  }
  else{setnavbar(false)}
 }

 window.addEventListener("scroll",changebg)
  return (
    

    <>

  <div className={`fixed top-0 left-0 w-full drop-shadow-lg duration-75  ${navbar ? 'active': ' '}   mx-auto p-4`}>

    <div className="flex items-center justify-between">

    {/* logo */}
        <div className="logo pt-2">
           <h1>Karan</h1>
        </div>

        {/* nav menue */}

        <div className="hidden space-x-12 main-container lg:flex">
            <a  href="#">Pricing</a>
            <a  href="#product">Product</a>
            <a  href="#about">About</a>
            <a  href="#ctc">Careers</a>
            <a  href="#footer">Community</a>
            
        </div>


        {/* button */}

        <div className="button hidden md:block p-3 px-6 pt-2 text-white  bg-[#ef5535] hover:bg-[#d36049] rounded-full baseline">
        <a href="#" >GetStarted</a>

        </div>

        <button onClick={handelckick} id="menut-btn" className={`${toggle ? 'open' : ' '} block hamburger md:hidden focus:outline-none`}>
          <span className='hamburger-top'></span>
          <span className='hamburger-middle'></span>
          <span className='hamburger-bottom'></span>
        </button>

    </div>



      
    </div>


    <div className='md:hidden'>

    <div id='menu' className={`fixed flex flex-col items-center self-end py-8 mt-10
    space-y-6 font-bold bg-white text-black sm-w-auto sm:self-center left-6 right-6 drop-shadow-md ${toggle ? ' ' : 'hidden'}`}>

    <a href="#hero" onClick={handelckick}>Pricing</a>
    <a href="#product" onClick={handelckick}>Product</a>
    <a href="#about" onClick={handelckick}>About Us</a>
    <a href="#ctc" onClick={handelckick}>Careers</a>
    <a href="#footer" onClick={handelckick}>Community</a>

    </div>


    </div>

    </>

          
  )
}

export default Nav 
