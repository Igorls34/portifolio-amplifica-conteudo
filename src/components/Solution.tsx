import { useState } from 'react'
import '../styles/Solution.css'

const Solution = () => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null)

  const toggleFeature = (name: string) => {
    setActiveFeature(activeFeature === name ? null : name)
  }

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
            <div className="solution-feature clickable" onClick={() => toggleFeature('estrategia')}>
              <div className="solution-feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <span>Estratégia Personalizada</span>
              <div className={`solution-feature-toggle ${activeFeature === 'estrategia' ? 'open' : ''}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
            {activeFeature === 'estrategia' && (
              <div className="solution-feature-detail">
                <p>Analisamos profundamente seu mercado, concorrentes e público-alvo para criar um plano de conteúdo único. Cada post, cada story, cada legenda é pensada para posicionar sua marca no topo. Não seguimos fórmulas prontas — sua estratégia é tão única quanto seu negócio.</p>
              </div>
            )}
            <div className="solution-feature clickable" onClick={() => toggleFeature('conteudo')}>
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
              <div className={`solution-feature-toggle ${activeFeature === 'conteudo' ? 'open' : ''}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
            {activeFeature === 'conteudo' && (
              <div className="solution-feature-detail">
                <p>Produzimos fotos, vídeos e designs que elevam a percepção da sua marca. Cada peça é criada com direção de arte profissional, cores que conversam com sua identidade e narrativas que prendem a atenção nos primeiros segundos. Chega de conteúdo genérico — aqui é excelência visual.</p>
              </div>
            )}
            <div className="solution-feature clickable" onClick={() => toggleFeature('resultados')}>
              <div className="solution-feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                </svg>
              </div>
              <span>Resultados Mensuráveis</span>
              <div className={`solution-feature-toggle ${activeFeature === 'resultados' ? 'open' : ''}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
            {activeFeature === 'resultados' && (
              <div className="solution-feature-detail">
                <p>Acompanhamos métricas reais: alcance, engajamento, cliques e conversões. Relatórios transparentes mostram exatamente o que está funcionando e onde podemos otimizar. Nada de suposições — cada decisão é baseada em dados concretos para escalar sua presença digital.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution
