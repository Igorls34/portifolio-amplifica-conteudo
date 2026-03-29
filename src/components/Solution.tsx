import '../styles/Solution.css'
import pedroImg from '../imagens/foto-pedro.jpeg'

const Solution = () => {
  return (
    <section id="solution" className="solution">
      <div className="container">
        <div className="solution-grid">
          <div className="solution-image reveal-scale">
            <img src={pedroImg} alt="Pedro Lucas - CEO da Amplifica Conteúdo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="solution-content">
            <h2 className="reveal">Não somos apenas uma agência. Somos seus <span className="neon-text">parceiros de crescimento.</span></h2>
            <p className="reveal delay-1">
              A Amplifica Conteúdo nasceu de um grupo de amigos obcecados por resultados. 
              Liderados por Pedro, especialista em transformar marcas invisíveis em referências de mercado, 
              acreditamos que a estética sem estratégia é vazia.
            </p>
            <p className="reveal delay-2">
              Nós não apenas "fazemos posts". Nós criamos narrativas que prendem a atenção e convertem seguidores em clientes fiéis.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution
