import Navbar from "../Components/Navbar"
import Categories from "../Components/Categories"
import Sale from "../Components/Sale"
import Recommend from "../Components/Recommend"
import Topic from "../Components/Topic"
import Popular from "../Components/Popular"
import Footer from "../Components/Footer"


function App()
{
    return(
        <>
          <Navbar></Navbar>
          <Categories></Categories>
          <Sale></Sale>
          <Recommend></Recommend>
          <Topic></Topic>
          <Popular></Popular>
          <Footer></Footer>
        </>
    )
}

export default App