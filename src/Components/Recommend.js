import python from "../assets/Images/python.jpg"
import fullstack from "../assets/Images/fullstack.png"
import maths from "../assets/Images/maths.png"
import personality from "../assets/Images/personality.jpg"


function Recommend()
{
  return(
      <div class="recommend">
        <h1 class="recommend___title">Recommendation For You</h1>
        <p>Pick the Best Pick for You</p>
        <div class="recommend__container">
            <div class="course-card">
                <img src={python} alt="Course 1"/>
                <h3>Python Data Visulation</h3>
                <p>Jack Daniel</p>
                <p>4.5⭐⭐⭐⭐</p>
                <p>4599 <del>15000</del></p>
            </div>
            <div class="course-card">
                <img src={fullstack} alt="Course 2"/>
                <h3>Full Stack Web Design</h3>
                <p>Durairaghaven</p>
                <p>5.0⭐⭐⭐⭐⭐</p>
                <p>3999 <del>13000</del></p>
            </div>
            <div class="course-card">
                <img src={maths} alt="Course 3"/>
                <h3>Engineering Mathematics</h3>
                <p>Selvakumar</p>
                <p>4.8⭐⭐⭐⭐</p>
                <p>499 <del>3000</del></p>
            </div>
            <div class="course-card">
                <img src={personality} alt="Course 4"/>
                <h3>Personality Development</h3>
                <p>Abdul Kareem</p>
                <p>3.4⭐⭐⭐⭐</p>
                <p>999 <del>3500</del></p>
            </div>
    </div>
  </div>
  
  )
}


export default Recommend