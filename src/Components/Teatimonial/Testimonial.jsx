import Card from "./Card"
import avtar1 from '../../../public/avatar-anisha.png'
import avtar3 from '../../../public/avatar-richard.png'
import avtar4 from '../../../public/avatar-shanai.png'

const Testimonial = () => {
  return (
    <div className="testimonial " id="about">

    <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
         <h2 className="text-4xl font-bold text-center">
            What is diffrent about us? 
         </h2>

         <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
            <Card imgurl={avtar1} name={"Anish Watts"}/>
            <Card imgurl={avtar3} name={"Ali Bravo"} />
            <Card imgurl={avtar4} name={"Shanai Jonahs"} />
         </div>

         <div className="flex justify-center mb-4">
<a href="#" className='p-3 rounded-full text-white bg-[#ef5535] px-6 hover:bg-[#d36049]'>Get Started</a>
</div>
    </div>
      
    </div>
  )
}

export default Testimonial
