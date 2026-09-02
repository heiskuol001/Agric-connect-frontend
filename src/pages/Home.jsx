import Hero from '../components/Hero'
import SubHero from '../components/SubHero'
import ContentOne from '../components/ContentOne'
import ExpertSection from '../components/ExpertSection'
import ContentTwo from '../components/ContentTwo'

const Home = () => {
  return (
    <div className='min-h-screen w-full bg-slate-50'>
      <Hero />
      <SubHero />
      <ContentOne />
      <ContentTwo />
      <ExpertSection />
    </div>
  )
}

export default Home
