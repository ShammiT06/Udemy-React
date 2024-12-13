import python from "../assets/Images/python.jpg"
import fullstack from "../assets/Images/fullstack.png"
import p2 from "../assets/Images/p2.jpg"
import p3 from "../assets/Images/p3.jpg"
import p4 from "../assets/Images/p4.jpg"
import p5 from "../assets/Images/p5.jpg"
import p6 from "../assets/Images/p6.jpg"
import p7 from "../assets/Images/p7.jpg"

function Popular()
{
  return(
  <div class="popular">
            <h1>Most Popular</h1>
            <p>Pick the one which suits You</p>
            <div class="popular__container">
            <div class="course-card__p">
                <img src={fullstack} alt="Course 1"/>
                <h3>Full Stack Development</h3>
                <p>Abdul Kareem Basha</p>
                <p>5.0⭐⭐⭐⭐⭐</p>
                <p>1999 <del>25000</del></p>
            </div>
            <div class="course-card__p">
                <img src={p2} alt="Course 1"/>
                <h3>Cloud Computing</h3>
                <p>Manimaran</p>
                <p>3.4⭐⭐⭐</p>
                <p>999 <del>2500</del></p>
            </div>
            <div class="course-card__p">
                <img src={p3} alt="Course 1"/>
                <h3>PHP Development</h3>
                <p>Balaji</p>
                <p>2.4⭐⭐⭐⭐</p>
                <p>399 <del>3500</del></p>
            </div>
            <div class="course-card__p">
                <img src={p4} alt="Course 1"/>
                <h3>UI/UX Design</h3>
                <p>Kareem</p>
                <p>4.4⭐⭐⭐⭐</p>
                <p>599 <del>6500</del></p>
            </div>
            <div class="course-card__p">
                <img src={p5} alt="Course 1"/>
                <h3>Mobile App Development</h3>
                <p>Abdul</p>
                <p>4.6⭐⭐⭐⭐</p>
                <p>999 <del>3500</del></p>
            </div>
            <div class="course-card__p">
                <img src={p6} alt="Course 1"/>
                <h3>Microprocessor and Micro Controller</h3>
                <p>Vanitha</p>
                <p>3.4⭐⭐⭐</p>
                <p>199 <del>6300</del></p>
            </div>
            <div class="course-card__p">
                <img src={p7} alt="Course 1"/>
                <h3>C Programming</h3>
                <p>Priya</p>
                <p>3.2⭐⭐⭐</p>
                <p>350 <del>3500</del></p>
            </div>
            <div class="course-card__p">
                <img src={python} alt="Course 1"/>
                <h3>Python Development</h3>
                <p>Jack Daniel</p>
                <p>5.0⭐⭐⭐⭐⭐</p>
                <p>4599 <del>13500</del></p>
            </div>
          </div>  
         </div> 
  )
}


export default Popular