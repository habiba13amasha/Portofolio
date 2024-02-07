import AppHeader from './components/header/AppHeader.jsx'
import Hero from "./components/heroSection/Hero.jsx"
import MainContent from "./components/mainContent/MainContent.jsx"
import Footer from "./components/footer/Footer.jsx"
function App() {

  return (
    <>
      <div className='container'>
        <AppHeader/>
       
        <Hero/>
        <div className='divider'></div>
        <MainContent/>
        <div className='divider'></div>
        <Footer/>
      </div>
    </>
  )
}

export default App
