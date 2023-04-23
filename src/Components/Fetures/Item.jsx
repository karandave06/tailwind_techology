

const Item = ({number}) => {
  return (
    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
    {/* Hedline */}

    <div className="rounded-l-full bg-[#f3a292] md:bg-transparent">
      <div className="flex items-center space-x-2">
        <div className="px-4 py-2 text-white rounded-full md:py-1 bg-[#ef5535]">
          {number}
        </div>
        <h3 className="text-basee font-bold md:mb-4 md:hidden">
            Track componey-wide progress
        </h3>     
      </div>            
    </div>

    <div>
         
    <h3 className="hidden mb-4 text-lg font-[700] md:block">
    Track componey-wide progress
    </h3>

    <p className="text-[#383866]">

    See how your day-to-day tasks fit into the wider vision. Go from
      tracking progress at the milestone level all the way down to the
        smallest of details. Never lose sight of the bigger picture
        again.
    </p>
    </div>



    
  </div>
  )
}

export default Item
