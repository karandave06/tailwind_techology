


const Card = ({imgurl,name}) => {
  return (
    <div className={`bg-[#f0e2e0] flex-col items-center p-6 space-y-6 rounded-lg flex mb-9 md:w-1/3`}>
<img src={imgurl} className='w-16 -mt-14' alt="" />

<h5 className="text-lg font-bold">
    {name}
</h5>
<p className='text-sm'>
    {"Karan has supercharged out team's workflow.The ability to maintain visibility on larger milestones at all times keeps everyone motivated."}
</p>
      
    </div>
  )
}

export default Card
