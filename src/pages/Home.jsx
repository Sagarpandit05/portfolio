import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Skills from "../components/Skills"
import Portfolio from "../components/Portfolio"
import Contact from "../components/Contact"
import About from "../components/About"
import Projects from "../components/Projects"
import HireMe from "../components/HireMe"

export default function Home(){

return(

<>
<Navbar/>
<Hero/>
<About/>
<Skills/>

{/* <Portfolio/> */}
<Projects/>
<Contact/>
<HireMe/>
</>

)

}
