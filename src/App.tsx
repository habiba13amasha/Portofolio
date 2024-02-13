import AppHeader from './components/header/AppHeader.jsx'
import Hero from "./components/heroSection/Hero.jsx"
import MainContent from "./components/mainContent/MainContent.jsx"
import Footer from "./components/footer/Footer.jsx"
import ContactUs from "./components/contactUs/ContactUs.jsx"
import { useEffect ,useState} from 'react'
function App() {
  useEffect(()=>{
   window.addEventListener("scroll",()=>{
    
    if(window.scrollY>300){
      setshowscroll(true)
    }else{
      setshowscroll(false)
    }
   })
  },[])
  const [showScroll, setshowscroll] = useState(false);
  return (
    <>
      <div id="up" className='container'>
        <AppHeader/>
        <Hero/>
        <div className='divider'></div>
        <MainContent/>
        <div className='divider'></div>
        <ContactUs/>
        <div className='divider'></div>
        <Footer/>
       <a href='#up' style={{opacity:showScroll? 1: 0 ,transition:"0.5s"}}>
         <button className="icon-keyboard_arrow_up  scrollToTop"></button>
        </a>
      </div>
    </>
  )
}

export default App
