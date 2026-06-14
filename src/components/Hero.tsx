import '../styles/Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>
      <div className="hero-orb hero-orb-3"></div>
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-content">
            <div className="hero-badge reveal">
              <span className="hero-badge-dot"></span>
              Marketing Digital de Alta Performance
            </div>

            <h1 className="reveal">
              Sua marca tem <span className="neon-text">potencial.</span><br />
              A gente tem o <span className="neon-text">megafone.</span>
            </h1>
            <p className="reveal delay-1">
              Transformamos conteúdo simples em máquina de vendas. Posicionamento estratégico para quem cansou de postar sem resultado.
            </p>

            <div className="hero-actions reveal delay-2">
              <a 
                className="neon-btn"
                href="https://wa.me/351925811424"
                target="_blank"
                rel="noopener noreferrer"
              >
                Quero Amplificar Meu Negócio
              </a>
              <a href="#portfolio" className="hero-btn-outline">
                Ver Portfólio
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            <div className="hero-trust reveal delay-3">
              <div className="trust-item">
                <div className="trust-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08v.5a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <span>Resultados Comprovados</span>
              </div>
              <div className="trust-item">
                <div className="trust-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <span>Consultoria Estratégica</span>
              </div>
              <div className="trust-item">
                <div className="trust-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <span>Entrega Premium</span>
              </div>
            </div>

            <div className="hero-stats reveal delay-4">
              <div className="hero-stat">
                <h4>+40%</h4>
                <span>Aumento em Vendas</span>
              </div>
              <div>
                <h4>+20</h4>
                <span>Clientes Ativos</span>
              </div>
              <div className="hero-stat">
                <h4>24/7</h4>
                <span>Suporte Dedicado</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <span>Scroll</span>
          <div className="hero-scroll-line"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
