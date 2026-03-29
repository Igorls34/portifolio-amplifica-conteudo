import '../styles/Problem.css'

const Problem = () => {
  return (
    <section id="problem" className="problem">
      <div className="container">
        <h2 className="reveal">Ter um bom produto <span className="neon-text">não é mais o suficiente.</span></h2>
        <div className="problem-grid">
          <div className="problem-text reveal delay-1">
            <p>
              Você abre o Instagram, posta uma foto, gasta tempo pensando na legenda e... nada. 
              O silêncio das vendas dói, né? Muitas lojas e restaurantes têm um potencial incrível, 
              mas morrem no digital porque não sabem se posicionar.
            </p>
          </div>
          <div className="problem-highlight reveal delay-2">
            Se o seu conteúdo não vende, ele é apenas um enfeite caro no seu perfil.
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problem
