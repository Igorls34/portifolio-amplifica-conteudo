import '../styles/Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <a href="#" className="logo">
          AMPLIFICA CONTEÚDO<span>.</span>
        </a>
        <nav className="nav-links">
          <a href="#problem">O Problema</a>
          <a href="#solution">A Solução</a>
          <a href="#services">Serviços</a>
          <a href="#differentials">Diferenciais</a>
        </nav>
        <button 
          className="header-cta" 
          onClick={() => window.open('https://wa.me/351925811424', '_blank')}
        >
          Falar com Especialista
        </button>
      </div>
    </header>
  )
}

export default Header
