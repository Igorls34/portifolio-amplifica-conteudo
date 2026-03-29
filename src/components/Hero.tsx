import '../styles/Hero.css'
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="reveal">Sua marca tem <span className="neon-text">potencial.</span> A gente tem o <span className="neon-text">megafone.</span></h1>
          <p className="reveal delay-1">
            Transformamos o seu conteúdo simples em uma máquina de resultados. 
            Posicionamento estratégico para quem cansou de postar e não vender.
          </p>
          <div className="reveal delay-2">
            <button 
              className="neon-btn"
              onClick={() => window.open('https://wa.me/351925811424', '_blank')}
            >
              Quero Amplificar meu Negócio
            </button>
          </div>
          <span className="hero-slogan reveal delay-3">Seu conteúdo também pode ser amplificado.</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
