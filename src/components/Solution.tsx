import { useState } from 'react'
import '../styles/Solution.css'

const Solution = () => {
  const [showEstrategia, setShowEstrategia] = useState(false)

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
            <div className="solution-feature clickable" onClick={() => setShowEstrategia(!showEstrategia)}>
              <div className="solution-feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <span>Estratégia Personalizada</span>
              <div className={`solution-feature-toggle ${showEstrategia ? 'open' : ''}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
            {showEstrategia && (
              <div className="solution-feature-detail">
                <p>Analisamos profundamente seu mercado, concorrentes e público-alvo para criar um plano de conteúdo único. Cada post, cada story, cada legenda é pensada para posicionar sua marca no topo. Não seguimos fórmulas prontas — sua estratégia é tão única quanto seu negócio.</p>
              </div>
            )}
            <div className="solution-feature">
              <div className="solution-feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 3 21 3 21 8"></polyline>
                  <line x1="4" y1="20" x2="21" y2="3"></line>
                  <polyline points="21 16 21 21 16 21"></polyline>
                  <line x1="15" y1="15" x2="21" y2="21"></line>
                  <line x1="4" y1="4" x2="9" y2="9"></line>
                </svg>
              </div>
              <span>Conteúdo de Alto Nível</span>
            </div>
            <div className="solution-feature">
              <div className="solution-feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
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
