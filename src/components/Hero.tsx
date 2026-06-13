import '../styles/Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-content">
            <h1 className="reveal">
              Sua marca tem <span className="neon-text">potencial.</span> A gente tem o <span className="neon-text">megafone.</span>
            </h1>
            <p className="reveal delay-1">
              Transformamos o seu conteúdo simples em uma máquina de resultados. 
              Posicionamento estratégico para quem cansou de postar e não vender.
            </p>
            <div className="reveal delay-2">
              <a 
                className="neon-btn"
                href="https://wa.me/351925811424"
                target="_blank"
                rel="noopener noreferrer"
              >
                Quero amplificar meu negócio
              </a>
            </div>
            <div className="hero-trust reveal delay-3">
              <div className="trust-item">
                <svg className="trust-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08v.5a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Resultados Comprovados</span>
              </div>
              <div className="trust-item">
                <svg className="trust-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <span>Consultoria Estratégica</span>
              </div>
              <div className="trust-item">
                <svg className="trust-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
                <span>Entrega Premium</span>
              </div>
            </div>
            <span className="hero-slogan reveal delay-4">Seu conteúdo também pode ser amplificado.</span>
          </div>

          <div className="hero-visual reveal delay-2">
            <div className="hv-orb hv-orb-1"></div>
            <div className="hv-orb hv-orb-2"></div>
            <div className="hv-orb hv-orb-3"></div>
            <div className="hv-card">
              <div className="hv-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 11v2a2 2 0 0 0 2 2h2l3 4V5l-3 4H5a2 2 0 0 0-2 2z"/>
                  <path d="M16 9.5a3.5 3.5 0 0 1 0 5"/>
                  <path d="M19 6.5a7 7 0 0 1 0 11"/>
                  <path d="M8 21h8"/>
                  <path d="M12 17v4"/>
                </svg>
              </div>
              <div className="hv-pulse"></div>
            </div>
            <div className="hv-dots"></div>
            <div className="hv-ring hv-ring-1"></div>
            <div className="hv-ring hv-ring-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
