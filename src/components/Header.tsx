import { useState, useRef, useEffect } from 'react'
import '../styles/Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  // Fechar menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      
      // Não fecha se clicar no botão do menu
      if (buttonRef.current?.contains(target)) {
        return
      }
      
      // Fecha se clicar fora do menu
      if (menuRef.current && !menuRef.current.contains(target)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside)
      document.body.style.overflow = 'hidden' // Previne scroll
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Fechar menu ao pressionar Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isMenuOpen])

  // Ripple effect nos botões
  const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget
    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const ripple = document.createElement('span')
    ripple.className = 'ripple'
    ripple.style.left = x + 'px'
    ripple.style.top = y + 'px'
    
    button.appendChild(ripple)

    // Remover ripple após animação
    setTimeout(() => ripple.remove(), 600)
  }

  return (
    <header className="header">
      <div className="container">
        <a href="#" className="logo">
          AMPLIFICA CONTEÚDO<span>.</span>
        </a>
        
        {/* Navigation - Desktop */}
        <nav className="nav-links">
          <a href="#problem">O Problema</a>
          <a href="#solution">A Solução</a>
          <a href="#services">Serviços</a>
          <a href="#portfolio">Portfólio</a>
          <a href="#differentials">Diferenciais</a>
          <a href="#depoimentos">Depoimentos</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          ref={buttonRef}
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={() => {
            setIsMenuOpen(!isMenuOpen)
          }}
          onMouseDown={handleRipple}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation - Drawer */}
        <nav 
          ref={menuRef}
          className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}
          role="navigation"
        >
          <a 
            href="#problem" 
            onClick={handleNavClick}
            className="nav-link"
          >
            <span>O Problema</span>
          </a>
          <a 
            href="#solution" 
            onClick={handleNavClick}
            className="nav-link"
          >
            <span>A Solução</span>
          </a>
          <a 
            href="#services" 
            onClick={handleNavClick}
            className="nav-link"
          >
            <span>Serviços</span>
          </a>
          <a 
            href="#portfolio" 
            onClick={handleNavClick}
            className="nav-link"
          >
            <span>Portfólio</span>
          </a>
          <a 
            href="#differentials" 
            onClick={handleNavClick}
            className="nav-link"
          >
            <span>Diferenciais</span>
          </a>
          <a 
            href="#depoimentos" 
            onClick={handleNavClick}
            className="nav-link"
          >
            <span>Depoimentos</span>
          </a>
          <button 
            className="mobile-cta"
            onClick={() => {
              window.open('https://wa.me/351925811424', '_blank')
              setIsMenuOpen(false)
            }}
            onMouseDown={handleRipple}
          >
            Falar com um especialista
          </button>
        </nav>

        {/* CTA Button - Desktop */}
        <button 
          className="header-cta" 
          onClick={() => window.open('https://wa.me/351925811424', '_blank')}
          onMouseDown={handleRipple}
        >
          Falar com um especialista
        </button>
      </div>
    </header>
  )
}

export default Header

