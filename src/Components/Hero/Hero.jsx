import './hero.scss'
import hero from '../../../public/illustration-intro.svg'

const Hero = () => {
  return (
    <div>

     <div className="mt-[7rem] container flex flex-col-reverse items-center px-6 mx-auto  space-y-0 md:space-y-0 md:flex-row ">
    {/* left item's */}

    <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
<h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
    Bring everyone together to build batter produts
</h1>
<p className="max-w-sm text-center md:text-left">
    Manage makes it simple for software team to plan day-to-day task
    while keeping the larger team goals in view.
</p>

<div className="flex justify-center md:justify-start ">
<a href="#" className='p-3 rounded-full text-white bg-[#ef5535] px-6 hover:bg-[#d36049]'>Get Started</a>
</div>
    </div>


    {/* images */}

    <div className='md:w-1/2'><img src={hero} alt="" /></div>




     </div>
    </div>
  )
}

export default Hero
