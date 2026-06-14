import '../styles/Solution.css'

const Solution = () => {
  return (
    <section id="solution" className="solution">
      <div className="container">
        <div className="solution-content">
          <h2 className="reveal">
            Não somos apenas uma agência.<br />
            Somos seus <span className="neon-text">parceiros de crescimento.</span>
          </h2>
          <p className="reveal delay-1">
            A Amplifica Conteúdo nasceu de um grupo de amigos obcecados por resultados. Liderados por Pedro, especialista em transformar marcas invisíveis em referências de mercado. Acreditamos que estética sem estratégia é vazia.
          </p>
          <p className="reveal delay-2">
            Não apenas "fazemos posts". Nós criamos narrativas que prendem a atenção e convertem seguidores em clientes fiéis.
          </p>

          <div className="solution-features reveal delay-3">
            <div className="solution-feature">
              <div className="solution-feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span>Estratégia Personalizada</span>
            </div>
            <div className="solution-feature">
              <div className="solution-feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                </svg>
              </div>
              <span>Conteúdo de Alto Nível</span>
            </div>
            <div className="solution-feature">
              <div className="solution-feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="20" x2="12" y2="10"></line>
                  <line x1="18" y1="20" x2="18" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="16"></line>
                </svg>
              </div>
              <span>Resultados Mensuráveis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution
