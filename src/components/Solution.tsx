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
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
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
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <span>Conteúdo de Alto Nível</span>
            </div>
            <div className="solution-feature">
              <div className="solution-feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
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
