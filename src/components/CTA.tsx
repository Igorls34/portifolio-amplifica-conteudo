import '../styles/CTA.css'

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content reveal-scale">
          <h2>Chega de ser <span className="neon-text">invisível.</span></h2>
          <p>
            Você está a um clique de transformar sua marca na referência que você sempre quis. 
            O próximo nível do seu conteúdo começa agora.
          </p>
          <button 
            className="neon-btn cta-btn-large"
            onClick={() => window.open('https://wa.me/351925811424', '_blank')}
          >
            Melhore seu conteúdo AQUI
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA
