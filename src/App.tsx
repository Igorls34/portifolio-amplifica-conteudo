import { useEffect } from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Differentials from './components/Differentials'
import Depoimentos from './components/Depoimentos'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, observerOptions)

    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-scale, .reveal-premium')
    revealElements.forEach(el => {
      observer.observe(el)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <ErrorBoundary>
      <>
        <Header />
        <main>
          <Hero />
          <Problem />
          <Solution />
          <Services />
          <Portfolio />
          <Differentials />
          <Depoimentos />
          <CTA />
        </main>
        <Footer />
      </>
    </ErrorBoundary>
  )
}

export default App

