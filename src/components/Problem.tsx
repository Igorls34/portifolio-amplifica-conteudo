import '../styles/Problem.css'

const Problem = () => {
  return (
    <section id="problem" className="problem">
      <div className="container">
        <div className="problem-content">
          <h2 className="reveal">
            Ter um bom produto <span className="neon-text">não é mais o suficiente.</span>
          </h2>
          <div className="problem-text reveal delay-1">
            <p>
              Você abre o Instagram, posta uma foto, gasta tempo pensando na legenda... e nada. O silêncio das vendas dói. Muitas empresas têm potencial incrível, mas morrem no digital por falta de posicionamento estratégico.
            </p>
          </div>
          <div className="problem-highlight reveal delay-2">
            Se o seu conteúdo não vende, ele é apenas um enfeite caro no seu perfil.
          </div>
          <div className="problem-stats reveal delay-3">
            <div className="problem-stat">
              <h4>70%</h4>
              <span>Empresas sem Estratégia Digital</span>
            </div>
            <div className="problem-stat">
              <h4>3x</h4>
              <span>Mais Vendas com Conteúdo</span>
            </div>
            <div className="problem-stat">
              <h4>90%</h4>
              <span>Clientes Pesquisam Online</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problem
