import Header from './components/Header'
import Hero from './components/Hero'
import HeroButton from './components/HeroButton'
import Categories from './components/Categories'
import Modal from './components/Modal'
import Footer from './components/Footer'
import Loader from './components/Loader'






function App() {

  
  

  return (
    <>
      

      <Loader />

      <Header />
      <Hero>
        <HeroButton />
      </Hero>
      <Categories />
      <Footer />
      

    </>
  )
}

export default App
