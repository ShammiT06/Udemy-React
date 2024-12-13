function Navbar()
{
  return(
    <div className="navbar">
        <div class="navbar__1">
            <h1 class="navbar__1__title">Udemy</h1>
        </div>
        <div class="navbar__2">
            <i class="fa-solid fa-magnifying-glass" style={{color:'black'}}></i>
            <input placeholder="search for anything here... Tech,Busniess,Art.."/>
        </div>
        <div class="navbar__3">
            <p>Courses</p>
             <div class="my_learning">
                <p>My Learning</p>
                <div class="my_learning__popup">
                    <p>You didn't Purchase Any Course yet.. <br/> Purchase to Upgrade your skills</p>
                </div>
             </div>
            <i class="fa-solid fa-cart-shopping" style={{color: "#01060e;"}}></i>
            <i class="fa-solid fa-bell" style={{color: "#00060f;"}}></i>
            <i class="fa-solid fa-user" style={{color: "#01060e;"}}></i>
        </div>
        <div class="navbar__4">
        <i class="fa-solid fa-bars"></i>
    </div>
    </div>    
  )
}

export default Navbar