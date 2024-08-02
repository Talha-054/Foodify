import Header from './components/Header'
import Hero from './components/Hero'
import HeroButton from './components/HeroButton'
import Categories from './components/Categories'
import bgImg2 from './assets/bg-2.jpg'
import bgImg from './assets/bg.jpg'
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
