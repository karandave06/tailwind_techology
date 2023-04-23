import facebook from '../../../public/icon-facebook.svg'
import insta from '../../../public/icon-instagram.svg'
import youtub from '../../../public/icon-youtube.svg'
import pintrest from '../../../public/icon-pinterest.svg'
import twitter from '../../../public/icon-twitter.svg'


const Footer = () => {
  return (
    <div className="footer bg-black" id='footer'>

    <div className="container flex flex-col-reverse justify-between px-8 md:px-2 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">



    {/* logo and social link's */}

    <div className="flex  flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">

    <div className="mx-auto my-6 text-center text-white md:hidden">
    Copyright &copy; 2023,All Right Reserved
    </div>
        {/* logo */}

        <div>
            <h2 className="text-white text-4xl h-8">Karan</h2>
        </div>

        {/* link's container */}
        <div className="flex justify-center space-x-2">
            <a href="#">
                <img src={facebook} alt="" className="h-8 " />
            </a>

            <a href="#">
                <img src={insta} alt="" className="h-8" />
            </a>

            <a href="#">
                <img src={youtub} alt="" className="h-8" />
            </a>


            <a href="#">
                <img src={pintrest} alt="" className="h-8" />
            </a>

            <a href="#">
                <img src={twitter} alt="" className="h-8" />
            </a>
        </div>
    </div>


    {/* list containerr */}
<div className="flex justify-around space-x-20">
    <div className="flex flex-col space-y-3 text-white">
        <a href="#" className="hover:text-[#dd4a4a]">Home</a>
        <a href="#" className="hover:text-[#dd4a4a]">Pricing</a>
        <a href="#" className="hover:text-[#dd4a4a]">About</a>
        <a href="#" className="hover:text-[#dd4a4a]">Compains</a>
    </div>


    <div className="flex flex-col space-y-3 text-white">
        <a href="#" className="hover:text-[#dd4a4a]">Product</a>
        <a href="#" className="hover:text-[#dd4a4a]">Privacy Policy</a>
        <a href="#" className="hover:text-[#dd4a4a]">Community</a>
        <a href="#" className="hover:text-[#dd4a4a]">Careeres</a>
    </div>
</div>


{/* input container */}

<div className="flex  flex-col justify-between">
    <form >
        <div className="flex space-x-3">
            <input type="text" className="flex-1 px-4 rounded-full focus:outline-none" 
                placeholder='Update in your inbox'
            />

            <button className="px-6 py-2 hover:text-black bg-[#b74128] hover:bg-[#b47569] text-white rounded-full focus:outline-none">
                Go
            </button>
        </div>
    </form>
    <div className="hidden  text-white md:block">
        Copyright &copy; 2023,All Right Reserved
    </div>
</div>
    </div>
      
    </div>
  )
}

export default Footer
