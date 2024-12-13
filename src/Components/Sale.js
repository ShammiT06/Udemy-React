import one from "../assets/Images/Poster.png"


function Sale()
{
  return(
    <div className="Sale_img">
      <img src={one} alt="No such image Found" />
      <div class="Sale_img__desc">
            <h2>Skills for Your Future</h2>
            <p>Expand your potential with a course for as little as ₹549. Sale ends today.</p>
        </div>
    </div>
  )
}


export default Sale