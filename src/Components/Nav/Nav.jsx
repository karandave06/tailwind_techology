import './nav.scss'

const Nav = () => {
  return (

    <>
      
   
    <div className='relative  container mx-auto p-4'>

    <div className="flex items-center justify-between">

    {/* logo */}
        <div className="logo pt-2">
           <h1>Karan</h1>
        </div>

        {/* nav menue */}

        <div className=" hidden space-x-12 main-container lg:flex">
            <a  href="#">Pricing</a>
            <a  href="#">Product</a>
            <a  href="#">About</a>
            <a  href="#">Careers</a>
            <a  href="#">Community</a>
            
        </div>


        {/* button */}

        <div className="button hidden md:block p-3 px-6 pt-2 text-white  bg-[#ef5535] hover:bg-[#d36049] rounded-full baseline">
        <a href="#" >GetStarted</a>

        </div>

        <button id="menut-btn" className={`open block hamburger md:hidden focus:outline-none`}>
          <span className='hamburger-top'></span>
          <span className='hamburger-middle'></span>
          <span className='hamburger-bottom'></span>
        </button>

    </div>



      
    </div>


    <div className='md:hidden'>

    <div id='menu' className='absolute flex flex-col items-center self-end py-8 mt-10
    space-y-6 font-bold bg-white sm-w-auto sm:self-center left-6 right-6 drop-shadow-md hidden'>

    <a href="#">Pricing</a>
    <a href="#">Product</a>
    <a href="#">About Us</a>
    <a href="#">Pricing</a>
    <a href="#">Careers</a>
    <a href="#">Community</a>

    </div>


    </div>

    </>

          
  )
}

export default Nav 
